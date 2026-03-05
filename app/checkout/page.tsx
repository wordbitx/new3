"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ShoppingCart,
  CreditCard,
  Building2,
  Loader2,
  CheckCircle,
  AlertCircle,
  Zap,
  Mail,
  Phone,
} from "lucide-react";

type CheckoutStep =
  | "summary"
  | "payment-options"
  | "redirecting"
  | "payment-info"
  | "confirmation";

function CheckoutContent() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("summary");
  const [orderNumber, setOrderNumber] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const subtotal = total;
  const tax = subtotal * 0.08;
  const finalTotal = subtotal + tax;

  useEffect(() => {
    if (step === "summary" && items.length === 0) {
      // Cart is empty
    }
  }, [step, items.length]);

  const generateOrderNumber = () => {
    return `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const handleProceedToPayment = () => {
    if (!customerInfo.name || !customerInfo.email) return;
    setStep("payment-options");
  };

  const handlePayOnline = () => {
    setStep("redirecting");
    setTimeout(() => {
      setStep("payment-info");
    }, 2000);
  };

  const handleContinueWithOrder = () => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setOrderTotal(finalTotal);
    clearCart();
    setStep("confirmation");
  };

  if (items.length === 0 && step === "summary") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-6">Add some products to get started</p>
          <Link href="/#products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Code Crest</span>
          </Link>
          <span className="text-sm text-muted-foreground">Secure Checkout</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {step === "summary" && (
          <OrderSummary
            items={items}
            subtotal={subtotal}
            tax={tax}
            total={finalTotal}
            customerInfo={customerInfo}
            setCustomerInfo={setCustomerInfo}
            onProceed={handleProceedToPayment}
            onCancel={() => window.history.back()}
          />
        )}

        {step === "payment-options" && (
          <PaymentOptions
            total={finalTotal}
            onPayOnline={handlePayOnline}
            onBack={() => setStep("summary")}
          />
        )}

        {step === "redirecting" && <RedirectingScreen />}

        {step === "payment-info" && (
          <PaymentInfoScreen onContinue={handleContinueWithOrder} />
        )}

        {step === "confirmation" && (
          <OrderConfirmation orderNumber={orderNumber} total={orderTotal} />
        )}
      </main>
    </div>
  );
}

function OrderSummary({
  items,
  subtotal,
  tax,
  total,
  customerInfo,
  setCustomerInfo,
  onProceed,
  onCancel,
}: {
  items: { product: { id: string; name: string; price: number; image: string }; quantity: number }[];
  subtotal: number;
  tax: number;
  total: number;
  customerInfo: { name: string; email: string; phone: string; address: string };
  setCustomerInfo: (info: { name: string; email: string; phone: string; address: string }) => void;
  onProceed: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Order Summary</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-semibold text-foreground mb-4">Your Items</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg bg-muted overflow-hidden">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-foreground">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-semibold text-foreground mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Full Name *
                </label>
                <Input
                  placeholder="John Doe"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Phone (Optional)
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Shipping Address (Optional)
                </label>
                <Input
                  placeholder="123 Main St, City, State, ZIP"
                  value={customerInfo.address}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, address: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
            <h2 className="font-semibold text-foreground mb-4">Order Total</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (8%)</span>
                <span className="text-foreground">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-xl font-bold text-foreground">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full"
                onClick={onProceed}
                disabled={!customerInfo.name || !customerInfo.email}
              >
                Proceed to Payment
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentOptions({
  total,
  onPayOnline,
  onBack,
}: {
  total: number;
  onPayOnline: () => void;
  onBack: () => void;
}) {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-bold text-foreground">Payment Details</h1>
      </div>

      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="font-semibold text-foreground mb-2">Payment Options</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Please select your preferred payment method to complete your order.
        </p>

        <div className="space-y-4 mb-6">
          <button
            onClick={onPayOnline}
            className="w-full flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors text-left"
          >
            <div className="p-3 rounded-lg bg-primary/10">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Pay Online</p>
              <p className="text-sm text-muted-foreground">
                Secure payment via credit/debit card
              </p>
            </div>
          </button>

          <button
            onClick={onPayOnline}
            className="w-full flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors text-left"
          >
            <div className="p-3 rounded-lg bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Bank Transfer</p>
              <p className="text-sm text-muted-foreground">
                Pay directly to our bank account
              </p>
            </div>
          </button>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted-foreground">Total</span>
            <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 bg-transparent" onClick={onBack}>
              Back
            </Button>
            <Button className="flex-1" onClick={onPayOnline}>
              Pay Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RedirectingScreen() {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <div className="bg-card rounded-xl border border-border p-12">
        <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Redirecting to payment gateway...
        </h2>
        <p className="text-muted-foreground">Please wait while we connect you.</p>
      </div>
    </div>
  );
}

function PaymentInfoScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-card rounded-xl border border-border p-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6">
          <AlertCircle className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-xl font-semibold text-foreground text-center mb-4">
          Payment Information
        </h2>

        <div className="bg-muted rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground text-center">
            Automatic online payment is currently disabled. Please place your order
            and contact our support team to complete the payment.
          </p>
        </div>

        <Button className="w-full" onClick={onContinue}>
          Continue with Order
        </Button>
      </div>
    </div>
  );
}

function OrderConfirmation({
  orderNumber,
  total,
}: {
  orderNumber: string;
  total: number;
}) {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">Order Confirmation</h1>
        <h2 className="text-xl font-semibold text-primary mb-6">
          Thank You For Your Order!
        </h2>

        <p className="text-muted-foreground mb-8">
          Your order has been successfully placed. Please contact our support team to
          complete the payment.
        </p>

        <div className="bg-muted rounded-xl p-6 mb-8 text-left">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Order Number:</span>
              <span className="font-bold text-foreground">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Amount:</span>
              <span className="font-bold text-foreground">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Payment Status:</span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                Pending
              </span>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-foreground mb-4">Payment Instructions</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Please contact our support team to complete your payment:
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-background">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href="mailto:info@codecrestllc.com"
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  info@codecrestllc.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-background">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a
                  href="tel:+18633209365"
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  +1 (863) 320-9365
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
            Please mention your order number when contacting support.
          </p>
        </div>

        <div className="flex gap-3">
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <Link href="/#products" className="flex-1">
            <Button className="w-full">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return <CheckoutContent />;
}
