"use client";
import { APP_LOGO, IMAGE_CATE_URL } from "@/env";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {items.map((item, idx) => (
        <Link
          href={
            `/products?categoryId=${item?.id}&category=${item?.name}&page=1` ||
            ""
          }
          key={item?.name}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                // className="absolute inset-0 h-full w-full bg-gradient-to-tr from-color-1/50 via-color-3/40 to-color-5/30 block rounded-3xl"
                className="absolute inset-0 h-full w-full bg-primary/50 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative group z-10 overflow-hidden cursor-pointer rounded-2xl shadow-lg">
            {item.banner ? (
              <Image
                src={IMAGE_CATE_URL + item.banner}
                alt={item.name}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-125"
                width={600}
                height={600}
              />
            ) : (
              <div className="w-full aspect-square h-full p-10 bg-gray-400">
                <Image
                  src={APP_LOGO}
                  alt={item.name}
                  className="w-full aspect-square opacity-50 object-contain transition-transform duration-500 group-hover:scale-125"
                  width={600}
                  height={600}
                />
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl lg:text-3xl font-semibold drop-shadow-lg text-center px-2 lg:px-8">
                {item.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
