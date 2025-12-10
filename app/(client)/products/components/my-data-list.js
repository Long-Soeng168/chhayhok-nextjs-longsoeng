import MyPagination from "@/components/my-pagination";
import ProductCard from "@/components/ProductCard";
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
  specialOffer,
}) {
  const res = await fetch(
    `${BASE_API_URL}/products?search=${search}&categoryId=${categoryId}&subCategoryId=${subCategoryId}&brandId=${brandId}&priceFrom=${priceFrom}&priceTo=${priceTo}&orderBy=${orderBy}&orderDir=${orderDir}&perPage=${perPage}&page=${page}&specialOffer=${specialOffer}`,
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
        <div className="grid grid-cols-2 gap-2 mb-4 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 ">
          <>
            {products?.map((item) => (
              <ProductCard key={item.id} item={item} />
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
