import { IMAGE_PRODUCT_URL } from "@/env";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import HeaderWithLink from "./HeaderWithLink";

export default function MyRelatedProduct({ productRelated, categoryId }) {
  return (
    <div>
      <div className="px-2 py-5 mx-auto max-w-screen-2xl xl:px-20">
        <HeaderWithLink
          title="Related products"
          href={`/products?categoryId=${categoryId}`}
        />
        <div className="grid grid-cols-2 gap-2 mb-4 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 xl:grid-cols-6">
          {productRelated?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
