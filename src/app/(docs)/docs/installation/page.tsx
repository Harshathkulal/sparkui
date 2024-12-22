import CodeBlock from "@/components/code-block";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto space-y-12 py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="text-base text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
        <Card className="p-4 text-sm">
          <p>
            Complete quick start guide to get you up and running{" "}
            <Link
              href="https://ui.shadcn.com/docs/installation"
              className="text-blue-700 hover:underline"
            >
              Shdcn
            </Link>
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Next.js</h2>
        <div>
          <p className="text-base text-muted-foreground">
            Install and configure Next.js.
          </p>
          <CodeBlock sourceCode="npx create-next-app@latest" />
        </div>
        <div>
          <p className="text-base text-muted-foreground">Install Shadcn UI</p>
          <CodeBlock sourceCode="npx shadcn@latest init -d" />
        </div>
        <div>
          <p className="text-base text-muted-foreground">
            Thats it just copy/paste the components
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
