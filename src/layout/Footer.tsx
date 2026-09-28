"use client";

import * as React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast"
import Image from "next/image";

// Navigation Links Configuration according to design
const footerColumns = [
    {
        links: [
            { name: "Featured Courses", href: "/" },
            { name: "Featured Categories", href: "/" },
            { name: "Business", href: "/" },
            { name: "IT", href: "/" },
            { name: "Design", href: "/" },
        ],
    },
    {
        links: [
            { name: "Development", href: "/" },
            { name: "Marketing", href: "/" },
            { name: "Photography", href: "/" },
            { name: "Finance", href: "/" },
            { name: "Sport", href: "/" },
        ],
    },
    {
        links: [
            { name: "Become a Creator", href: "/" },
            { name: "Affiliate Program", href: "/" },
            { name: "Contact", href: "/" },
            { name: "Help", href: "/" },
            { name: "About", href: "/" },
        ],
    },
];

export function Footer() {
    const [email, setEmail] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            toast.add({
                title: "Invalid Email",
                description: "Please enter a valid email address.",
            });
            return;
        }

        setIsLoading(true);

        // Simulate API subscription delay
        setTimeout(() => {
            setIsLoading(false);
            setEmail("");
            toast.add({
                title: "Subscription Successful!",
                description: "Thank you for joining our newsletter. Stay tuned for updates!",
            });
        }, 800);
    };

    return (
        <footer className="w-full border-t border-zinc-200 text-black">
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20 2xl:max-w-[1536px]">
                {/* TOP SECTION: NEWSLETTER + NAV COLUMNS */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

                    {/* LEFT SECTION: Logo & Newsletter */}
                    <div className="flex flex-col items-center md:items-start space-y-5 lg:col-span-5 2xl:col-span-5">
                        <Link href="/" className="relative h-16 w-50 2xl:w-80 flex items-center gap-2.5 transition-opacity hover:opacity-90">
                            <Image
                                src="/brandLogoBlack.png"
                                alt="ByteSpace Logo"
                                fill
                                className="object-contain h-fit w-fit"
                            />
                        </Link>

                        {/* Subtitle */}
                        <p className="text-xs text-zinc-500 md:text-sm lg:text-base mb-8 text-center md:text-left">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        {/* Subscription Form */}
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative flex-1">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    className="h-12 w-full rounded-full border border-zinc-400 bg-transparent px-6 text-sm text-white placeholder:text-zinc-500 focus-visible:border-[#a3e635] focus-visible:ring-0 md:h-14 md:text-base 2xl:h-16 2xl:text-lg"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="h-12 min-w-[120px] rounded-full bg-[#D4FB20] px-8 text-sm font-semibold text-black/50 transition-all hover:bg-[#84cc16] hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] md:h-14 md:text-base 2xl:h-16 2xl:text-lg"
                            >
                                {isLoading ? "Subscribing..." : "Search"}
                            </Button>
                        </form>

                        {/* Disclaimer */}
                        <p className="text-xs text-zinc-500 md:text-sm lg:text-base mt-2 text-center md:text-left">
                            By subscribing, you agree to our{" "}
                            <Link href="/" className="underline underline-offset-4 hover:text-[#a3e635]">
                                Privacy Policy
                            </Link>{" "}
                            and consent to receive updates from our company.
                        </p>
                    </div>

                    {/* RIGHT SECTION: Navigation Columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-12 2xl:col-span-7">
                        {footerColumns.map((col, idx) => (
                            <div key={idx} className="flex flex-col space-y-4 md:space-y-6">
                                {col.links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm text-zinc-500 transition-colors hover:text-[#a3e635] md:text-base lg:text-lg 2xl:text-xl"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

                {/* BOTTOM SECTION: COPYRIGHT & LEGAL */}
                <div className="mt-12 border-t border-zinc-200 pt-8 md:mt-16 lg:mt-20">
                    <div className="flex flex-col items-center md:items-start justify-between gap-4 sm:flex-row sm:items-center">
                        {/* Copyright */}
                        <p className="text-xs text-zinc-500 md:text-sm lg:text-base 2xl:text-lg">
                            @ 2023 ByteSpace. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-6 text-xs text-zinc-500 md:text-sm lg:text-base 2xl:text-lg">
                            <Link href="/" className="transition-colors hover:text-[#a3e635]">
                                Privacy Policy
                            </Link>
                            <Link href="/" className="transition-colors hover:text-[#a3e635]">
                                Terms of Service
                            </Link>
                            <Link href="/" className="transition-colors hover:text-[#a3e635]">
                                Cookies Settings
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}