import React from "react";
import { ModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./ui/button";
import { siteConfig } from "@/config/site";

const PageHeader = () => {
  return (
    <>
      <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <MainNav />
            <MobileNav />
          </div>
          <div className="flex items-center space-x-2">
            <Link
              target="_blank"
              href={siteConfig.links.github}
              aria-label="Visit GitHub"
            >
              <Button variant="ghost" size="icon">
                <FaGithub />
              </Button>
            </Link>
            <Link
              target="_blank"
              href={siteConfig.links.github}
              aria-label="Visit Twitter"
            >
              <Button variant="ghost" size="icon">
                <FaXTwitter />
              </Button>
            </Link>
            <ModeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
