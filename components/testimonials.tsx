"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Content Creator",
    content: "Code Crest's social media guides transformed my Instagram growth. The strategies and templates provided are incredibly useful. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Parent",
    content: "My kids absolutely love the activity books from Code Crest. They're educational, engaging, and perfect for keeping them busy. Worth every penny!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Entrepreneur",
    content: "Code Crest's business ebooks provided the exact guidance I needed to start my passive income streams. Practical strategies with real examples.",
    rating: 5,
  },
  {
    name: "Jennifer Martinez",
    role: "Digital Marketer",
    content: "The complete digital products from Code Crest have been game-changers for my business. Fast delivery, quality content, and excellent customer service.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Code Crest for quality digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
