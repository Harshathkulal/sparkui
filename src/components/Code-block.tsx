"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import CopyButton from "./copy-button";

interface SnippetProps {
  sourceCode: string;
}

const CodeBlock: React.FC<SnippetProps> = ({ sourceCode }) => {
  return (
    <Card className="relative flex items-center justify-between p-2">
      <pre className="overflow-x-auto">
        <code className="text-sm font-mono">{sourceCode}</code>
      </pre>
      <CopyButton code={sourceCode} />
    </Card>
  );
};

export default CodeBlock;
