import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata = {
  title: "Refund Policy - Code Crest LLC",
  description: "Refund Policy for Code Crest LLC - Learn about our refund process for digital products.",
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="January 15, 2026">
      <LegalSection title="1. Satisfaction Guarantee">
        <p>
          At Code Crest LLC, we stand behind the quality of our digital products.
          We offer a 30-day satisfaction guarantee on all digital products
          purchased from our website. If you&apos;re not completely satisfied with your
          purchase, we&apos;ll issue a full refund.
        </p>
      </LegalSection>

      <LegalSection title="2. Refund Eligibility">
        <p>To be eligible for a refund, requests must be:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Requested within 30 days of purchase</li>
          <li>Accompanied by proof of purchase (order confirmation email)</li>
          <li>For digital products not used for commercial purposes</li>
        </ul>
        <p className="mt-4">
          Refund requests should include your order number and reason for the
          refund.
        </p>
      </LegalSection>

      <LegalSection title="3. Non-Refundable Items">
        <p>The following items cannot be refunded:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Digital products requested for refund after 30 days of purchase</li>
          <li>Products used for resale or commercial purposes</li>
          <li>Items marked as final sale</li>
          <li>Duplicate or fraudulent refund requests</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. How to Request a Refund">
        <p>To initiate a refund:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-4">
          <li>
            Contact our support team at info@codecrestllc.com or call
            +1 (863) 320-9365
          </li>
          <li>Provide your order number and reason for refund request</li>
          <li>Our team will review your request within 2-3 business days</li>
          <li>Approved refunds will be processed within 5-7 business days</li>
          <li>
            You will receive a confirmation email once your refund is completed
          </li>
        </ol>
      </LegalSection>

      <LegalSection title="5. Refund Processing">
        <p>
          Once we receive and review your refund request, we will notify you via
          email regarding the status of your refund.
        </p>
        <p className="mt-4">
          Approved refunds are processed within 5-7 business days back to the
          original payment method. Depending on your bank or card issuer, it may
          take an additional 5-10 business days for the refund to appear on your
          statement.
        </p>
      </LegalSection>

      <LegalSection title="6. Refund Processing">
        <p>
          Once we receive and inspect your returned item, we will notify you via
          email regarding the status of your refund.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Approved refunds are processed within 5-7 business days</li>
          <li>
            Refunds are issued to the original payment method used for the
            purchase
          </li>
          <li>
            Depending on your bank or card issuer, it may take an additional 5-10
            business days for the refund to appear on your statement
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Exchanges">
        <p>
          We do not offer direct exchanges. If you need a different product, please
          return the original item for a refund and place a new order for the
          desired product.
        </p>
      </LegalSection>

      <LegalSection title="8. Defective Products">
        <p>
          If you receive a defective or damaged product:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Contact us immediately (within 48 hours of delivery preferred)</li>
          <li>Provide photos of the damage or defect</li>
          <li>
            We will arrange for a replacement or full refund at no additional cost
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Order Cancellation">
        <p>
          Orders may be cancelled before payment is completed by contacting our
          support team. Once payment is processed and the order is shipped,
          cancellation is not possible, but you may return the item following our
          return policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>
          For questions about returns or refunds, please contact us:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Email: info@codecrestllc.com</li>
          <li>Phone: +1 (863) 320-9365</li>
          <li>Address: 6750 W Mississippi Ave, Lakewood, CO 80226</li>
        </ul>
        <p className="mt-4">
          Our support team is available Monday-Friday, 9:00 AM - 6:00 PM MST.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
