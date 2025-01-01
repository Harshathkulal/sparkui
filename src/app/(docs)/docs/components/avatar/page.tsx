"use client";
import { Avatar01, Avatar01Code } from "./avatar01";
import ComponentView from "@/components/component-view";

export default function AvatarPage() {
  return (
    <div className="mx-auto space-y-12 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
        <p className="text-base text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>
      <ComponentView
        renderDemo={() => <Avatar01 />}
        sourceCode={Avatar01Code}
      />
    </div>
  );
}
