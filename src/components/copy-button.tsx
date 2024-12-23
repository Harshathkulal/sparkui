"use client";

import React from "react";
import { CheckIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";

interface CopyButtonProps {
  code: string;
}
const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div className="absolute top-2 right-2">
      <Button variant="secondary" size="xs" onClick={handleCopy}>
        {isCopied ? (
          <CheckIcon className="w-3 h-3 text-green-400" />
        ) : (
          <IoClipboardOutline />
        )}
      </Button>
    </div>
  );
};

export default CopyButton;
