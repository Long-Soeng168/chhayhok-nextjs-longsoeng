import Link from "next/link";
import React from "react";
import { RainbowButton } from "./rainbow-button";

const SpecialOfferButton = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-dark to-primary rounded-xl blur-lg opacity-30 group-hover:opacity-90 transition duration-700 group-hover:duration-300"></div>
      <Link
        href="/products?specialOffer=1"
        className="block font-bold text-primaryDark group-hover:text-primaryDarkDark transition duration-200"
      >
        <RainbowButton className="font-bold">Special Offer</RainbowButton>
      </Link>
    </div>
  );
};

export default SpecialOfferButton;
