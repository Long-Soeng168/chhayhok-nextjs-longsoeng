"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlignJustifyIcon,
  Dot,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IMAGE_CATE_URL } from "@/env";
import Image from "next/image";

function MyCategoryComponent({ categories }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // console.log(categories);

  const currentCategoryId = searchParams.get("categoryId")?.toString();
  const currentSubCategoryId = searchParams.get("subCategoryId")?.toString();

  const handleSelectCategory = (categoryId, category) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set("categoryId", categoryId);
      params.set("category", category);
      params.set("page", 1);
      params.delete("subCategoryId");
      params.delete("subCategory");
    } else {
      params.delete("categoryId");
      params.delete("category");
      params.delete("subCategory");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSelectSubCategory = (
    subCategoryId,
    categoryId,
    subCategory,
    category
  ) => {
    const params = new URLSearchParams(searchParams);
    if (subCategoryId) {
      params.set("subCategoryId", subCategoryId);
      params.set("subCategory", subCategory);
      params.set("categoryId", categoryId);
      params.set("category", category);
    } else {
      params.delete("subCategoryId");
      params.delete("subCategory");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="w-full mt-4">
        <button
          onClick={() => handleSelectCategory()}
          className={`underline-offset-4 ${
            currentCategoryId == null &&
            "underline text-center font-bold  group text-primary"
          } hover:bg-primary-300/10 p-2 py-2 rounded items-center flex gap-1 w-full text-[16px] hover:underline `}
        >
          <AlignJustifyIcon />
          All Categories
        </button>
        <Accordion
          type="single"
          collapsible
          defaultValue={searchParams.get("categoryId")}
        >
          {categories?.map((item) => (
            <AccordionItem
              key={item.id}
              value={`${item.id}`}
              className="w-full mt-2 space-y-4"
            >
              <div
                className={`flex justify-between   rounded-md hover:font-bold hover:underline underline-offset-4 ${
                  searchParams.get("categoryId") == item.id &&
                  "underline text-center font-bold  group text-primary"
                }`}
              >
                <Image
                  src={IMAGE_CATE_URL + item.image}
                  width={30}
                  height={30}
                  alt="img"
                  className="object-contain ml-2 aspect-square"
                />
                <button
                  onClick={() => handleSelectCategory(item.id, item.name)}
                  className="flex items-center justify-start flex-1 gap-1 px-2 text-sm text-start"
                >
                  {item.name}
                  {/* {item.books_count > 0 && (
                    <span className="text-xs text-primary">
                      ({item.books_count})
                    </span>
                  )} */}
                </button>
                {item.sub_categories?.length > 0 && (
                  <span className="flex items-center justify-center rounded-md ">
                    <AccordionTrigger
                      className={`${
                        currentCategoryId == item.id &&
                        "underline text-center font-bold  group text-primary"
                      } p-2  text-[16px] rounded-tr rounded-br px-2 hover:bg-primary/50 hover:text-white`}
                    ></AccordionTrigger>
                  </span>
                )}
              </div>
              <div
                className="ml-6 border-l-2 border-primary "
                style={{ marginTop: "0" }}
              >
                {item.sub_categories?.length > 0 ? (
                  item.sub_categories.map((subItem) => (
                    <AccordionContent
                      key={subItem.id}
                      className="px-1 pb-1 mt-2"
                    >
                      <button
                        onClick={() =>
                          handleSelectSubCategory(
                            subItem.id,
                            item.id,
                            subItem.name,
                            item.name
                          )
                        }
                        className={`${
                          currentSubCategoryId == subItem.id &&
                          "underline text-center font-bold  group text-primary"
                        } relative flex items-center max-w-full text-left underline-offset-4 w-full text-xs gap-1 cursor-pointer justify-start  hover:underline`}
                      >
                        <Dot
                          width={15}
                          className="hover:text-color text-primary"
                        />
                        {subItem.name}
                        {/* {subItem.books_count > 0 && (
                          <span className="text-xs text-primary">
                            ({subItem.books_count})
                          </span>
                        )} */}
                      </button>
                    </AccordionContent>
                  ))
                ) : (
                  <AccordionContent>
                    <p className="text-sm text-gray-500">
                      No subcategories available.
                    </p>
                  </AccordionContent>
                )}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default MyCategoryComponent;
