"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

export default function SearchInputBlogs() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [inputValue, setInputValue] = useState(
    searchParams.get("blog_search") || ""
  );

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (inputValue) {
        params.set("blog_search", inputValue);
        params.set("page", 1);
      } else {
        params.delete("blog_search");
      }
      replace(`/resources?${params.toString()}`);
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, replace, searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
  };

  return (
    <Suspense>
      <form
        className="flex w-full lg:w-auto min-w-[400px] max-w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          aria-label="blog_search"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 rounded-l-none rounded-r-md hover:bg-primary/90"
          aria-label="Submit search"
        >
          <Search size={24} />
        </button>
      </form>
    </Suspense>
  );
}
