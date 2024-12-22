"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import CopyButton from "./copy-button";

interface SnippetProps {
  code: string;
}

const CodeBlock: React.FC<SnippetProps> = ({ code }) => {
  return (
    <Card className="relative flex items-center justify-between p-2">
      <pre className="overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
      <CopyButton code={code} />
    </Card>
  );
};

export default CodeBlock;
