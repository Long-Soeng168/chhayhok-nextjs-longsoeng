"use client";

import { IMAGE_NEWS_URL } from "@/env";
import { ChevronRight, NewspaperIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function BlogCard({ item, isNew = false }) {
  return (
    <Link
      href={
        item.category?.name == "Video" ? item.link : `/resources/${item.id}`
      }
      target={item.category?.name == "Video" ? "_blank" : "_self"}
      className="p-[1px] bg-border h-full overflow-hidden "
    >
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
        <p className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
          <Image
            className="object-contain w-full mx-auto transition-transform duration-300  dark:hidden hover:scale-125"
            src={IMAGE_NEWS_URL + item.image}
            width={600}
            height={600}
            alt={`Image`}
          />
        </p>

        <div className="p-2 flex flex-col flex-1 justify-between">
          <p className="text-base leading-tight text-gray-700 line-clamp-2 hover:underline dark:text-white">
            {item.name}
          </p>

          <div className="flex justify-end">
            {item.category?.name == "Video" ? (
              <button
                target="_blank"
                className="group relative mt-8 inline-flex cursor-pointer items-center justify-center overflow-hidden border border-primary font-medium dark:border-[#656fe2]"
              >
                <div className="inline-flex whitespace-nowrap gap-2 py-1 translate-y-0 items-center justify-center bg-white px-4 text-primary transition group-hover:-translate-y-[150%] dark:from-[#070e41] dark:to-[#263381] dark:text-white">
                  <PlayIcon /> Play Video
                </div>
                <div className="absolute whitespace-nowrap inline-flex gap-2 py-1 w-full translate-y-[100%] items-center justify-center bg-primary px-4 text-neutral-50 transition duration-300 group-hover:translate-y-0 dark:bg-[#656fe2]">
                  <PlayIcon /> Play Video
                </div>
              </button>
            ) : (
              <button className="group relative mt-8 inline-flex cursor-pointer items-center justify-center overflow-hidden border border-primary font-medium dark:border-[#656fe2]">
                <div className="inline-flex gap-2 whitespace-nowrap py-1 translate-y-0 items-center justify-center bg-white px-4 text-primary transition group-hover:-translate-y-[150%] dark:from-[#070e41] dark:to-[#263381] dark:text-white">
                  <NewspaperIcon /> Read more
                </div>
                <div className="absolute inline-flex gap-2 whitespace-nowrap py-1 w-full translate-y-[100%] items-center justify-center bg-primary px-4 text-neutral-50 transition duration-300 group-hover:translate-y-0 dark:bg-[#656fe2]">
                  <NewspaperIcon /> Read more
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
