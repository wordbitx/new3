"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, Code, X } from "lucide-react";

export function Header() {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Code className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Code Crest</span>
          <span className="text-sm font-medium text-muted-foreground">LLC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative bg-transparent">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <CartSidebar />
            </SheetContent>
          </Sheet>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function CartSidebar() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-lg font-medium text-foreground">Your cart is empty</p>
        <p className="text-sm text-muted-foreground">Add items to get started</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold text-foreground mb-4">Shopping Cart</h2>
      <div className="flex-1 overflow-auto">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-3 py-4 border-b border-border">
            <div className="relative w-16 h-16 rounded-lg bg-muted overflow-hidden">
              <Image
                src={item.product.image || "/placeholder.svg"}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground text-sm">{item.product.name}</p>
              <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-6 h-6 rounded bg-muted text-foreground text-sm hover:bg-muted/80"
                >
                  -
                </button>
                <span className="text-sm text-foreground">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-6 h-6 rounded bg-muted text-foreground text-sm hover:bg-muted/80"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.product.id)}
              className="text-muted-foreground hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
<div className="border-t border-border pt-6 mt-4 px-6 pb-8">
            <div className="flex justify-between items-center mb-4">
          <span className="font-medium text-foreground">Total:</span>
          <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
        </div>
        <Link href="/checkout">
          <Button className="w-full">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
}
