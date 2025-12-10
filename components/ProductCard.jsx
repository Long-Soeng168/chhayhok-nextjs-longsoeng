"use client";

import { IMAGE_PRODUCT_URL } from "@/env";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item, isNew = false }) {
  return (
    <div className="p-[1px] bg-primary/50 h-full overflow-hidden ">
      <div className="bg-white flex flex-col dark:bg-gray-900 h-full overflow-hidden relative">
        {isNew && (
          <div className="absolute top-0 left-1 z-10 ">
            <Image
              src="/assets/images/new.png"
              width={80}
              height={80}
              alt="image"
            />
          </div>
        )}
        <Link
          href={`/products/${item.id}`}
          className="relative w-full aspect-square flex items-center justify-center overflow-hidden"
        >
          <Image
            className="object-contain w-full mx-auto transition-transform duration-300  dark:hidden hover:scale-125"
            src={IMAGE_PRODUCT_URL + item.image}
            width={600}
            height={600}
            alt={item.title}
          />

          {/* {item.discount > 0 && (
            <div className="absolute top-0">
              <div className="bg-red-700 font-medium rounded-br-2xl italic text-white py-1 px-3">
                <p>- ${item.discount}</p>
              </div>
            </div>
          )} */}
        </Link>

        <div className="p-2 flex flex-col flex-1 justify-between">
          <Link
            href={`/products/${item.id}`}
            className="text-sm leading-tight text-gray-500 line-clamp-2 hover:underline dark:text-white"
          >
            {item.title}
          </Link>

          <div className="mt-2 text-sm">
            <div className="grid grid-cols-12 items-center gap-2 md:text-[16px] text-gray-600">
              <p className="col-span-6 font-medium">Price:</p>
              <div className="col-span-6 text-end">
                {item.discount ? (
                  <div className="flex items-center justify-end gap-2">
                    {/* Original Price (Strikethrough) */}
                    <p className="line-through decoration-red-500 text-gray-400 font-normal ">
                      {/* ${item.price.toFixed(2)} */}${item.price}
                    </p>

                    {/* Discounted Price */}
                    <p className="font-normal text-gray-600">
                      ${item.price - item.discount}
                    </p>
                  </div>
                ) : (
                  <p className="font-medium">${item.price}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
