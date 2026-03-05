"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Get In Touch with Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our digital products? Contact us for support, information, or assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <ContactCard
                icon={Mail}
                title="Email"
                value="info@codecrestllc.com"
                href="mailto:info@codecrestllc.com"
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                value="+1 (863) 320-9365"
                href="tel:+18633209365"
              />
              <ContactCard
                icon={MapPin}
                title="Address"
                value="6750 W Mississippi Ave, Lakewood, CO 80226"
              />
              <ContactCard
                icon={Clock}
                title="Response Time"
                value="Within 24 hours"
              />
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM MST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM MST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name
                    </label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone (Optional)
                  </label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground">
                    <option value="">Select a topic</option>
                    <option value="order">Place an Order</option>
                    <option value="support">Technical Support</option>
                    <option value="question">General Question</option>
                    <option value="custom">Custom Request</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We&apos;ll respond within 24 hours with a detailed quote or answer.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="bg-card rounded-xl border border-border p-4 transition-colors hover:border-primary/50">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="text-sm font-medium text-foreground">{value}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}
