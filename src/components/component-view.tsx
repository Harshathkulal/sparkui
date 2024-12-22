import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/Code-block";
import PreviewBlock from "@/components/preview-block";

// ComponentView accepts renderDemo as a prop, which is a function returning JSX
const ComponentView = ({
  renderDemo,
  sourceCode,
}: {
  renderDemo: () => React.ReactNode;
  sourceCode: string;
}) => {
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview">
            {/* Call renderDemo to render the passed component */}
            <PreviewBlock>{renderDemo()}</PreviewBlock>
          </TabsContent>

          <TabsContent value="code">
            {/* Display the code in the code tab */}
            <CodeBlock sourceCode={sourceCode} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ComponentView;
