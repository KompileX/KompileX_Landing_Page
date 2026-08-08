import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service | KompileX',
  description:
    'The terms that govern how KompileX delivers software development services and how you may use our website.',
}

const CONTACT_EMAIL = 'contact@kompilex.com'

const sections: LegalSection[] = [
  {
    id: 'agreement-to-terms',
    title: 'Agreement to Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'These Terms of Service govern your use of the KompileX website and the software development services we provide. By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use our site or services.',
      },
    ],
  },
  {
    id: 'services-and-responsibilities',
    title: 'Services & Client Responsibilities',
    blocks: [
      {
        type: 'paragraph',
        text: 'KompileX is a four-person software development studio that designs, builds, and ships full-stack products for clients. Our services include web application design and development, mobile app development for iOS and Android, backend, API, and database engineering, cloud infrastructure and DevOps, and technical consulting. The specific scope, deliverables, timeline, and fees for any engagement are defined in a separate project agreement, which takes precedence over these general terms in the event of a conflict.',
      },
      {
        type: 'list',
        heading: 'To ensure projects succeed, clients agree to:',
        items: [
          'Provide accurate project requirements, feedback, and decisions in a timely manner.',
          'Grant access to accounts, systems, and materials needed to complete the work.',
          'Ensure they have the rights to all content, assets, and data they provide to us.',
          'Review and approve milestones within the agreed timeline and make payments as agreed.',
        ],
      },
      {
        type: 'callout',
        title: 'Delays on your side',
        text: 'Delays in providing feedback, assets, or approvals may adjust the project timeline. We will communicate any impact as soon as it becomes clear.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property & Confidentiality',
    blocks: [
      {
        type: 'paragraph',
        text: 'Upon full payment, ownership of the custom code, designs, and deliverables created specifically for your project transfers to you. We retain ownership of any pre-existing tools, libraries, frameworks, and internal processes we use to build your product. All work is delivered with a perpetual, non-exclusive, worldwide license to use, modify, and distribute it for your business.',
      },
      {
        type: 'paragraph',
        text: 'We treat all non-public information you share with us, including source code, business plans, financial data, and product ideas, as confidential. We will not disclose it to any third party without your consent, except as required by law, and access is limited to team members who need it to perform the work. These obligations survive the end of the engagement.',
      },
    ],
  },
  {
    id: 'payments-billing',
    title: 'Payments & Billing',
    blocks: [
      {
        type: 'paragraph',
        text: 'Payment terms, including rates, milestones, and invoicing schedules, are agreed in the project agreement. Unless otherwise stated:',
      },
      {
        type: 'list',
        items: [
          'Projects typically require an initial deposit before work begins.',
          'Invoices are due within 14 days of receipt.',
          'Work on a milestone pauses if payment for the previous milestone is outstanding.',
          'Any expenses agreed in advance, such as third-party licenses or hosting, are billed at cost.',
        ],
      },
    ],
  },
  {
    id: 'warranties-and-liability',
    title: 'Warranties & Liability',
    blocks: [
      {
        type: 'paragraph',
        text: 'We will perform services with reasonable skill and care, consistent with industry standards. We strive to deliver bug-free software, but software of any complexity cannot be guaranteed error-free under every condition. Except as expressly stated in a project agreement, our website and any pre-launch materials are provided "as is" without warranties of any kind.',
      },
      {
        type: 'paragraph',
        text: 'To the maximum extent permitted by law, KompileX will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from the use of our services. Our total liability for any claim related to an engagement will not exceed the total fees paid to us for that engagement. You agree to indemnify and hold KompileX harmless from any claims arising out of content or data you provide, your use of deliverables, or your breach of these terms.',
      },
    ],
  },
  {
    id: 'termination',
    title: 'Termination & Governing Law',
    blocks: [
      {
        type: 'paragraph',
        text: 'Either party may terminate an engagement with written notice, subject to the terms of the project agreement. Upon termination, you owe payment for all work completed up to the termination date, and we will hand over all work product produced to date, subject to payment. Sections relating to confidentiality, intellectual property, and liability survive termination.',
      },
      {
        type: 'paragraph',
        text: 'These terms are governed by the laws of the People\u2019s Republic of Bangladesh. Any disputes will be resolved through good-faith negotiation first, and if unresolved, through the courts of Dhaka, Bangladesh.',
      },
    ],
  },
  {
    id: 'changes-and-contact',
    title: 'Changes & Contact',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update these Terms of Service from time to time. Material changes will be reflected by updating the "Last updated" date at the top of this page. Continued use of our site or services after changes take effect constitutes acceptance of the revised terms.',
      },
      {
        type: 'paragraph',
        text: `If you have questions about these terms, email ${CONTACT_EMAIL} or write to KompileX Technology, Dhaka, Bangladesh. We respond to all inquiries within one business day.`,
      },
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <div className="relative z-10 bg-background">
        <Navbar />
        <main>
          <LegalPage
            eyebrow="/ Legal · Terms of Service"
            title="Terms of Service"
            tagline="The ground rules for working with KompileX and using our website."
            effectiveDate="August 8, 2026"
            updatedDate="August 8, 2026"
            intro="Straightforward terms for straightforward work. We believe good software comes from clear agreements, so this page keeps the legalese light and the expectations clear."
            sections={sections}
            email={CONTACT_EMAIL}
          />
        </main>
      </div>
      <Footer />
    </>
  )
}
