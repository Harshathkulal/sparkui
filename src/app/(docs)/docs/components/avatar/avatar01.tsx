import React from "react";
import Image from "next/image";

export const Avatar01 = () => {
  return (
    <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
      <Image
        className="aspect-square h-full w-full object-cover"
        src="/Avatar.png"
        alt="Avatar"
        width={40}
        height={40}
      />
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-300 text-white">
        U
      </div>
    </div>
  );
};

export const Avatar01Code = `
import React from "react";
import Image from "next/image";

export const avatar01 = () => {
  return (
     <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
      <Image
        className="aspect-square h-full w-full object-cover"
        src="/Avatar.png"
        alt="Avatar"
        width={40}
        height={40}
      />
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-300 text-white">
        U
      </div>
    </div>
  );
};
`;
