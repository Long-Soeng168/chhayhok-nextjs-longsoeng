import React from "react";

import { cn } from "@/lib/utils";

export function RainbowButton({ children, className, ...props }) {
  return (
    <div className="before:absolute before:left-1/2 before:top-1/2 before:z-0 w-full before:h-10 before:w-4/5 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]">
      <div
        className={cn(
          "group relative inline-flex h-12 animate-rainbow cursor-pointer w-full items-center justify-center p-[1.5px] rounded-[12px] border-0 bg-[length:200%] font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

          // light mode colors
          "z-10 bg-white bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
        )}
      >
        <button
          className={cn(
            "bg-white text-primaryDark w-full h-full px-7 py-2 rounded-[10px]",

            className
          )}
          {...props}
        >
          {children}
        </button>
      </div>
    </div>
  );
}
