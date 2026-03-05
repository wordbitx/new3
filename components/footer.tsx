"use client";

import Link from "next/link";
import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Code className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Code Crest</span>
              <span className="text-sm font-medium opacity-70">LLC</span>
            </Link>
            <p className="text-sm opacity-70 mb-4">
              Quality digital products marketplace for social media growth, kids learning, and business success delivered via email.
            </p>
            <div className="space-y-1 text-sm opacity-70">
              <p>6750 W Mississippi Ave</p>
              <p>Lakewood, CO 80226</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#products" className="hover:opacity-100">Social Media Guides</a></li>
              <li><a href="#products" className="hover:opacity-100">Kids Learning Books</a></li>
              <li><a href="#products" className="hover:opacity-100">Business Ebooks</a></li>
              <li><a href="#products" className="hover:opacity-100">Shop All</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#services" className="hover:opacity-100">Services</a></li>
              <li><a href="#pricing" className="hover:opacity-100">Pricing</a></li>
              <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
              <li><a href="#how-it-works" className="hover:opacity-100">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link href="/terms" className="hover:opacity-100">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:opacity-100">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:opacity-100">Cookie Policy</Link></li>
              <li><Link href="/refund" className="hover:opacity-100">Refund Policy</Link></li>
              <li><Link href="/legal" className="hover:opacity-100">Legal Information</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm opacity-70">
              <p>&copy; {new Date().getFullYear()} Code Crest LLC. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 text-sm opacity-70">
              <a href="mailto:info@codecrestllc.com" className="hover:opacity-100">
                info@codecrestllc.com
              </a>
              <span>|</span>
              <a href="tel:+18633209365" className="hover:opacity-100">
                +1 (863) 320-9365
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
