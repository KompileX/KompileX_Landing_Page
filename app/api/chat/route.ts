import { NextRequest, NextResponse } from 'next/server'
import { checkAvailability, listUpcomingEvents, createCalendarEvent } from '@/lib/googleCalendar'

// Default system prompt containing all key information about KompileX.
const SYSTEM_PROMPT = `You are the official AI Assistant for KompileX, a premium software engineering and development studio. Your goal is to answer visitor questions about KompileX with precise, professional, and friendly information.

Here is the official, canonical information about KompileX:
- **What is KompileX?**: We are an elite team of four specialist software engineers who design, build, and ship full digital products end-to-end (frontend & mobile, backend & systems, integrations, and AI) with absolute cohesion and no hand-offs. We build high-performance software that ships on time.
- **The Team (Specialists)**:
  1. **Asaduzzaman Ashik (Frontend & Mobile Specialist)**: Handles UI/UX implementation, client-side performance, responsive web apps, React Native modules, and interactive interfaces.
  2. **Md. Hridoy Mia (Lead Backend & Systems Architect)**: Directs core application architecture (DDD/CQRS), real-time streaming, background worker processes, scalable APIs, and high-performance database layers.
  3. **Md Mostafizur Rahman (Integrations & Automation Lead)**: Oversees third-party API integration, SaaS/CRM integrations, multi-tenant workflow engines, messaging automation, and MCP (Model Context Protocol) tool execution.
  4. **Md. Mostofa Hasib (AI & Full-Stack Innovations Lead)**: Leads AI/ML engineering, cross-platform product delivery, research and development, and end-to-end full-stack features.
- **Our Services & Capabilities**:
  - **Web Application Development**: Responsive React & Next.js apps, design systems, performance, SEO, and accessibility optimizations.
  - **Mobile App Development**: Cross-platform iOS & Android apps (React Native) with native module integration, offline-first architectures, and App Store/Play Store delivery.
  - **Backend & API Engineering**: REST & GraphQL APIs using Node.js, Go, PostgreSQL, robust authentication systems, billing, and highly scalable databases.
  - **Cloud & DevOps**: Automated CI/CD pipelines, containerized deployments (AWS, Vercel, Docker), real-time monitoring, and cost-efficient cloud infrastructure.
- **Why Choose KompileX?**:
  - **AI-Powered Development**: We leverage cutting-edge AI tools and automation frameworks to accelerate delivery cycles and reduce bug rates.
  - **24/7 Support**: Continuous monitoring, active incident resolution, and platform availability checks.
  - **Senior Engineering Excellence**: Rigorously vetted senior engineers and AI specialists working closely as a single cohesive unit.
  - **Proven Experience**: 4 people on the team, 10+ products shipped, 3 years building together, and 100% remote-first.
- **Contact & Inquiries**:
  - Email: contact@kompilex.com or hello@kompilex.dev
  - LinkedIn: https://www.linkedin.com/in/kompilex-technology-ab9423428/
  - Location: Remote-first team working with clients worldwide (working hours GMT+6).

- **Booking Meetings (Google Calendar)**:
  - You can schedule discovery calls or project meetings directly into our calendar.
  - To book a meeting, you **must** obtain:
    1. A requested date and time (confirm timezone).
    2. The client's email address.
    3. The client's name.
  - Before booking a meeting, you must check our calendar's availability. Use the \`check_calendar_availability\` or \`list_upcoming_meetings\` tool.
  - We are generally available for meetings on weekdays (Monday to Friday) from **10:00 AM to 7:00 PM GMT+6**. Do not book meetings outside these hours unless the user specifically insists and you confirm availability.
  - If a time slot is busy, inspect the calendar using \`list_upcoming_meetings\` and propose 2 to 3 alternative times when we are free during working hours.
  - Once a slot is confirmed and the client has provided their email and name, call the \`create_calendar_event\` tool to create the meeting. It will automatically generate a Google Meet video link.
  - Clearly present the confirmation and meeting details (including the Google Meet link if booking succeeded) to the client.

Guidelines for your responses:
- Keep responses concise, clear, and highly engaging. Use bullet points and bold text where appropriate. Avoid massive walls of text.
- If asked about contact info, provide our official email (contact@kompilex.com) and our LinkedIn profile (https://www.linkedin.com/in/kompilex-technology-ab9423428/). Do not repeat or duplicate the LinkedIn URL in your response.
- If asked about project starts or quotes, guide them to email us or fill out the contact form, or offer to schedule a discovery meeting right now in the chat!
- Sound professional, technical, confident, and premium.
- Do not make up facts or project details. If asked something not covered here, reply that you don't have that information but they can reach out directly via contact@kompilex.com.`

