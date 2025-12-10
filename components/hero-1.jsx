import Image from "next/image";
import React from "react";
import HeroButton from "./hero-button";

const Hero1 = () => {
  return (
    <div className="relative w-full max-w-[1380px] mx-auto min-h-[300px] max-h-[600px] overflow-hidden bg-black object-cover">
      <Image
        alt=""
        width={1920}
        height={1080}
        className="w-full  min-h-[300px]  max-h-[600px] object-cover h-full"
        src={`/hero-banner-2.png`}
      />
      <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
        <HeroButton link={"/products"} title="See All Products" />
      </span>
    </div>
  );
};

export default Hero1;
