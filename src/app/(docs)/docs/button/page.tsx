"use client";
import { Button01, Button01Code } from "./Button01";
import ComponentView from "@/components/component-view";

export default function ButtonPage() {
  return (
    <div className="p-0">
      <ComponentView
        renderDemo={() => <Button01 />}
        sourceCode={Button01Code}
      />
    </div>
  );
}
