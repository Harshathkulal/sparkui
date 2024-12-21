"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetClose, // Import SheetClose
} from "@/components/ui/sheet";
import Link from "next/link";
import { AlignLeftIcon } from "lucide-react";
import { docsConfig } from "@/config/docs";

export function MobileNav() {
  return (
    <nav className="md:hidden">
      <div className="flex items-center justify-between gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <AlignLeftIcon size={20} />
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
    </nav>
  );
}
