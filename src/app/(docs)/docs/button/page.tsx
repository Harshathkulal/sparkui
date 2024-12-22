"use client";
import { ButtonDemo } from "./Button-demo";
import ComponentView from "@/components/component-view";

export default function ButtonPage() {
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
    <div className="min-h-screen">
      <ComponentView
        sourceCode={buttonCode}
        renderDemo={() => <ButtonDemo />}
      />
    </div>
  );
}
