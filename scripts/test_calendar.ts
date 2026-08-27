import * as fs from 'fs'
import * as path from 'path'
import { listUpcomingEvents, checkAvailability } from '../lib/googleCalendar'

// Manually parse .env.local to load keys for testing
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local')
  if (!fs.existsSync(envPath)) {
    console.error('.env.local not found at:', envPath)
    return
  }

  const content = fs.readFileSync(envPath, 'utf8')
  content.split('\n').forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return
    const index = trimmed.indexOf('=')
    if (index === -1) return
    const key = trimmed.substring(0, index).trim()
    let val = trimmed.substring(index + 1).trim()
    // Strip quotes
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.substring(1, val.length - 1)
    } else if (val.startsWith("'") && val.endsWith("'")) {
      val = val.substring(1, val.length - 1)
    }
    process.env[key] = val
  })
}

async function runTest() {
  loadEnv()
  
  console.log('Testing Google Calendar Integration...')
  console.log('Service Email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  console.log('Calendar ID:', process.env.GOOGLE_CALENDAR_ID || 'primary')
  
  try {
    const now = new Date()
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
    
    console.log('\n1. Listing upcoming events for the next 24 hours...')
    const events = await listUpcomingEvents(now.toISOString(), tomorrow.toISOString())
    console.log(`Found ${events.length} event(s).`)
    events.forEach((evt) => {
      console.log(`- [${evt.start?.dateTime || evt.start?.date}] ${evt.summary}`)
    })
    
    console.log('\n2. Checking availability for a slot tomorrow...')
    const testSlotStart = new Date(tomorrow)
    testSlotStart.setHours(14, 0, 0, 0)
    const testSlotEnd = new Date(tomorrow)
    testSlotEnd.setHours(15, 0, 0, 0)
    
    const available = await checkAvailability(testSlotStart.toISOString(), testSlotEnd.toISOString())
    console.log(`Is slot (${testSlotStart.toISOString()} to ${testSlotEnd.toISOString()}) available?`, available)
    
    console.log('\nTest complete.')
  } catch (error: any) {
    console.error('Test failed with error:', error)
  }
}

runTest()
