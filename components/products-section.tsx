"use client";

import { useState } from "react";
import { products, categories } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ShoppingCart, Eye, Check } from "lucide-react";
import { Zap } from "lucide-react"; // Import Zap here
import type { Product } from "@/lib/products";
import Image from "next/image";

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { addItem } = useCart();
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setAddedProducts((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedProducts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Our Smart Home Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of premium smart home devices and automation tools.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-xl border border-border overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
            >
              {product.badge && (
                <Badge className="absolute top-3 left-3 z-10">{product.badge}</Badge>
              )}
              
              <div className="relative aspect-square bg-muted overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-10 w-10"
                    onClick={() => setQuickViewProduct(product)}
                  >
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => handleAddToCart(product)}
                  >
                    {addedProducts.has(product.id) ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <ShoppingCart className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="sm" onClick={() => handleAddToCart(product)}>
                    {addedProducts.has(product.id) ? "Added" : "Buy Now"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <QuickViewDialog
          product={quickViewProduct}
          open={!!quickViewProduct}
          onOpenChange={(open) => !open && setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          isAdded={quickViewProduct ? addedProducts.has(quickViewProduct.id) : false}
        />
      </div>
    </section>
  );
}

function QuickViewDialog({
  product,
  open,
  onOpenChange,
  onAddToCart,
  isAdded,
}: {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: (product: Product) => void;
  isAdded: boolean;
}) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{product.category}</Badge>
              {product.badge && <Badge>{product.badge}</Badge>}
            </div>
            
            <p className="text-muted-foreground mb-4">{product.description}</p>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-foreground">Features:</p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <Badge key={feature} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-2xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              <Button onClick={() => onAddToCart(product)} className="gap-2">
                {isAdded ? (
                  <>
                    <Check className="h-4 w-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
