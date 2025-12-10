import React from "react";
import Image from "next/image";
import { BASE_API_URL, IMAGE_BRAND_URL } from "@/env";
import Link from "next/link";
export default async function MyBrands() {
  const respone = await fetch(`${BASE_API_URL}/brands`);
  const brandData = await respone.json();
  return (
    <div className="px-2 mx-auto max-w-screen-2xl xl:px-20 mt-20">
      <div className="text-center max-w-2xl mx-auto mt-20">
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Our Partners
        </h2>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-8 gap-2 my-10 mt-8">
        {brandData?.map((item) => (
          <Link
            href={`/products?brandId=${item.id}&brand=${item.name}`}
            key={item.id}
            className="hover:shadow-[5px_5px_0px_0px_rgba(72,189,51)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 border-primary border-[1px] bg-white"
          >
            <Image
              src={IMAGE_BRAND_URL + item.image}
              width={100}
              height={100}
              alt=" brand product"
              className="w-full aspect-video object-contain px-1"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
