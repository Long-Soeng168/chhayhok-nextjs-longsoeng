import React, { Suspense } from "react";
import MyDataList from "./components/my-data-list";
import MyLoadingAnimation from "@/components/my-loading-animation";
import { BlogCategorySelect } from "@/components/blog-categories-select";
import { MyShortButtonBlog } from "@/components/my-sort-button-blogs";
import SearchInputBlogs from "@/components/ui/SearchInputBlogs";

async function page(props) {
  const searchParams = await props.searchParams;
  const blog_search = searchParams.blog_search || "";
  const categoryId = searchParams.categoryId || "";
  const type = searchParams.type || "";
  const subCategoryId = searchParams?.subCategoryId || "";
  const orderBy = searchParams?.orderBy || "";
  const orderDir = searchParams?.orderDir || "";
  const perPage = searchParams?.perPage || "";
  const page = searchParams?.page || "";

  return (
    <div className="min-h-[50vh] max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 ">
      <div className="flex flex-wrap gap-2 items-center justify-between mt-2">
        <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
        <div className="flex items-center gap-2 flex-wrap">
          <SearchInputBlogs />
          <div className="flex flex-1 gap-2 items-center justify-end">
            <div
              className="grid items-center grid-cols-2 gap-1 my-4 sm:flex md:gap-2"
              key={" " + orderBy + orderDir + perPage}
            >
              <MyShortButtonBlog />
              <BlogCategorySelect />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        <div className="flex-1">
          {/* Right Content */}
          <Suspense
            key={
              "products_list_key" +
              categoryId +
              subCategoryId +
              perPage +
              page +
              orderBy +
              orderDir +
              blog_search
            }
            fallback={<MyLoadingAnimation />}
          >
            <MyDataList
              subCategoryId={subCategoryId}
              perPage={perPage}
              page={page}
              orderDir={orderDir}
              orderBy={orderBy}
              categoryId={categoryId}
              search={blog_search}
              type={type}
            />
          </Suspense>

          {/*End Right Content */}
        </div>
      </div>
    </div>
  );
}

export default page;
