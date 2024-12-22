"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import CopyButton from "./copy-button";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface SnippetProps {
  sourceCode: string;
}

const CodeBlock: React.FC<SnippetProps> = ({ sourceCode }) => {
  return (
    <Card className="relative flex flex-col items-stretch p-0 w-full">
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          width: "100%",
          padding: "1rem",
          borderRadius: "0.375rem",
          margin: 0,
        }}
      >
        {sourceCode}
      </SyntaxHighlighter>
      <CopyButton code={sourceCode} />
    </Card>
  );
};

export default CodeBlock;
