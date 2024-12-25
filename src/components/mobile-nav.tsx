"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import Link from "next/link";
import { AlignLeftIcon } from "lucide-react";
import { docsConfig } from "@/config/docs";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

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
          <SheetContent className="px-6">
            <SheetClose asChild></SheetClose>

            <div className="pt-4 flex flex-col items-start">
              {docsConfig.mainNav.map((link) => (
                <div key={link.href}>
                  <SheetHeader>
                    <SheetTitle>
                      <SheetDescription />
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "block py-2 text-sm font-medium hover:text-foreground"
                          )}
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    </SheetTitle>
                  </SheetHeader>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-3 pt-4">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <h4 className="text-sm font-semibold py-1">{item.title}</h4>
                  <div className="px-2">
                    {item.items?.map((subItem) => (
                      <SheetHeader key={subItem.href}>
                        <SheetTitle>
                          <SheetClose asChild>
                            <Link
                              href={subItem.href || "#"}
                              className={cn(
                                "block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {subItem.title}
                              {subItem.label && (
                                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000]">
                                  {subItem.label}
                                </span>
                              )}
                            </Link>
                          </SheetClose>
                        </SheetTitle>
                      </SheetHeader>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
