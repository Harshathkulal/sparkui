"use client";
import { Button01, Button01Code } from "./Button01";
import ComponentView from "@/components/component-view";

export default function ButtonPage() {
  return (
    <div className="mx-auto space-y-12 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-base text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>
      <ComponentView
        renderDemo={() => <Button01 />}
        sourceCode={Button01Code}
      />
    </div>
  );
}
