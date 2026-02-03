"use client";

import Link from "next/link";
import { navigationLinks } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-brand-teal-500 to-brand-sage bg-clip-text text-transparent">
              Sinclair Counseling
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-teal-500"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="/contact">Get Started</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
