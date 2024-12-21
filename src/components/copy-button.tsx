import React from "react";
import { Copy } from "lucide-react";

interface CopyButtonProps {
  buttonCode: string;
}
const CopyButton: React.FC<CopyButtonProps> = ({ buttonCode }) => {
  return (
    <div>
      <button
        className="absolute top-4 right-4 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
        onClick={() => navigator.clipboard.writeText(buttonCode)}
      >
        <Copy className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CopyButton;
