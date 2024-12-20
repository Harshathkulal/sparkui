import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const PageHeader = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold text-lg">UdasinUI</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/docs"
              >
                Docs
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/components"
              >
                Components
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/themes"
              >
                Themes
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/examples"
              >
                Examples
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Input
                className="w-[200px] lg:w-[300px]"
                placeholder="Search documentation..."
                type="search"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden md:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
