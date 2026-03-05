"use client";

import { Share2, BookOpen, Users, Globe, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Share2,
    title: "Social Media Mastery",
    description: "Master Instagram, Facebook, TikTok, YouTube, LinkedIn, Twitter, and Pinterest marketing strategies.",
    price: "From $17.99",
    features: ["7 Platforms", "Growth Hacks", "Templates Included"],
  },
  {
    icon: BookOpen,
    title: "Kids Learning Materials",
    description: "Engaging activity books and learning workbooks for children ages 4-12. Fun, educational, and printable.",
    price: "From $6.99",
    features: ["Multiple Ages", "Printable PDF", "100+ Activities"],
  },
  {
    icon: Lightbulb,
    title: "Business & Entrepreneurship",
    description: "Learn entrepreneurship, productivity, and passive income strategies from industry experts.",
    price: "From $14.99",
    features: ["Business Models", "Action Plans", "Real Examples"],
  },
  {
    icon: Users,
    title: "Personal Development",
    description: "Transform your life with proven personal development strategies and self-improvement guides.",
    price: "From $16.99",
    features: ["Life Coaching", "Exercises", "Journaling Tools"],
  },
  {
    icon: Globe,
    title: "Instant Email Delivery",
    description: "All products delivered instantly to your email inbox. No waiting, no shipping, digital access forever.",
    price: "Within 24hrs",
    features: ["Email Delivery", "Lifetime Access", "No Shipping"],
  },
  {
    icon: Zap,
    title: "Complete Marketplace",
    description: "16 curated digital products covering social media, kids learning, and valuable business guides.",
    price: "From $6.99",
    features: ["16 Products", "Quality Content", "Great Prices"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Why Shop Code Crest
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality digital products for content creators, parents, and entrepreneurs. Delivered instantly via email with lifetime access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-xl border border-border p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">{service.price}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="#products">View Products</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
