import React from "react";
import MySlider from "@/components/MySlider";
import { APP_LOGO, BASE_API_URL } from "@/env";
import MyNewProduct from "@/components/my-new-product";
import CategoryCards from "@/components/category-cards";
import MyBrands from "@/components/my-brands";

export const metadata = {
  title:
    "Chhay Hok Computer | Laptops, Printers, Monitors & IT Solutions in Cambodia",
  description:
    "Chhay Hok Computer is a leading IT retailer in Cambodia, offering a wide range of laptops, desktops, printers, monitors, projectors, and accessories from top brands like ASUS, Lenovo, MSI, and Epson. Since 2000, we've been committed to enhancing our customers' enjoyment of technology through innovative solutions and dedicated support.",
  icons: {
    icon: APP_LOGO,
    shortcut: APP_LOGO,
    apple: APP_LOGO,
  },
  keywords: [
    "Chhay Hok Computer",
    "Cambodia computer store",
    "Laptops in Phnom Penh",
    "Printers and scanners Cambodia",
    "Monitors and displays Phnom Penh",
    "Gaming laptops Cambodia",
    "IT solutions Cambodia",
    "Computer accessories Phnom Penh",
    "Projectors and screens Cambodia",
    "Epson printers Cambodia",
    "Best Computer store In Phnom Penh",
    "Best Computer store In Cambodia",
    "Best Computer store",
    "Electronic store",
    "Computer store",
    "Phnom Penh store",
  ],
  authors: [{ name: "Chhay Hok Computer" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://chhayhok.com/",
  },
  openGraph: {
    title:
      "Chhay Hok Computer | Laptops, Printers, Monitors & IT Solutions in Cambodia",
    description:
      "Explore top computer brands and accessories in Cambodia at Chhay Hok Computer.",
    url: "https://chhayhok.com",
    siteName: "Chhay Hok Computer",
    images: [
      {
        url: APP_LOGO,
        width: 1200,
        height: 630,
        alt: "Chhay Hok Computer Home Page Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhay Hok Computer | Explore Top Products",
    description:
      "Discover laptops, monitors, printers, and more from Cambodia's trusted IT store.",
    images: [APP_LOGO],
  },
};

export default async function Home(props) {
  const responeTop = await fetch(`${BASE_API_URL}/slides?position=top`, {
    next: { revalidate: 600 },
  });
  const imagesTop = await responeTop.json();
  const responeBottom = await fetch(`${BASE_API_URL}/slides?position=bottom`, {
    next: { revalidate: 600 },
  });
  const imagesBottom = await responeBottom.json();
  // console.log(result);

  return (
    <>
      {/* Slider */}
      <MySlider imagesTop={imagesTop} imagesBottom={imagesBottom} />
      {/*End Slider */}
      {/* <MyProductCategory categories={categories} /> */}
      {/* Card */}
      <MyNewProduct />
      <CategoryCards />
      <MyBrands />
      {/*End Card */}
      {/*Product Card */}
      {/* <MyListProducts /> */}
      {/*End product Card */}
    </>
  );
}
