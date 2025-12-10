"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { IMAGE_BRAND_URL } from "@/env";

export function SearchBrand({ brand }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedBrand = brand?.find((b) => b.id == searchParams.get("brandId"));

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedBrand?.name || "");

  const handleSelect = (selectedValue, brand) => {
    const params = new URLSearchParams(searchParams);
    if (selectedValue) {
      params.set("brandId", selectedValue);
      params.set("brand", brand);
      params.set("page", 1);
    } else {
      params.delete("brandId");
      params.delete("brand");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div key={selectedBrand}>
      <p className="text-lg text-start font-bold text-primary rounded-md ">
        Brands
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="bg-gradient-to-r bg-primary p-[1px] rounded-md">
            <Button
              variant="add"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between h-10 border-none text-sm text-black bg-white rounded-md"
            >
              {value ? `${value}` : "All Products Brands"}
              <ChevronsUpDown size={15} className="opacity-50" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search brand..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Brand Found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    handleSelect();
                    setValue("");
                    setOpen(false);
                  }}
                >
                  All Brands
                  <Check
                    className={cn(
                      "ml-auto",
                      value == "" ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
                {brand?.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.name}
                    onSelect={() => {
                      handleSelect(item.id, item.name);
                      setValue(item.name);
                      setOpen(false);
                    }}
                  >
                    <Image
                      src={IMAGE_BRAND_URL + item.image}
                      width={40}
                      height={40}
                      alt=""
                      className="object-contain "
                    />
                    {item.name}
                    <Check
                      className={cn(
                        "ml-auto",
                        value == item.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
