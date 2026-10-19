import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | KompileX',
  description:
    'How KompileX collects, uses, and protects your information when you visit kompilex.ai or work with our studio.',
}

const CONTACT_EMAIL = 'contact@kompilex.com'

const sections: LegalSection[] = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    blocks: [
      {
        type: 'paragraph',
        text: 'We collect only the information that is necessary to run our business, respond to inquiries, and deliver our services. We do not sell your personal data, and we never have.',
      },
      {
        type: 'list',
        heading: 'Information you provide to us',
        items: [
          'Contact details such as your name, email address, and phone number when you reach out through our site, email, or the contact form.',
          'Project details you share with us, including briefs, technical requirements, and any files you upload while discussing work.',
          'Communication records, including the content of messages you send to our team.',
        ],
      },
      {
        type: 'list',
        heading: 'Information we collect automatically',
        items: [
          'Technical data such as browser type, device type, and operating system.',
          'Usage data such as pages visited, time on site, and referring pages, collected through analytics.',
          'IP address and approximate location data used to understand where our visitors come from.',
        ],
      },
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use & Share Your Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'We use the information we collect to operate, maintain, and improve our website and services: to respond to your inquiries, prepare proposals and contracts, deliver and support the software we build, understand how visitors use our site, and comply with legal obligations.',
      },
      {
        type: 'paragraph',
        text: 'We do not sell, rent, or trade your personal information. We share it only in limited circumstances: with service providers who help us run our business (hosting, email, and analytics providers), with project collaborators when you engage us for work, and when required by law.',
      },
    ],
  },
  {
    id: 'cookies-and-tracking',
    title: 'Cookies & Tracking',
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website uses cookies and similar technologies to keep the site secure, remember your preferences (such as your chosen theme), and understand aggregate usage patterns.',
      },
      {
        type: 'list',
        items: [
          'Essential cookies that keep the site working, including preferences stored locally on your device.',
          'Analytics cookies that help us understand how the site is used in aggregate.',
          'Your browser settings let you block or delete cookies at any time. Blocking non-essential cookies will not affect your ability to browse the site.',
        ],
      },
    ],
  },
  {
    id: 'data-security-retention',
    title: 'Data Security & Retention',
    blocks: [
      {
        type: 'paragraph',
        text: 'We take reasonable administrative, technical, and physical measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Data is stored in encrypted form where feasible, and access is limited to team members who need it for their work. We retain personal information only as long as needed for the purposes described in this policy, or as required by law, and delete or anonymize it securely when it is no longer needed.',
      },
      {
        type: 'callout',
        title: 'Breach notification',
        text: 'In the unlikely event of a data breach affecting your personal information, we will notify affected parties and relevant authorities in line with applicable law.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Choices',
    blocks: [
      {
        type: 'paragraph',
        text: 'Depending on where you live, you may have the right to access, correct, delete, or restrict the processing of your personal information, to withdraw consent where processing is based on it, and to lodge a complaint with your local data protection authority.',
      },
      {
        type: 'paragraph',
        text: 'To exercise any of these rights, email us at the address below. We will respond within a reasonable timeframe, and always within 30 days.',
      },
    ],
  },
  {
    id: 'children-and-transfers',
    title: "Children & International Transfers",
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website and services are intended for businesses and adults over the age of 18. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it.',
      },
      {
        type: 'paragraph',
        text: 'KompileX is a remote-first studio operating primarily from Dhaka, Bangladesh, working with clients around the world. Your information may be processed in a country different from the one where you live. When we transfer data internationally, we apply appropriate safeguards to protect your information.',
      },
    ],
  },
  {
    id: 'changes-and-contact',
    title: 'Changes & Contact',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will update the "Last updated" date at the top of this page. Your continued use of our site after changes take effect constitutes acceptance of the revised policy.',
      },
      {
        type: 'paragraph',
        text: `If you have questions about this Privacy Policy, email ${CONTACT_EMAIL} or write to KompileX Technology, Dhaka, Bangladesh. We respond to privacy inquiries within one business day.`,
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteShell>
          <LegalPage
            eyebrow="/ Legal · Privacy Policy"
            title="Privacy Policy"
            tagline="How we collect, use, and protect your information when you visit our site or work with our studio."
            effectiveDate="August 8, 2026"
            updatedDate="August 8, 2026"
            intro="Your data stays yours. KompileX is a small engineering studio, and we keep the same no-nonsense approach to privacy that we bring to our code: collect as little as we need, protect what we hold, and never trade it for anything."
            sections={sections}
            email={CONTACT_EMAIL}
          />
        </SiteShell>
    </>
  )
}
