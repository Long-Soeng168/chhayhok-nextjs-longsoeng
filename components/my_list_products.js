import Image from "next/image";
import React from "react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";
import ProductCard from "./ProductCard";
import HeaderWithLink from "./HeaderWithLink";

export default async function MyListProducts() {
  // const res = await fetch(BASE_API_URL + "/brands?with_books=1"); //brands
  const res = await fetch(BASE_API_URL + "/category_with_products");
  const categories = await res.json();
  // console.log(categories);

  return (
    <>
      <section className="px-2 pb-5 mx-auto max-w-screen-2xl xl:px-20">
        {categories?.map(
          (category) =>
            category.books?.length > 3 && (
              <div key={category.id}>
                {/* <div className="flex items-center justify-between pb-1 mt-8 mb-4 border-b-2 border-primary-bold">
                  <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
                    {category.name}
                  </p>
                  <Link
                    href={`/products?categoryId=${category.id}`}
                    className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
                  >
                    View More
                  </Link>
                </div> */}
                <HeaderWithLink
                  title={category.name}
                  href={`/products?categoryId=${category.id}`}
                />

                <div className="flex">
                  <Carousel className="w-full">
                    <div>
                      <CarouselContent className="-ml-2">
                        {category.books?.map((item, id) => (
                          <CarouselItem
                            key={id}
                            className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/6"
                          >
                            {/* Product Card */}
                            <ProductCard key={item.id} item={item} />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </div>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            )
        )}
      </section>
    </>
  );
}
