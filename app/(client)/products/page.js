import MyCategoryComponent from "@/components/my-category";
import MylastestProduct from "@/components/my-lastest-product";

import React, { Suspense } from "react";
import Filter from "@/components/my-filter";
import { SearchBrand } from "@/components/my-search-brand";
import { BASE_API_URL } from "@/env";
import MyDataList from "./components/my-data-list";
import { MyShortButton } from "@/components/my-sort-button";
import { MyPerpageShort } from "@/components/my-perpage-short";
import MyLoadingAnimation from "@/components/my-loading-animation";
import SelectedFilters from "@/components/SelectedFilters";

// export const metadata = {
//   title: "Explore Our Products - Chhayhok.com",
//   icons: {
//     icon: "/assets/images/chhayhokLogo.png",
//     shortcut: "/assets/images/chhayhokLogo.png",
//     apple: "/assets/images/chhayhokLogo.png",
//   },
//   openGraph: {
//     title: "Chhayhok - Products",
//     description: "Discover products and categories on Chhayhok.",
//     url: "https://chhayhok.com/products",
//     siteName: "Chhayhok",
//     images: [
//       {
//         url: "/assets/images/product11.png", // Path to your image
//         width: 1200,
//         height: 630,
//         alt: "Chhayhok Products Page Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Chhayhok - Products",
//     description: "Discover products and categories on Chhayhok.",
//     images: ["/assets/images/product11.png"], // Path to your image
//   },
// };

async function page(props) {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";
  const categoryId = searchParams.categoryId || "";
  const specialOffer = searchParams.specialOffer || "";
  const subCategoryId = searchParams?.subCategoryId || "";
  const orderBy = searchParams?.orderBy || "";
  const orderDir = searchParams?.orderDir || "";
  const perPage = searchParams?.perPage || "";
  const page = searchParams?.page || "";
  const brandId = searchParams?.brandId || "";
  const priceFrom = searchParams?.priceFrom || "";
  const priceTo = searchParams?.priceTo || "";

  const respone = await fetch(`${BASE_API_URL}/categories?withSub=2`, {
    next: { revalidate: 600 },
  });
  const categories = await respone.json();
  const resBrand = await fetch(`${BASE_API_URL}/brands`, {
    next: { revalidate: 600 },
  });
  const brand = await resBrand.json();
  // console.log(categories);

  return (
    <div className="min-h-[50vh] max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 ">
      <div className="flex gap-4">
        {/* Left Content */}
        <div className="w-[240px] hidden lg:block">
          {/* Category */}
          <MyCategoryComponent
            key={"categories" + search + categoryId + subCategoryId}
            categories={categories}
          />
          {/*End Category */}
          <hr className="my-5" />
          {/* Search brand */}
          <SearchBrand brand={brand} key={"brand" + brandId} />
          {/*End Search brand */}
          <hr className="my-10" />

          {/* Filter price */}
          {/* <MyDualRangPrice /> */}
          {/*End Filter price */}
          {/* <hr className="my-5" /> */}

          {/* Lastest Products */}
          <MylastestProduct />
          {/*End Lastest Products */}
        </div>
        {/*End Left Content */}

        <div className="flex-1">
          <div className="w-full flex flex-col lg:flex-row lg:items-center flex-wrap gap-1 my-2 mt-2 lg:mt-2">
            <Suspense
              fallback={<MyLoadingAnimation />}
            >
              <SelectedFilters />
            </Suspense>
            <div className="flex flex-1 gap-2 items-center justify-end">
              <div
                className="grid items-center grid-cols-2 gap-1 my-4 sm:flex md:gap-2"
                key={" " + orderBy + orderDir + perPage}
              >
                <MyShortButton />
                {/* <MyShortCharacter /> */}
                <MyPerpageShort />
              </div>
              <div
                className="flex my-4 lg:hidden"
                key={
                  "filter_key" +
                  categoryId +
                  subCategoryId +
                  brandId +
                  perPage +
                  page +
                  orderBy +
                  orderDir +
                  search
                }
              >
                {/* <MyBreadCrumbShop /> */}
                <Filter
                  key={
                    "categories" +
                    search +
                    categoryId +
                    subCategoryId +
                    "brand" +
                    brandId
                  }
                  categories={categories}
                  brand={brand}
                />
              </div>
            </div>
          </div>
          {/* Right Content */}
          <Suspense
            key={
              "products_list_key" +
              categoryId +
              subCategoryId +
              brandId +
              perPage +
              page +
              orderBy +
              orderDir +
              search
            }
            fallback={<MyLoadingAnimation />}
          >
            <MyDataList
              subCategoryId={subCategoryId}
              perPage={perPage}
              page={page}
              orderDir={orderDir}
              orderBy={orderBy}
              priceFrom={priceFrom}
              priceTo={priceTo}
              brandId={brandId}
              categoryId={categoryId}
              search={search}
              specialOffer={specialOffer}
            />
          </Suspense>

          {/*End Right Content */}
        </div>
      </div>
    </div>
  );
}

export default page;
