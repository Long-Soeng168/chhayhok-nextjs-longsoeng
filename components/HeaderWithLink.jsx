"use client";

import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const HeaderWithLink = ({ title, href, className }) => {
  return (
    <div className={cn("flex flex-col pb-1 mt-12 mb-1", className)}>
      <div className="flex items-center justify-between">
        {/* <p className="text-primary font-bold text-lg sm:text-lg md:text-xl tracking-wide py-1 text-center">
          {title}
        </p> */}
        <Link
          href={href || "#"}
          className="translate-y-[1px] -translate-x-[1px] cursor-default"
        >
          <div
            className={cn(
              href ? "hover:cursor-pointer" : "cursor-default",
              "group relative inline-flex h-11 animate-rainbow items-center justify-center p-[1px] border-0 bg-[length:200%] font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              // light mode colors
              "z-10 bg-white/60 bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
            )}
          >
            <div
              className={`${
                href && "hover:underline"
              } bg-white/90  backdrop-blur-md text-lg sm:text-lg md:text-xl font-bold text-primaryDark w-full h-full px-7 py-2`}
            >
              {title}
            </div>
          </div>
        </Link>

        {href && (
          <Link
            href={href}
            className="text-sm hover:underline flex items-center gap-2 decoration-primary sm:text-base hover:translate-x-2 transition-all duration-500 md:text-lg bg-gradient-to-r bg-primary bg-clip-text text-transparent font-medium tracking-wide py-1"
          >
            View More <ChevronsRight className="text-primary" />
          </Link>
        )}
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r bg-primary rounded"></div>
    </div>
  );
};

export default HeaderWithLink;
