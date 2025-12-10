import MyPagination from "@/components/my-pagination";
import BlogCard from "@/components/BlogCard";
import { BASE_API_URL } from "@/env";
import { ListX } from "lucide-react";
import React from "react";

export default async function MyDataList({
  search,
  categoryId,
  subCategoryId,
  brandId,
  priceFrom,
  priceTo,
  orderBy,
  orderDir,
  perPage,
  page,
  type,
}) {
  const res = await fetch(
    `${BASE_API_URL}/news?search=${search}&type=${type}&categoryId=${categoryId}&subCategoryId=${subCategoryId}&orderBy=${orderBy}&orderDir=${orderDir}&perPage=${perPage}&page=${page}`,
    { next: { revalidate: 600 } }
  );
  const result = await res.json();
  const products = result?.data;

  const from = result?.from;
  const to = result?.to;
  const total = result?.total;
  const links = result?.links;
  return (
    <>
      <div className="flex-1 ">
        {products?.length < 1 && (
          <p className="flex items-center justify-center w-full h-20 gap-2">
            <ListX /> No Data
          </p>
        )}
        <div className="grid grid-cols-2 gap-2 mb-4 sm:grid-cols-2 md:grid-cols-2 md:mb-8 lg:grid-cols-4 ">
          <>
            {products?.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </>
        </div>
        {/* pagination */}
        {total > 0 && (
          <MyPagination from={from} to={to} total={total} links={links} />
        )}
      </div>
    </>
  );
}
