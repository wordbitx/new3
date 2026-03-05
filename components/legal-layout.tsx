"use client";

import React from "react"

import Link from "next/link";
import { Code, ArrowLeft } from "lucide-react";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Code Crest</span>
            <span className="text-sm font-medium text-muted-foreground">LLC</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="space-y-8 text-foreground">{children}</div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Code Crest LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
              <Link href="/refund" className="text-muted-foreground hover:text-foreground">
                Refunds
              </Link>
              <Link href="/legal" className="text-muted-foreground hover:text-foreground">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="text-muted-foreground space-y-4">{children}</div>
    </section>
  );
}
