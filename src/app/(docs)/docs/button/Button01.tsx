import React from "react";

export const Button01 = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="px-4 py-2 rounded-md text-sm border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
        Button
      </button>
    </div>
  );
};

export const Button01Code = `
import React from "react";

export const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="px-4 py-2 rounded-md text-sm border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
        Button
      </button>
    </div>
  );
};
  `;
