import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import React from "react";
import { ModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";

const PageHeader = () => {
  return (
    <>
      <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <MainNav/>
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
            <ModeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
