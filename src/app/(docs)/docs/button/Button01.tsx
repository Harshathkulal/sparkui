import React from "react";

export const Button01 = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800">
        Default
      </button>
    </div>
  );
};

export const Button01Code = `
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