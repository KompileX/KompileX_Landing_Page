import { google } from 'googleapis'

const getAuthClient = () => {
  // Try OAuth 2.0 first (allows inviting attendees on personal Gmail accounts)
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

  if (clientId && clientSecret && refreshToken) {
    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      'urn:ietf:wg:oauth:2.0:oob' // Out-of-band redirect URI for copy-paste auth code
    )
    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    })
    return oauth2Client
  }

  // Fallback to Service Account
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY

  if (!email || !privateKey) {
    console.warn(
      'Warning: Neither Google OAuth 2.0 (GOOGLE_REFRESH_TOKEN) nor Service Account credentials are configured.'
    )
    return null
  }

  // Handle newlines in the private key if it's formatted as a single line in .env
  const formattedPrivateKey = privateKey.replace(/\\n/g, '\n')

  return new google.auth.JWT({
    email,
    key: formattedPrivateKey,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  })
}

const getCalendarClient = () => {
  const auth = getAuthClient()
  if (!auth) return null
  return google.calendar({ version: 'v3', auth })
}

const getCalendarId = () => {
  return process.env.GOOGLE_CALENDAR_ID || 'primary'
}

/**
 * Lists events in the calendar for a given time range.
 */
export async function listUpcomingEvents(timeMin: string, timeMax: string) {
  const calendar = getCalendarClient()
  if (!calendar) {
    throw new Error('Google Calendar client is not configured.')
  }

  const calendarId = getCalendarId()
  const response = await calendar.events.list({
    calendarId,
    timeMin,
    timeMax,
    singleEvents: true,
    orderBy: 'startTime',
  })

  return response.data.items || []
}

/**
 * Checks if a specific time slot is available on the calendar.
 * Returns true if available (no overlapping busy slots), false otherwise.
 */
export async function checkAvailability(startTime: string, endTime: string): Promise<boolean> {
  const calendar = getCalendarClient()
  if (!calendar) {
    throw new Error('Google Calendar client is not configured.')
  }

  const calendarId = getCalendarId()
  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: startTime,
      timeMax: endTime,
      items: [{ id: calendarId }],
    },
  })

  const calendarBusy = response.data.calendars?.[calendarId]?.busy
  // If there are no busy intervals returned in this time frame, the slot is available
  return !calendarBusy || calendarBusy.length === 0
}

/**
 * Creates a calendar event with a Google Meet link.
 */
export async function createCalendarEvent(params: {
  summary: string
  description?: string
  startTime: string
  endTime: string
  clientEmail: string
  clientName?: string
}) {
  const calendar = getCalendarClient()
  if (!calendar) {
    throw new Error('Google Calendar client is not configured.')
  }

  const calendarId = getCalendarId()
  const event = {
    summary: params.summary,
    description: params.description || '',
    start: {
      dateTime: params.startTime,
    },
    end: {
      dateTime: params.endTime,
    },
    attendees: [
      { email: params.clientEmail, displayName: params.clientName },
    ],
    conferenceData: {
      createRequest: {
        requestId: `meet-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        conferenceSolutionKey: {
          type: 'hangoutsMeet',
        },
      },
    },
  }

  const tryInsert = async (
    evt: any,
    retryAttendees = false,
    retryConference = false
  ): Promise<any> => {
    try {
      const response = await calendar.events.insert({
        calendarId,
        requestBody: evt,
        conferenceDataVersion: retryConference ? 0 : 1,
      })
      return response.data
    } catch (error: any) {
      console.warn(
        `Calendar insert failed (attendees=${!retryAttendees}, conference=${!retryConference}):`,
        error.message || error
      )

      const isAttendeeError =
        error.message?.includes('Service accounts cannot invite attendees') ||
        error.status === 403 ||
        error.code === 403

      const isConferenceError =
        error.message?.includes('Invalid conference type value') ||
        error.status === 400 ||
        error.code === 400

      if (isAttendeeError && !retryAttendees) {
        console.log('Retrying calendar insert without attendees...')
        const nextEvent = {
          ...evt,
          description: `${evt.description}\n\n--- Visitor Details ---\nName: ${params.clientName || 'N/A'}\nEmail: ${params.clientEmail}`,
          attendees: [],
        }
        return tryInsert(nextEvent, true, retryConference)
      }

      if (isConferenceError && !retryConference) {
        console.log('Retrying calendar insert without Google Meet conference...')
        const nextEvent = { ...evt }
        delete nextEvent.conferenceData
        return tryInsert(nextEvent, retryAttendees, true)
      }

      throw error
    }
  }

  return tryInsert(event)
}
