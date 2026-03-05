"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter Kit",
    description: "Perfect for getting started",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      { name: "Smart Hub Basic", included: true },
      { name: "2 Smart Plugs", included: true },
      { name: "1 Motion Sensor", included: true },
      { name: "Email Support", included: true },
      { name: "Smart Lock", included: false },
      { name: "Security Cameras", included: false },
    ],
  },
  {
    name: "Home Bundle",
    description: "Most popular for families",
    monthlyPrice: 129,
    yearlyPrice: 99,
    popular: true,
    features: [
      { name: "Smart Hub Pro", included: true },
      { name: "4 Smart Plugs", included: true },
      { name: "3 Motion Sensors", included: true },
      { name: "Priority Support", included: true },
      { name: "Smart Lock Elite", included: true },
      { name: "1 Indoor Camera", included: true },
    ],
  },
  {
    name: "Complete System",
    description: "Full home automation",
    monthlyPrice: 299,
    yearlyPrice: 249,
    features: [
      { name: "Smart Hub Pro", included: true },
      { name: "8 Smart Plugs", included: true },
      { name: "6 Motion Sensors", included: true },
      { name: "24/7 Phone Support", included: true },
      { name: "2 Smart Locks", included: true },
      { name: "4 Security Cameras", included: true },
    ],
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Bundled Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Save more with our pre-configured smart home bundles. Everything you need in one package.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            One-Time
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                isYearly ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            With Installation
          </span>
          {isYearly && (
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border p-6 ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">
                  {isYearly ? " with install" : " products only"}
                </span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Contact us for custom configurations and enterprise solutions.
        </p>
      </div>
    </section>
  );
}
