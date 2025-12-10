"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MyCategoryComponent from "./my-category";
import { SearchBrand } from "./my-search-brand";
import MylastestProduct from "./my-lastest-product";
import { FilterIcon } from "lucide-react";

export default function Filter({ categories, brand }) {
  return (
    <>
      <section className="lg:hidden block">
        <Sheet modal={false}>
          <SheetTrigger asChild>
            <FilterIcon className="border size-9 p-1 rounded-md" />
          </SheetTrigger>
          <SheetContent className="px-0">
            <SheetHeader>
              <SheetTitle className="text-center">Filter</SheetTitle>
            </SheetHeader>
            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[calc(100vh-100px)] px-2">
              <MyCategoryComponent categories={categories} />
              <hr className="my-8" />
              <SearchBrand brand={brand} />
              <hr className="my-8" />
              {/* <MyDualRangPrice />
              <hr className="my-8" /> */}
              <MylastestProduct />
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
}
