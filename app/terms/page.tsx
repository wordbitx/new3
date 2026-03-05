import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata = {
  title: "Terms of Service - Code Crest LLC",
  description: "Terms of Service for Code Crest LLC digital products marketplace.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="January 15, 2026">
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing and using the Code Crest LLC website (codecrestllc.com) and
          purchasing our digital products, you agree to be bound by these Terms of
          Service. If you do not agree to these terms, please do not use our
          services.
        </p>
      </LegalSection>

      <LegalSection title="2. Company Information">
        <p>
          Code Crest LLC is a Colorado-based company specializing in digital
          products including social media guides, kids learning books, and business
          ebooks.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Business Name: Code Crest LLC</li>
          <li>Address: 6750 W Mississippi Ave, Lakewood, CO 80226</li>
          <li>Email: info@codecrestllc.com</li>
          <li>Phone: +1 (863) 320-9365</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Products and Services">
        <p>
          We offer digital products delivered via email including social media
          marketing guides, kids learning activity books, and business ebooks. All
          products are subject to availability, and we reserve the right to
          discontinue any product at any time.
        </p>
        <p className="mt-4">
          Product descriptions, samples, and preview images are provided for
          informational purposes and may vary from actual digital deliverables.
        </p>
      </LegalSection>

      <LegalSection title="4. Ordering Process">
        <p>
          When you place an order through our website, you will receive an order
          confirmation. This confirmation constitutes acceptance of your order. Your
          digital products will be delivered to your email address within 24 hours.
        </p>
        <p className="mt-4">
          We reserve the right to refuse or cancel any order for any reason,
          including but not limited to errors in pricing or suspected fraud.
        </p>
      </LegalSection>

      <LegalSection title="5. Payment Terms">
        <p>
          Payment is required at checkout before order fulfillment. We accept
          various payment methods including credit/debit cards and bank transfers.
        </p>
        <p className="mt-4">
          All prices are listed in US Dollars (USD) and are subject to change
          without notice. Applicable taxes will be calculated at checkout.
        </p>
      </LegalSection>

      <LegalSection title="6. Digital Product Delivery">
        <p>
          All digital products are delivered instantly to your email address. You
          will have lifetime access to download and use all purchased digital
          products. Downloads can be accessed 24/7 from any device with internet
          access.
        </p>
        <p className="mt-4">
          We are not responsible for email delivery failures due to incorrect email
          addresses or email server issues beyond our control.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <p>
          All content on this website, including text, graphics, logos, images, and
          software, is the property of Code Crest LLC and is protected by United
          States and international copyright laws.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Code Crest LLC shall not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of our products or services.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing Law">
        <p>
          These Terms of Service shall be governed by and construed in accordance
          with the laws of the State of Colorado, without regard to its conflict of
          law provisions.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Information">
        <p>
          For questions about these Terms of Service, please contact us at:
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
