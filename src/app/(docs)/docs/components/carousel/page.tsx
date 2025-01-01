"use client";
import { Carousel01, Carousel01Code } from "./carousel01";
import ComponentView from "@/components/component-view";

export default function ButtonPage() {
  return (
    <div className="mx-auto space-y-12 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Carousel</h1>
        <p className="text-base text-muted-foreground">
          A carousel with motion and swipe built using Embla.
        </p>
      </div>
      <ComponentView
        renderDemo={() => <Carousel01 />}
        sourceCode={Carousel01Code}
      />
    </div>
  );
}
