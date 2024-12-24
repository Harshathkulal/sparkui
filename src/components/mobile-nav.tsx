"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { AlignLeftIcon } from "lucide-react";
import { docsConfig } from "@/config/docs";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  return (
    <nav className="md:hidden flex items-center justify-between gap-6">
      <div className="flex items-center justify-between gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <AlignLeftIcon size={20} />
            </button>
          </SheetTrigger>
          <SheetContent>
            {docsConfig.mainNav.map((link) => (
              <div key={link.href}>
                <SheetHeader>
                  <SheetTitle>
                    <SheetDescription></SheetDescription>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className="items-center gap-5 text-sm font-medium text-muted-foreground"
                      >
                        {link.title}
                      </Link>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>
              </div>
            ))}
          </SheetContent>
        </Sheet>
      </div>
      <Link href="/" className="flex items-center pl-2 gap-1">
        <Sparkles size={16} />
        <span className="font-bold lg:inline-block">{siteConfig.name}</span>
      </Link>
    </nav>
  );
}
