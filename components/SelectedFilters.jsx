"use client";

import { cn } from "@/lib/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SelectedFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const category = searchParams.get("category");
  const subCategory = searchParams.get("subCategory");
  const brand = searchParams.get("brand");
  const specialOffer = searchParams.get("specialOffer");
  const search = searchParams.get("search");

  const handleRemoveParam = (key) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    if (key === "category") {
      params.delete("categoryId");
      params.delete("subCategory");
      params.delete("subCategoryId");
      params.delete("search");
    }
    if (key === "subCategory") {
      params.delete("subCategoryId");
    }
    if (key === "brand") {
      params.delete("brandId");
    }
    if (key === "specialOffer") {
      params.delete("specialOffer");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  if (!category && !subCategory && !brand && !specialOffer && !search)
    return null;

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {specialOffer == 1 && (
        <div
          className={cn(
            "group relative inline-flex animate-rainbow items-center rounded-lg justify-center p-[1px] border-0 bg-[length:200%] font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            // light mode colors
            "z-10 bg-white bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
          )}
        >
          <div
            className={`bg-white/90 pl-2 backdrop-blur-md rounded-md text-sm sm:text-base md:text-lg font-bold text-primaryDark w-full h-full`}
          >
            <span>Special Offer</span>
            <button
              onClick={() => handleRemoveParam("specialOffer")}
              className="px-3 py-1 hover:text-red-500 transition"
              aria-label="Remove category"
            >
              ✖
            </button>
          </div>
        </div>
      )}
      {search && (
        <div className="flex items-center border border-primary pl-3 rounded-md text-sm whitespace-nowrap">
          Search : {search}
          <button
            onClick={() => handleRemoveParam("search")}
            className="px-3 py-2 hover:text-red-500 transition"
            aria-label="Remove search"
          >
            ✖
          </button>
        </div>
      )}
      {category && (
        <div className="flex items-center border border-primary pl-3 rounded-md text-sm whitespace-nowrap">
          {category}
          <button
            onClick={() => handleRemoveParam("category")}
            className="px-3 py-2 hover:text-red-500 transition"
            aria-label="Remove category"
          >
            ✖
          </button>
        </div>
      )}
      {subCategory && (
        <div className="flex items-center border border-primary pl-3 rounded-md text-sm whitespace-nowrap">
          {subCategory}
          <button
            onClick={() => handleRemoveParam("subCategory")}
            className="px-3 py-2 hover:text-red-500 transition"
            aria-label="Remove sub-category"
          >
            ✖
          </button>
        </div>
      )}
      {brand && (
        <div className="flex items-center border border-primary pl-3 rounded-md text-sm whitespace-nowrap">
          {brand}
          <button
            onClick={() => handleRemoveParam("brand")}
            className="px-3 py-2 hover:text-red-500 transition"
            aria-label="Remove brand"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
