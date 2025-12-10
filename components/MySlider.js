"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { IMAGE_SLIDES_URL } from "@/env";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import HeroButton from "./hero-button";
import { cn } from "@/lib/utils";
import { StarBorder } from "./star-border";

export default function MySlider({ imagesTop, imagesBottom }) {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-[2000px] relative -top-[72px] lg:-top-[130px]">
      <div className="w-full max-w-[150vw] relative mx-auto overflow-hidden bg-black object-cover">
        {imagesTop ? (
          <Image
            alt=""
            width={1920}
            height={1080}
            className="w-full aspect-[16/9] object-cover min-h-[400px]"
            src={IMAGE_SLIDES_URL + imagesTop[0]?.image}
          />
        ) : (
          <Image
            alt=""
            width={1920}
            height={1080}
            className="w-full aspect-[16/9] min-h-[800px] object-cover"
            src={`/hero-banner-2.png`}
          />
        )}
        {/* <div className="bg-black/20 absolute top-0 left-0 bottom-0 right-0"></div> */}
        <span className="absolute left-1/2 -translate-x-1/2 translate-y-1/4 lg:translate-y-1/2 top-1/2 z-10">
          <div className="relative group">
            {/* <div className="before:absolute before:left-1/2 before:top-1/2 before:z-0 before:h-10 before:w-4/5 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(140,80%,45%),hsl(140,90%,65%),hsl(0,80%,50%),hsl(140,90%,65%),hsl(140,80%,45%))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]"></div> */}
            <div
              className={cn(
                "group relative inline-flex animate-rainbow items-center justify-center p-[0px] border-0 bg-[length:200%] font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                "z-10 bg-[linear-gradient(90deg,hsl(140,80%,45%),hsl(140,90%,65%),hsl(0,80%,50%),hsl(140,90%,65%),hsl(140,80%,45%))] animate-gradient-x"
              )}
            >
              <HeroButton link={"/products"} title="See All Products" />
            </div>
          </div>
        </span>
        {/* <div className="bg-white py-8 ">
          <StarBorder>Theme-aware Border</StarBorder>
        </div> */}
      </div>
      <div className="px-2 mt-3 mx-auto">
        {/* Top Carousel */}
        <Carousel plugins={[plugin.current]} setApi={setApi}>
          <CarouselContent className="-ml-3">
            {imagesBottom.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-3 basis-1/2 lg:basis-1/4 "
              >
                <Link
                  className="relative overflow-hidden group block"
                  href={item.link || "#"}
                >
                  <Image
                    src={IMAGE_SLIDES_URL + item.image}
                    alt={`Slide ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full object-cover overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-125"
                  />
                  {/* <p className="absolute bottom-5 right-5 bg-black/70 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg transition-all duration-300 group-hover:bg-primary-600">
                  Learn More
                </p> */}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute flex items-center justify-center gap-14 xl:gap-3 transform -translate-x-1/2 -bottom-8 lg:-bottom-8 left-1/2">
            <span>
              <CarouselPrevious />
            </span>
            <div className="space-x-2 flex items-center justify-center sm:space-x-3">
              {imagesBottom.map((_, index) => (
                <span
                  key={index}
                  className={`transition-all duration-300 ${
                    currentIndex === index
                      ? "h-1.5 w-6 sm:w-8 bg-primary scale-125 shadow-lg"
                      : "h-1.5 w-3 bg-gray-400 opacity-70"
                  } rounded-full`}
                />
              ))}
            </div>
            <span>
              <CarouselNext />
            </span>
          </div>
        </Carousel>

        {/* Bottom Carousel */}
        {/* <div className="mx-auto mt-2">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="-ml-2">
            {imagesBottom.map((item, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2 lg:basis-1/4">
                <Card className="rounded-none shadow-none border">
                  <CardContent className="flex items-center justify-center p-0">
                    <Link className="relative group" href={item.link || "#"}>
                      <Image
                        src={IMAGE_SLIDES_URL + item.image}
                        alt={`src ${index + 1}`}
                        width={1600}
                        height={900}
                        className="aspect-[21/9] object-cover hover:cursor-pointer"
                      />
                      <p className="absolute whitespace-nowrap bottom-4 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-primary-600">
                        Learn More
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
      </div>
    </div>
  );
}
