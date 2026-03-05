import { LegalLayout, LegalSection } from "@/components/legal-layout";
import Link from "next/link";

export const metadata = {
  title: "Legal Information - Code Crest LLC",
  description: "Legal Information for Code Crest LLC - Company details, disclaimers, and legal notices.",
};

export default function LegalPage() {
  return (
    <LegalLayout title="Legal Information" lastUpdated="January 15, 2026">
      <LegalSection title="Company Information">
        <p>
          Code Crest LLC is a limited liability company registered in the State of
          Colorado, United States.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Legal Name:</strong> Code Crest LLC</li>
          <li><strong>Business Type:</strong> Limited Liability Company</li>
          <li><strong>State of Registration:</strong> Colorado</li>
          <li><strong>Business Address:</strong> 6750 W Mississippi Ave, Lakewood, CO 80226</li>
          <li><strong>Contact Email:</strong> info@codecrestllc.com</li>
          <li><strong>Contact Phone:</strong> +1 (863) 320-9365</li>
        </ul>
      </LegalSection>

      <LegalSection title="Website Disclaimer">
        <p>
          The information provided on codecrestllc.com is for general informational
          purposes only. While we strive to keep the information accurate and up to
          date, we make no representations or warranties of any kind, express or
          implied, about the completeness, accuracy, reliability, suitability, or
          availability of the website or the information, products, services, or
          related graphics contained on the website.
        </p>
        <p className="mt-4">
          Any reliance you place on such information is strictly at your own risk.
          In no event will we be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, arising from the
          use of this website.
        </p>
      </LegalSection>

      <LegalSection title="Digital Product Disclaimers">
        <p>
          Digital products are provided in their current state. Users are
          responsible for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Ensuring compatibility with their devices and systems</li>
          <li>Maintaining adequate storage space for downloaded files</li>
          <li>Using the content for personal, non-commercial purposes</li>
          <li>Respecting all intellectual property rights</li>
          <li>Understanding that content may be updated periodically</li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content on this website, including but not limited to text, graphics,
          logos, icons, images, audio clips, digital downloads, and software, is
          the property of Code Crest LLC or its content suppliers and is protected
          by United States and international copyright, trademark, and other
          intellectual property laws.
        </p>
        <p className="mt-4">
          The Code Crest name, logo, and related marks are trademarks of Code
          Crest LLC. You may not use our trademarks without our prior written
          permission.
        </p>
      </LegalSection>

      <LegalSection title="External Links">
        <p>
          Our website may contain links to external websites that are not operated
          by us. We have no control over the content and practices of these sites
          and cannot accept responsibility for their privacy policies or content.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Code Crest LLC and its
          officers, directors, employees, agents, and affiliates shall not be
          liable for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            Any indirect, incidental, special, consequential, or punitive damages
          </li>
          <li>
            Any loss of profits, revenue, data, or business opportunities
          </li>
          <li>
            Any damages arising from the use or inability to use our products or
            services
          </li>
          <li>
            Any damages resulting from unauthorized access to or alteration of your
            data
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Code Crest LLC and its
          officers, directors, employees, agents, and affiliates from and against
          any and all claims, damages, losses, costs, and expenses (including
          reasonable attorneys&apos; fees) arising from your use of our website or
          products, or your violation of these terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These terms and any disputes arising from or relating to them shall be
          governed by and construed in accordance with the laws of the State of
          Colorado, without regard to its conflict of law provisions. Any legal
          action or proceeding shall be brought exclusively in the state or federal
          courts located in Colorado.
        </p>
      </LegalSection>

      <LegalSection title="Severability">
        <p>
          If any provision of these terms is found to be unenforceable or invalid,
          that provision shall be limited or eliminated to the minimum extent
          necessary, and the remaining provisions shall remain in full force and
          effect.
        </p>
      </LegalSection>

      <LegalSection title="Related Policies">
        <p>Please also review our other legal documents:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/cookies" className="text-primary hover:underline">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link href="/refund" className="text-primary hover:underline">
              Refund Policy
            </Link>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Contact for Legal Matters">
        <p>
          For legal inquiries or to report intellectual property concerns, please
          contact us:
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
