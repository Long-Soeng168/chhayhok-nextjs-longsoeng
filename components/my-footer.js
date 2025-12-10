import React from "react";
import Image from "next/image";
import { APP_LOGO, BASE_API_URL, IMAGE_BRAND_URL } from "@/env";
import Link from "next/link";
import MySocialMediaFooter from "./my-social-media-footer";
import MyContactFooter from "./my-contact-footer";
export default async function MyFooter() {
  const respone = await fetch(`${BASE_API_URL}/brands`);
  const brandData = await respone.json();
  const resFooter = await fetch(`${BASE_API_URL}/footer`);
  const footerData = await resFooter.json();
  //   console.log(brandData);

  const responeContact = await fetch(`${BASE_API_URL}/contact`, {
    next: { revalidate: 600 },
  });
  const resultContact = await responeContact.json();
  const responeLink = await fetch(`${BASE_API_URL}/links`, {
    next: { revalidate: 600 },
  });
  const resultLink = await responeLink.json();
  return (
    <footer className="px-2 mx-auto max-w-screen-2xl xl:px-20 mt-20">
      <div>
        <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-10 border-t py-6">
          <div className="flex-1 text-foreground md:mb-0">
            <a href="/" className="flex flex-col gap-2">
              <Image
                src={APP_LOGO}
                width={200}
                height={200}
                alt="logo"
                className="w-28 object-contain"
              />

              <div
                // className=" w-auto prose prose-p:p-0 prose-p:m-0"
                className="text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: footerData.description,
                }}
              ></div>
            </a>
          </div>
          <div className="flex-1 lg:flex justify-center w-full space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contacts</h3>
              <div
                // className=" w-auto prose prose-p:p-0 prose-p:m-0"
                className="text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: footerData.description_kh,
                }}
              ></div>
            </div>
          </div>
          <div className="flex-1 lg:flex justify-center w-full space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="text-gray-600 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-600 hover:underline"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-600 hover:underline"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-600 hover:underline"
                  >
                    Resource
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <MySocialMediaFooter
              resultContact={resultContact}
              resultLink={resultLink.filter((item) => item.type === "contact")}
            />
            <MySocialMediaFooter
              resultContact={resultContact}
              resultLink={resultLink.filter((item) => item.type === "social")}
            />
          </div>
          {/* <div className="flex-1">
            <h2 className="mb-2 text-[10px] sm:text-sm md:text-base text-center md:text-start  text-foreground  dark:text-foreground">
              Our family brand product
            </h2>
            <div className="grid grid-cols-5 sm:grid-cols-6 xl:grid-cols-8 gap-1 ">
              {brandData?.map((item) => (
                <Link
                  href={`/products?brandId=${item.id}`}
                  key={item.id}
                  className="col-span-1 bg-white"
                >
                  <Image
                    src={IMAGE_BRAND_URL + item.image}
                    width={100}
                    height={100}
                    alt=" brand product"
                    className="w-full aspect-video object-contain "
                  />
                </Link>
              ))}
            </div>
          </div> */}
        </div>
        <hr className="mt-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className="flex justify-between gap-4 py-6">
          <span className="text-[9px] md:text-sm text-foreground sm:text-center dark:text-gray-400">
            {footerData.copyright}
          </span>
          <a
            href="https://corasolution.com/"
            className="text-[6px] md:text-xs text-foreground sm:text-center"
          >
            Developed By: <span className="hover:underline ">Cora Soft</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
