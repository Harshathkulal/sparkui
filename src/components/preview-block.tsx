import React from "react";
import { Card } from "@/components/ui/card";

const PreviewBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Card className="p-6 flex items-center justify-center min-h-[200px]">
        {children}
      </Card>
    </div>
  );
};

export default PreviewBlock;
