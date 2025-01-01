"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Sparkles />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components/button"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components/button") &&
              !pathname?.startsWith("/docs/component/button")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  );
}
