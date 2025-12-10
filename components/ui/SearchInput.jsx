"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [inputValue, setInputValue] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    // console.log(params);
    if (inputValue) {
      params.set("search", inputValue);
      params.set("page", 1);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  };

  return (
    <>
      <Suspense>
        <form action={handleSearch}>
          <div className="flex items-center xl:max-w-full justify-between bg-white border ">
            <div className="flex flex-1 w-full items-center gap-2 ml-2">
              <Search className="text-gray-400 " size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Search Products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                // onChange={(e) => handleSearch(e.target.value)}
                className="flex-1 w-full bg-transparent border-none outline-none text-gray-700 py-2"
                aria-label="Search input"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hidden min-[280px]:block text-white py-1 px-2 mr-1"
            >
              Search
            </button>
          </div>
        </form>
      </Suspense>
    </>
  );
}
