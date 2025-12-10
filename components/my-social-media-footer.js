"use client";
import React from "react";
import Image from "next/image";
import { IMAGE_LINKS_URL } from "@/env";

function MySocialMediaFooter({ resultLink }) {
  return (
    <div className="flex gap-4 lg:justify-end flex-wrap">
      {resultLink.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit ${item.name}`}
          aria-label={`Link to ${item.name}`}
          className="hover:scale-125 transition-all duration-300"
        >
          <Image
            src={`${IMAGE_LINKS_URL}${item.image}`}
            width={512}
            height={512}
            alt={`${item.name} icon`}
            className="size-10"
          />
        </a>
      ))}
    </div>
  );
}

export default MySocialMediaFooter;
