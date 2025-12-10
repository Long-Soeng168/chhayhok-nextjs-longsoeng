"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
  { label: "Newest", orderBy: "post_date", orderDir: "desc" },
  { label: "Oldest", orderBy: "post_date", orderDir: "asc" },
  { label: "Price: Low to High", orderBy: "price", orderDir: "asc" },
  { label: "Price: High to Low", orderBy: "price", orderDir: "desc" },
];

export function MyShortButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [open, setOpen] = React.useState(false);
  const selectedValue = searchParams.get("orderBy");
  const selectedDir = searchParams.get("orderDir");
  const selectedObject = sortOptions.find(
    (item) => item.orderBy === selectedValue && item.orderDir === selectedDir
  );
  const [value, setValue] = React.useState(selectedObject?.label || "");

  const handleSelect = (orderBy, orderDir) => {
    const params = new URLSearchParams(searchParams);

    if (orderBy) {
      params.set("orderBy", orderBy);
      params.set("orderDir", orderDir);
    } else {
      params.delete("orderBy");
      params.delete("orderDir");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[90px] px-2 gap-1 md:gap-2 md:px-4 max-w-[130px] md:min-w-[150px] md:max-w-[400px] justify-between md:py-5"
        >
          <span className="text-sm">
            <span className={`${value ? "text-primary font-bold" : ""}`}>
              {value || "Sort By"}
            </span>
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[150px] md:max-w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {sortOptions.map((item) => (
                <CommandItem
                  key={item.label}
                  value={item.label}
                  onSelect={() => {
                    setValue(item.label);
                    handleSelect(item.orderBy, item.orderDir);
                    setOpen(false);
                  }}
                  className="whitespace-nowrap text-sm"
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.label ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