const tools = [
  {
    type: 'function',
    function: {
      name: 'check_calendar_availability',
      description: 'Checks if a specific date/time range is available on the calendar.',
      parameters: {
        type: 'object',
        properties: {
          startTime: {
            type: 'string',
            description: 'ISO 8601 string of the start time (e.g. 2026-08-27T14:00:00+06:00)',
          },
          endTime: {
            type: 'string',
            description: 'ISO 8601 string of the end time (e.g. 2026-08-27T15:00:00+06:00)',
          },
        },
        required: ['startTime', 'endTime'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'list_upcoming_meetings',
      description: 'Lists upcoming meetings on the calendar for a specific date range to check availability.',
      parameters: {
        type: 'object',
        properties: {
          timeMin: {
            type: 'string',
            description: 'ISO 8601 string of the minimum time to list meetings (e.g. 2026-08-27T00:00:00+06:00)',
          },
          timeMax: {
            type: 'string',
            description: 'ISO 8601 string of the maximum time to list meetings (e.g. 2026-08-27T23:59:59+06:00)',
          },
        },
        required: ['timeMin', 'timeMax'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'create_calendar_event',
      description: 'Creates a calendar event (books a meeting) with the client. Always generate a Google Meet video conference.',
      parameters: {
        type: 'object',
        properties: {
          summary: {
            type: 'string',
            description: 'Summary/title of the meeting (e.g. KompileX Discovery Call: Client Name)',
          },
          description: {
            type: 'string',
            description: 'Description of the meeting details.',
          },
          startTime: {
            type: 'string',
            description: 'ISO 8601 string of the start time (e.g. 2026-08-27T14:00:00+06:00)',
          },
          endTime: {
            type: 'string',
            description: 'ISO 8601 string of the end time (e.g. 2026-08-27T15:00:00+06:00)',
          },
          clientEmail: {
            type: 'string',
            description: 'Email address of the client (MANDATORY - you must extract this from the user messages and pass it here).',
          },
          clientName: {
            type: 'string',
            description: 'Name of the client.',
          },
        },
        required: ['summary', 'startTime', 'endTime', 'clientEmail'],
      },
    },
  },
]

async function fetchWithRetry(
  url: string,
  options: any,
  retries = 3,
  initialDelay = 2000
): Promise<Response> {
  let attempt = 0
  while (attempt < retries) {
    const response = await fetch(url, options)

    if (response.status === 429) {
      attempt++
      if (attempt >= retries) {
        return response
      }

      let delay = initialDelay
      try {
        const errorData = await response.clone().json()
        const message = errorData.error?.message || ''
        const match = message.match(/try again in ([\d\.]+)s/i)
        if (match && match[1]) {
          delay = Math.ceil(parseFloat(match[1]) * 1000) + 500
        }
      } catch (e) {
        console.error('Failed to parse 429 wait time, using default delay.', e)
      }

      console.warn(
        `Rate limit (429) reached. Waiting ${delay}ms before retry ${attempt}/${retries}...`
      )
      await new Promise((resolve) => setTimeout(resolve, delay))
      continue
    }

    return response
  }

  return fetch(url, options)
}

export async function POST(request: NextRequest) {
  try {
    const { messages, clientDateTime } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request body. "messages" array is required.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      console.warn('GROQ_API_KEY is not defined. Returning demo fallback response.')
      return NextResponse.json(
        {
          choices: [
            {
              message: {
                role: 'assistant',
                content: `⚠️ **Server Configuration Needed:** The Groq API Key is not set up in the environment. Please add \`GROQ_API_KEY\` to your \`.env\` or \`.env.local\` file to enable live responses.\n\nHere is a demo answer: KompileX is an elite team of four specialist software engineers building Web, Mobile, Backend, and AI solutions. Feel free to ask more once the API key is configured!`
              }
            }
          ]
        }
      )
    }

    // Determine reference time for relative dates
    const referenceTime = clientDateTime ? new Date(clientDateTime) : new Date()
    const dhakaTimeStr = referenceTime.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })
    const dayOfWeek = referenceTime.toLocaleString('en-US', { weekday: 'long', timeZone: 'Asia/Dhaka' })

    const dynamicContext = `\n\n[Temporal Context]\n- Current time in Dhaka (GMT+6): ${dhakaTimeStr} (${dayOfWeek})\n- Reference this time to interpret relative time expressions like "tomorrow", "next Monday", "this afternoon", or "in 2 hours". All appointments will be created in the Asia/Dhaka time zone.`

    const systemMessage = {
      role: 'system',
      content: SYSTEM_PROMPT + dynamicContext,
    }

    // Limit chat history to prevent hitting rate limits (TPM)
    const maxHistory = 8
    const recentMessages = messages.length > maxHistory 
      ? messages.slice(-maxHistory)
      : messages

    // Process tool calling iteratively
    let currentMessages = [systemMessage, ...recentMessages]
    let loopCount = 0
    const maxLoops = 5
    let latestData = null

    while (loopCount < maxLoops) {
      const response = await fetchWithRetry('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
          messages: currentMessages,
          tools: tools,
          tool_choice: 'auto',
          temperature: 0.5,
          max_tokens: 1024,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Groq API Error Status:', response.status, errorData)
        return NextResponse.json(
          { error: errorData.error?.message || 'Failed to fetch response from Groq API.' },
          { status: response.status }
        )
      }

      latestData = await response.json()
      const message = latestData.choices?.[0]?.message

      if (!message) {
        throw new Error('Received invalid empty response from Groq.')
      }

      // If the model did not request any tool calls, we are done
      if (!message.tool_calls || message.tool_calls.length === 0) {
        return NextResponse.json(latestData)
      }

      // Append assistant's tool-calling request message to history
      currentMessages.push(message)

      // Execute each tool call
      for (const toolCall of message.tool_calls) {
        const { id: toolCallId, function: toolFunction } = toolCall
        const name = toolFunction?.name
        const argsString = toolFunction?.arguments
        let args = {} as any
        try {
          if (argsString) {
            args = JSON.parse(argsString)
          }
        } catch (e) {
          console.error(`Failed to parse arguments for tool ${name}:`, argsString)
        }

        console.log(`Executing tool ${name} with arguments:`, args)
        let result: any = {}

        try {
          if (name === 'check_calendar_availability') {
            const { startTime, endTime } = args
            const isAvailable = await checkAvailability(startTime, endTime)
            result = { isAvailable }
          } else if (name === 'list_upcoming_meetings') {
            const { timeMin, timeMax } = args
            const events = await listUpcomingEvents(timeMin, timeMax)
            result = {
              events: events.map((evt: any) => ({
                id: evt.id,
                summary: evt.summary,
                start: evt.start,
                end: evt.end,
              })),
            }
          } else if (name === 'create_calendar_event') {
            const { summary, description, startTime, endTime, clientEmail, clientName } = args
            const event = await createCalendarEvent({
              summary,
              description,
              startTime,
              endTime,
              clientEmail,
              clientName,
            })
            result = {
              success: true,
              eventId: event.id,
              htmlLink: event.htmlLink,
              meetLink: event.conferenceData?.entryPoints?.find((ep: any) => ep.entryPointType === 'video')?.uri || null,
            }
          } else {
            result = { error: `Tool ${name} is not implemented.` }
          }
        } catch (toolError: any) {
          console.error(`Error executing tool ${name}:`, toolError)
          result = { error: toolError.message || `Failed to execute tool ${name}.` }
        }

        // Add the tool result to the conversation history
        currentMessages.push({
          role: 'tool',
          tool_call_id: toolCallId,
          name: name,
          content: JSON.stringify(result),
        })
      }

      loopCount++
    }

    // Fallback if max loops is reached
    if (latestData) {
      return NextResponse.json(latestData)
    }

    return NextResponse.json({ error: 'Too many tool iterations.' }, { status: 500 })

  } catch (error: any) {
    console.error('Chat API Route Error:', error)
    return NextResponse.json(
      { error: error.message || 'An internal server error occurred.' },
      { status: 500 }
    )
  }
}
