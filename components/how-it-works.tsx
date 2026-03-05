"use client";

import { ShoppingBag, CreditCard, Mail, Download } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    step: "01",
    title: "Browse Products",
    description: "Explore our marketplace of social media guides, kids books, and ebooks. Filter by category to find what you need.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Checkout",
    description: "Add items to your cart and proceed to secure checkout. Choose your preferred payment method.",
  },
  {
    icon: Mail,
    step: "03",
    title: "Instant Email Delivery",
    description: "Receive all digital products in your email within 24 hours of purchase. Direct download links included.",
  },
  {
    icon: Download,
    step: "04",
    title: "Download & Use",
    description: "Download your digital files and enjoy lifetime access. Use offline anytime, anywhere.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Purchase and receive your digital products instantly. No waiting, no shipping, just instant access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl border border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 relative">
                  <step.icon className="h-7 w-7 text-primary" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Code Crest?
              </h3>
              <p className="text-muted-foreground mb-6">
                We provide quality digital products for everyone. Our marketplace offers instant delivery, 
                lifetime access, and affordable prices with no hidden fees.
              </p>
              <ul className="space-y-3">
                {[
                  "Instant email delivery within 24 hours",
                  "Lifetime access to all digital products",
                  "No shipping costs, no waiting",
                  "30-day money-back guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Email Delivery</span>
                  <span className="font-medium text-foreground">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Access Duration</span>
                  <span className="font-medium text-foreground">Lifetime</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Support</span>
                  <span className="font-medium text-foreground">Email & Phone</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Refunds</span>
                  <span className="font-medium text-foreground">30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
