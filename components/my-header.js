import Image from "next/image";
import { PhoneCallIcon, Search, User } from "lucide-react";
import Link from "next/link";
import { SearchProduct } from "./my-search-product";
import SearchInput from "./ui/SearchInput";
import MyHomeModal from "./my-home-modal";
import { Suspense } from "react";
import { APP_LOGO, BASE_BACKEND_URL } from "@/env";
import MyNavigation from "./my-navigation";
import MySocialMediaFooter from "./my-social-media-footer";
import MyContactTopNav from "./my-contact-top-nav";

const MyHeader = ({ resultCate, resultContact }) => {
  return (
    <>
      <header>
        {/* <p className="text-[10px] px-2  text-white  xl:hidden">
          Pend $120 more and get free shipping!
        </p> */}
        <div className="px-2 mx-auto max-w-screen-2xl xl:px-20">
          <div className="flex items-center justify-between gap-8 lg:py-2">
            <Link href="/" className="w-auto">
              <Image
                src={APP_LOGO}
                width={512}
                height={512}
                alt="logo"
                className="w-[64px] py-2 lg:w-[140px] object-contain"
              />
            </Link>
            <div className="flex flex-col flex-1">
              <div className="flex justify-end lg:justify-between w-full">
                <div className="hidden lg:block">
                  <div className="text-foreground text-base flex gap-3 items-center ">
                    <Link
                      href={`/contact`}
                      className="whitespace-nowrap flex items-center"
                    >
                      Visit our showroom
                      <span className="underline underline-offset-4 ml-1">
                        here
                      </span>
                    </Link>
                    <span>|</span>
                    <span className="whitespace-nowrap flex items-center">
                      Free Delivery to 25 provinces
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-foreground text-lg flex items-center gap-4">
                    <span className="hidden lg:flex gap-4">
                      <MyContactTopNav
                        resultLink={resultContact.filter(
                          (item) => item.type === "contact_top_bar"
                        )}
                      />
                    </span>

                    <span className="lg:hidden">
                      <SearchProduct />
                    </span>
                    <Suspense>
                      <MyHomeModal categories={resultCate} />
                    </Suspense>
                  </div>
                </div>
              </div>
              <div>
                <MyNavigation resultCate={resultCate} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
