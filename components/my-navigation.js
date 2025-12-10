"use client";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import { RainbowButton } from "./rainbow-button";
import Link from "next/link";
import { SearchProduct } from "./my-search-product";
import SpecialOfferButton from "./SpecialOfferButton";
// import MyAllCategory from "./my-all-categories";

function MyNavigation({ resultCate }) {
  // console.log(resultCate);
  const pathname = usePathname();
  return (
    <>
      <div className="w-full lg:mt-3 flex justify-between items-center">
        <div className="hidden lg:flex justify-between text-sm whitespace-nowrap lg:text-base items-center">
          <ul className="flex items-center space-x-3 font-medium lg:flex-row lg:space-x-5">
            <li>
              {/* <a
                href="#"
                className="flex items-center p-2 text-black rounded text-nowrap bg-primary-700 lg:bg-transparent lg:text-primaryDark-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                <Suspense>
                  <MyAllCategory resultCate={resultCate} />
                </Suspense>
              </a> */}
              <SpecialOfferButton />
            </li>
            <li>
              <Link
                href="/"
                className={`px-2 py-2 rounded ${
                  pathname === "/"
                    ? "underline  underline-offset-4  text-primaryDark font-semibold"
                    : "text-black hover:text-primaryDark"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`px-2 py-2 rounded ${
                  pathname === "/products"
                    ? "underline  underline-offset-4  text-primaryDark font-semibold"
                    : "text-black hover:text-primaryDark"
                }`}
              >
                Products
              </Link>
            </li>

            {/* <li>
              <a
                href="/video-gallery"
                className={`px-2 py-2 rounded ${
                  pathname === "/video-gallery"
                    ? "underline  underline-offset-4  text-primaryDark font-semibold"
                    : "text-black hover:text-primaryDark"
                }`}
              >
                videos
              </a>
            </li> */}
            <li>
              <Link
                href="/support"
                className={`px-2 py-2 rounded ${
                  pathname === "/support"
                    ? "underline  underline-offset-4  text-primaryDark font-semibold"
                    : "text-black hover:text-primaryDark"
                }`}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`px-2 py-2 rounded ${
                  pathname === "/about"
                    ? "underline  underline-offset-4  text-primaryDark font-semibold"
                    : "text-black hover:text-primaryDark"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`px-2 py-2 rounded ${
                  pathname === "/contact"
                    ? "underline  underline-offset-4  text-primaryDark font-semibold"
                    : "text-black hover:text-primaryDark"
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className={`px-2 py-2 rounded ${
                  pathname === "/resources"
                    ? "underline  underline-offset-4  text-primaryDark font-semibold"
                    : "text-black hover:text-primaryDark"
                }`}
              >
                Resources
              </Link>
            </li>
          </ul>
          {/* <p className="hidden xl:flex">
            Pend $120 more and get free shipping!
          </p> */}
        </div>
        <div className="hidden lg:inline">
          <SearchProduct />
        </div>
      </div>
    </>
  );
}

export default MyNavigation;
