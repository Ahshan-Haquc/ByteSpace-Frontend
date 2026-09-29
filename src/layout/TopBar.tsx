"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

// Navigation Links Configuration
const navItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Creators", href: "/creators" },
];

export function TopBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO SECTION */}
        <Link href="/" className="relative h-16 w-50 2xl:w-80 flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <Image
            src="/brandLogo.png"
            alt="ByteSpace Logo"
            fill
            className="object-contain h-fit w-fit"
            />
        </Link>

        {/* DESKTOP NAVIGATION MENU */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm md:text-base 2xl:text-lg font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-zinc-300"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="/login"
            className="text-sm md:text-base 2xl:text-lg font-medium text-zinc-300 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="text-sm md:text-base 2xl:text-lg font-medium text-zinc-300 transition-colors hover:text-white"
          >
            Join Us
          </Link>

          {/* Cart / Shopping Bag Button */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative p-2 text-zinc-300 transition-colors hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a3e635] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a3e635]"></span>
            </span>
          </button>
        </div>

        {/* MOBILE NAVIGATION (COLLAPSIBLE SHEET) */}
        <div className="flex items-center space-x-3 md:hidden">
          {/* Mobile Shopping Icon */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="p-2 text-zinc-300 hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>

          {/* Mobile Collapsible Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-300 hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] border-l border-white/10 bg-zinc-950/95 backdrop-blur-xl p-6 text-white"
            >
              <SheetHeader className="text-left relative h-16 w-50 2xl:w-80 flex items-center gap-2.5 transition-opacity hover:opacity-90">
                <Image
            src="/brandLogo.png"
            alt="ByteSpace Logo"
            fill
            className="object-contain h-fit w-fit"
            />
              </SheetHeader>

              {/* Mobile Links */}
              <div className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium transition-all",
                        isActive
                          ? "bg-[#a3e635]/10 text-white font-semibold"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <hr className="my-4 border-white/10" />

                {/* Mobile Auth Actions */}
                <Link
                  href="/signin"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/5 hover:text-white"
                >
                  Sign In
                </Link>

                <Button
                  
                  onClick={() => setIsOpen(false)}
                  className="mt-2 w-full rounded-full bg-[#a3e635] py-2.5 text-center font-semibold text-black hover:bg-[#84cc16]"
                >
                  <Link href="/join">Join Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}