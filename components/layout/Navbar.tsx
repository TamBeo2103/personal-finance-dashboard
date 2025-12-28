"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HandCoins } from "lucide-react";

const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/savings", label: "Savings" },
    { href: "/bonds", label: "Bonds" },
    { href: "/index-funds", label: "Index Funds" },
    { href: "/crypto", label: "Crypto" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mr-8 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <HandCoins className="h-6 w-6 text-primary" />
                        <span className="hidden font-bold sm:inline-block">
                            RiskDash
                        </span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium">
                        {NAV_ITEMS.slice(1).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or extra content */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
