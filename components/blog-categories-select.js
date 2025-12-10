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

const framework = [
  {
    label: "All Resources",
    value: "",
  },
  {
    label: "Article",
    value: "Article",
  },
  {
    label: "Video",
    value: "Video",
  },
];

export function BlogCategorySelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedPerPage = searchParams.get("type");
  const selectedPerPageObj = framework.find(
    (item) => item.value == selectedPerPage
  );
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedPerPageObj?.label || "");

  const handleSelect = (selectedValue) => {
    const params = new URLSearchParams(searchParams);
    if (selectedValue) {
      params.set("type", selectedValue);
    } else {
      params.delete("type");
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
          className="px-2 gap-1 md:gap-2 md:px-4 justify-between md:py-5"
        >
          <span className="text-sm">
            <span className={`${value ? "text-primary font-bold" : ""}`}>
              {value || "All Resource"}
            </span>
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[130px] md:max-w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {framework.map((item) => (
                <CommandItem
                  key={item.label}
                  value={item.value}
                  onSelect={() => {
                    setValue(item.label);
                    handleSelect(item.value);
                    setOpen(false);
                  }}
                  className="text-[10px] md:text-sm"
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value == item.value ? "opacity-100" : "opacity-0"
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
