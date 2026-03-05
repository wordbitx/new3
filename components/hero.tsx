"use client";

import React from "react"

import { Button } from "@/components/ui/button";
import { ShoppingBag, BookOpen, Zap, Gift } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <ShoppingBag className="h-4 w-4" />
              Digital Products Marketplace
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Digital Products for Your 
              <span className="text-primary"> Success</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Explore our curated selection of social media guides, kids learning materials, and valuable ebooks. All delivered instantly via email with lifetime access.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#products">Shop Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">16</p>
                <p className="text-sm text-muted-foreground">Digital Products</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">24hr</p>
                <p className="text-sm text-muted-foreground">Email Delivery</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000" />
              
              <div className="relative bg-card rounded-2xl border border-border p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <FeatureCard icon={ShoppingBag} title="Products" value="16 Items" />
                  <FeatureCard icon={BookOpen} title="Email Delivery" value="Instant" />
                  <FeatureCard icon={Gift} title="Instant Access" value="Download" />
                  <FeatureCard icon={Zap} title="Support" value="Lifetime" />
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-muted">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Delivery Status</span>
                    <span className="inline-flex items-center gap-1 text-sm text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      Email Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by content creators, parents, and entrepreneurs worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            {["Social Creators", "Parents", "Entrepreneurs", "Students", "Professionals"].map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) {
  return (
    <div className="p-4 rounded-lg bg-muted/50 text-center">
      <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
