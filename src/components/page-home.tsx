import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { ShineButton } from "./shine-component";

const PageHome = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="container flex flex-col items-center px-4 py-12 md:py-16">
        <div className="flex max-w-[980px] flex-col items-center text-center gap-4">
          <ShineButton />
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Beautifully designed components
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Instant UI Components Just Copy, Paste & Done
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-8">
          <Link href="/docs">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="https://github.com/Harshathkulal/UdasinaUI">
            <Button size="lg" variant="outline">
              <FaGithub />
              GitHub
            </Button>
          </Link>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-16 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-3xl md:text-6xl">
            Components
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-sm">
            New component are cooking.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PageHome;
