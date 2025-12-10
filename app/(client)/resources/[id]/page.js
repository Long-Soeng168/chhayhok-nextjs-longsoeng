import HeaderWithLink from "@/components/HeaderWithLink";
import MyGallery from "@/components/my-gallery";
import MyOrderWithTelegram from "@/components/my-order-with-telegram";
import MyRelatedProduct from "@/components/my-related-product";
import MyVideoGallery from "@/components/my-video-gallery";
import DescriptionTab from "@/components/products/description-tab";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRight } from "lucide-react";
import {
  BASE_API_URL,
  IMAGE_LINKS_URL,
  IMAGE_NEWS_URL,
  IMAGE_PRODUCT_URL,
} from "@/env";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

// export async function generateMetadata({ params }) {
//   const { id } = await params;
//   const response = await fetch(`${BASE_API_URL}/products/${id}`, {
//     next: { revalidate: 600 },
//   });
//   const product = await response.json();
//   const htmlString = product.description || "";
//   const description = htmlString.replace(/<[^>]+>/g, "");

//   return {
//     title: `${product.title}`,
//     description,
//     // description: `${product.description} `,

//     openGraph: {
//       title: `${product.title}`,
//       description: description,
//       url: `https://chhayhok.com/products/${id}`,
//       images: [
//         `${IMAGE_PRODUCT_URL}${product.image}`,
//         // ...product.images.map(
//         //   (img) => `${MULTI_IMAGE_PRODUCT_URL}${img.image}`
//         // ),
//       ],
//     },
//   };
// }

export default async function ResourceDetail({ params }) {
  const { id } = await params;
  const respone = await fetch(`${BASE_API_URL}/news/${id}`, {
    next: { revalidate: 600 },
  });
  const result = await respone.json();
  const category = result?.category;

  return (
    <>
      <TracingBeam className="px-10">
        <section className="mx-auto mb-10 max-w-screen-2xl">
          <Breadcrumb className="my-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronsRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
              </BreadcrumbItem>
              {category?.name && (
                <>
                  <BreadcrumbSeparator>
                    <ChevronsRight />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/resources?type=${category?.name}`}>
                      {category?.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
              {result?.name && (
                <>
                  <BreadcrumbSeparator>
                    <ChevronsRight />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/resources/${result?.id}`}>
                      {result?.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
          {/* <MyBreadCrumb result={result?.title} /> */}
          <div className="mt-3">
            <p className="text-2xl font-semibold md:text-3xl mb-8">{result?.name}</p>
            <div className="flex justify-center">
              <Image
                src={`${IMAGE_NEWS_URL}${result?.image}`}
                width={1920}
                height={1080}
                alt="Image"
                className="max-w-[50%] aspect-video overflow-hidden flex justify-center"
              />
            </div>
            {result?.description && (
              <div
                className="product-description prose max-w-none overflow-hidden mt-8"
                dangerouslySetInnerHTML={{ __html: result?.description }}
              ></div>
            )}
          </div>
        </section>
      </TracingBeam>
    </>
  );
}
