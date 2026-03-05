import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata = {
  title: "Privacy Policy - Code Crest LLC",
  description: "Privacy Policy for Code Crest LLC - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 15, 2026">
      <LegalSection title="1. Introduction">
        <p>
          Code Crest LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website codecrestllc.com
          and purchase our digital products.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, shipping address, and billing information when you make a
            purchase or contact us.
          </li>
          <li>
            <strong>Order Information:</strong> Details about products you purchase,
            order history, and payment information.
          </li>
          <li>
            <strong>Communication Data:</strong> Records of correspondence when you
            contact our support team.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, device
            information, and cookies when you visit our website.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about your orders and provide customer support</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Prevent fraud and ensure security</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Information Sharing">
        <p>
          We do not sell your personal information to third parties. We may share
          your information with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Service Providers:</strong> Companies that help us process
            payments, ship products, and provide customer support.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law, court order,
            or government request.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger,
            acquisition, or sale of assets.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect
          your personal information against unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over the
          Internet is 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, please contact us at info@codecrestllc.com.
        </p>
      </LegalSection>

      <LegalSection title="7. Data Retention">
        <p>
          We retain your personal information for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer retention
          period is required by law. Order information is typically retained for 7
          years for tax and legal purposes.
        </p>
      </LegalSection>

      <LegalSection title="8. Children&apos;s Privacy">
        <p>
          Our services are not intended for children under 13 years of age. We do
          not knowingly collect personal information from children under 13. If you
          believe we have collected information from a child, please contact us
          immediately.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the &quot;Last Updated&quot; date.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>
          If you have questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Email: info@codecrestllc.com</li>
          <li>Phone: +1 (863) 320-9365</li>
          <li>Address: 6750 W Mississippi Ave, Lakewood, CO 80226</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
