import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata = {
  title: "Cookie Policy - Code Crest LLC",
  description: "Cookie Policy for Code Crest LLC - Learn how we use cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="January 15, 2026">
      <LegalSection title="1. What Are Cookies">
        <p>
          Cookies are small text files that are placed on your device when you
          visit a website. They are widely used to make websites work more
          efficiently and to provide information to website owners.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Cookies">
        <p>Code Crest LLC uses cookies and similar technologies for:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Essential Cookies:</strong> Required for basic website
            functionality, such as maintaining your shopping cart and processing
            orders.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how visitors
            interact with our website, allowing us to improve user experience.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences and
            settings to enhance your browsing experience.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used to track visitors across
            websites and display relevant advertisements (with your consent).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Types of Cookies We Use">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border mt-4">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 text-left text-foreground font-medium border-b border-border">
                  Cookie Type
                </th>
                <th className="px-4 py-2 text-left text-foreground font-medium border-b border-border">
                  Purpose
                </th>
                <th className="px-4 py-2 text-left text-foreground font-medium border-b border-border">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-border">Session</td>
                <td className="px-4 py-2 border-b border-border">Shopping cart, login state</td>
                <td className="px-4 py-2 border-b border-border">Until browser closes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border">Preferences</td>
                <td className="px-4 py-2 border-b border-border">Language, theme settings</td>
                <td className="px-4 py-2 border-b border-border">1 year</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border">Analytics</td>
                <td className="px-4 py-2 border-b border-border">Website performance tracking</td>
                <td className="px-4 py-2 border-b border-border">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="4. Third-Party Cookies">
        <p>
          Our website may use third-party services that place cookies on your
          device, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Google Analytics for website analytics</li>
          <li>Payment processors for transaction processing</li>
          <li>Social media platforms for sharing functionality</li>
        </ul>
        <p className="mt-4">
          These third parties have their own privacy policies governing their use
          of cookies.
        </p>
      </LegalSection>

      <LegalSection title="5. Managing Cookies">
        <p>
          You can control and manage cookies in various ways:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Browser Settings:</strong> Most browsers allow you to refuse or
            accept cookies. Check your browser&apos;s help section for instructions.
          </li>
          <li>
            <strong>Cookie Consent:</strong> When you first visit our website, you
            can choose which cookies to accept.
          </li>
          <li>
            <strong>Opt-Out Links:</strong> Some third-party services provide
            opt-out mechanisms.
          </li>
        </ul>
        <p className="mt-4">
          Please note that disabling certain cookies may affect the functionality
          of our website.
        </p>
      </LegalSection>

      <LegalSection title="6. Updates to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in
          our practices or for legal, operational, or regulatory reasons. Please
          check this page periodically for updates.
        </p>
      </LegalSection>

      <LegalSection title="7. Contact Us">
        <p>
          If you have questions about our use of cookies, please contact us:
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
