"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I receive my digital products?",
    answer: "All digital products are delivered instantly to your email within 24 hours of purchase. You'll receive a direct download link to access PDFs, ebooks, and all course materials immediately.",
  },
  {
    question: "Can I download and access products offline?",
    answer: "Yes! All products are available as downloadable files. You can save them to your computer and access them anytime, anywhere, without needing an internet connection.",
  },
  {
    question: "How long do I have access to the products?",
    answer: "All digital products come with lifetime access. Once purchased, you own the digital files and can use them forever without any time restrictions or expiration.",
  },
  {
    question: "Are the products suitable for beginners?",
    answer: "Yes! Our products cater to all levels. Social media guides are perfect for anyone wanting to grow their presence, kids books are age-appropriate, and ebooks have beginner-friendly content.",
  },
  {
    question: "What refund policy do you have?",
    answer: "We offer a 30-day satisfaction guarantee on all digital products. If you're not satisfied, contact our support team within 30 days for a full refund.",
  },
  {
    question: "Can I gift digital products to others?",
    answer: "Yes! You can purchase products for others and they'll receive the digital files via email. Simply provide their email address during checkout.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "For bulk purchases or educational institution discounts, contact our support team. We're happy to discuss special pricing for larger orders.",
  },
  {
    question: "Are the materials regularly updated?",
    answer: "Yes, most of our guides and ebooks are updated regularly to reflect current trends and platform changes. Updated versions are available for free to previous purchasers.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Common Questions About Digital Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get answers about delivery, access, and our digital product marketplace.
            </p>
            
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
              </p>
              <a
                href="#contact"
                className="text-sm font-medium text-primary hover:underline"
              >
                Contact Support
              </a>
            </div>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
