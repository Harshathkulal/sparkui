"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonDemo } from "./Button-demo";
import CodeBlock from "@/components/Code-block";
import PreviewBlock from "@/components/preview-block";

export default function ButtonPage() {
  // Define the source code of ButtonDemo as a string to display in the "Code" tab
  const buttonCode = `
import React from "react";

export const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800">
        Default
      </button>
    </div>
  );
};
  `;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Tabs defaultValue="preview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview">
            <PreviewBlock>
              <ButtonDemo />
            </PreviewBlock>
          </TabsContent>

          <TabsContent value="code">
            <CodeBlock code={buttonCode} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
