"use client";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function DocContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let lastSegment = pathname.split("/").filter(Boolean).pop();

  if (lastSegment === "docs") {
    lastSegment = "Introduction";
  }

  if (lastSegment) {
    lastSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <div className="mb-4 gap-4">
          <div className="flex items-center space-x-1 text-sm leading-none">
            <div className="truncate">Docs</div>
            <ChevronRight className="h-3.5 w-3.5" />
            <div className="text-foreground">{lastSegment}</div>{" "}
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
