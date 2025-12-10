"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchInput from "./ui/SearchInput";
import { Search } from "lucide-react";
import ExpandHoverButton from "./expand-hover-button";

export function SearchProduct() {
  return (
    <Sheet modal={false}>
      {/* Trigger to open the sheet */}
      <SheetTrigger>
        <>
          <span className="lg:hidden">
            <ExpandHoverButton
              icon={<Search />}
              title="Search Products"
              defaultHover={false}
            />
          </span>
          <span className="hidden lg:inline">
            <ExpandHoverButton
              icon={<Search />}
              title="Search Products"
              defaultHover={true}
            />
          </span>
        </>
      </SheetTrigger>
      {/* Sheet content */}
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="text-center">Search Products</SheetTitle>
          <React.Suspense>
            <SearchInput />
          </React.Suspense>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
