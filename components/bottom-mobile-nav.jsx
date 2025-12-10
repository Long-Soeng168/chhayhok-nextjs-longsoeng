"use client";

import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  MonitorSmartphone,
  PhoneCallIcon,
  TagsIcon,
} from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import MyLoadingAnimation from "./my-loading-animation";

export function BottomMobileNav({ className }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const items = [
    { name: "Home", url: "/", icon: HomeIcon },
    { name: "Products", url: "/products", icon: MonitorSmartphone },
    { name: "Special Offer", url: "/products?specialOffer=1", icon: TagsIcon },
    {
      name: "Contact",
      url: "/contact",
      icon: PhoneCallIcon,
    },
  ];
  const [activeTab, setActiveTab] = useState(items[0].url);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-4 sm:pt-4",
        className
      )}
    >
      <Suspense fallback={<MyLoadingAnimation />}>
        <div className="flex items-center sm:hidden bg-white/40 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon;
            let isActive = false;
            if (item.url.startsWith("/products")) {
              // Both tabs share the path /products
              if (item.name === "Products") {
                // Active if path is /products AND no specialOffer param
                isActive =
                  pathname === "/products" &&
                  !searchParams.has("specialOffer");
              } else if (item.name === "Special Offer") {
                // Active if path is /products AND specialOffer=1
                isActive =
                  pathname === "/products" &&
                  searchParams.get("specialOffer") === "1";
              }
            } else {
              // default active check for others, just match pathname
              isActive = pathname === item.url;
            }

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden flex flex-col items-center">
                  <Icon size={18} strokeWidth={2.5} />
                  <span className="text-xs whitespace-nowrap">{item.name}</span>
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </Suspense>
    </div>
  );
}
