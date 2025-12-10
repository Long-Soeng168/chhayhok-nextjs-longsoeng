import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HoverEffect } from "./card-hover-effect";
import { BASE_API_URL } from "@/env";

const items = [
  {
    link: "/products",
    name: "Computers and Accessories",
    imageUrl:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    link: "/products",
    name: "Smartphones and Mobile Devices",
    imageUrl:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    link: "/products",
    name: "Cameras and Photography Gear",
    imageUrl:
      "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    link: "/products",
    name: "Tablets, E-Readers, and Accessories",
    imageUrl:
      "https://images.pexels.com/photos/508258/pexels-photo-508258.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    link: "/products",
    name: "Wearable Technology and Smartwatches",
    imageUrl:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    link: "/products",
    name: "Audio Equipment and Headphones",
    imageUrl:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    link: "/products",
    name: "Drones and Aerial Photography Devices",
    imageUrl:
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    link: "/products",
    name: "Home Entertainment Systems and TVs",
    imageUrl:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const CategoryCards = async () => {
  const respone = await fetch(
    `${BASE_API_URL}/categories?withSub=2&limit=8&orderBy=order_index&orderDir=asc`,
    {
      next: { revalidate: 600 },
    }
  );
  const categories = await respone.json();

  return (
    <div className="px-2 mx-auto max-w-screen-2xl xl:px-20 mt-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Explore More Products
        </h2>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 my-10 mt-8">
        <HoverEffect items={categories} />
      </div>
    </div>
  );
};

export default CategoryCards;
