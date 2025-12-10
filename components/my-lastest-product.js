"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_PRODUCT_URL, BASE_API_URL } from "@/env"; // Ensure these are correctly imported
import Link from "next/link";
import { cn } from "@/lib/utils";

function MylastestProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/new_products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading new products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      {/* <p className="p-2 text-lg text-center text-white rounded-md background-gradient">
        New Arrivals
      </p> */}
      <Link href={`/products`}>
        <div
          className={cn(
            "group relative w-full inline-flex h-11 animate-rainbow items-center justify-center p-[1px] border-0 bg-[length:200%] font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            // light mode colors
            "z-10 bg-white bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
          )}
        >
          <div
            className={`bg-white/90 text-center backdrop-blur-md text-lg sm:text-lg md:text-xl font-bold text-gray-600 w-full h-full px-7 py-2`}
          >
            New Arrivals
          </div>
        </div>
      </Link>
      <div className="pt-2 bg-gray-700/5">
        {products.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="grid grid-cols-12 gap-2 p-2 overflow-hidden border-b"
            >
              <div className="col-span-3">
                <Image
                  src={`${IMAGE_PRODUCT_URL}${item.image}`}
                  width={300}
                  height={300}
                  alt="img"
                  className="object-contain aspect-square"
                  loading="lazy"
                />
              </div>
              <div className="col-span-9">
                <p className="text-sm leading-tight text-gray-900 line-clamp-2 text-hover hover:underline dark:text-white">
                  {item.title}
                </p>
                {item.discount ? (
                  <div className="flex items-center justify-start gap-2">
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MylastestProduct;
