import { NextRequest, NextResponse } from 'next/server'

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
  - Location: Remote-first team operating in Dhaka time zone (GMT+6).

Guidelines for your responses:
- Keep responses concise, clear, and highly engaging. Use bullet points and bold text where appropriate. Avoid massive walls of text.
- If asked about contact info, provide our official email (contact@kompilex.com) and our LinkedIn profile (https://www.linkedin.com/in/kompilex-technology-ab9423428/). Do not repeat or duplicate the LinkedIn URL in your response.
- If asked about project starts or quotes, guide them to email us or fill out the contact form.
- Sound professional, technical, confident, and premium.
- Do not make up facts or project details. If asked something not covered here, reply that you don't have that information but they can reach out directly via contact@kompilex.com.`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

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

    const systemMessage = {
      role: 'system',
      content: SYSTEM_PROMPT,
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
        messages: [systemMessage, ...messages],
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

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Chat API Route Error:', error)
    return NextResponse.json(
      { error: error.message || 'An internal server error occurred.' },
      { status: 500 }
    )
  }
}
