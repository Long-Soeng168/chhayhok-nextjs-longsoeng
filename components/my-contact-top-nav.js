"use client";
import React from "react";
import Image from "next/image";
import { IMAGE_LINKS_URL } from "@/env";

function MyContactTopNav({ resultLink }) {
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
          className="hover:underline underline-offset-4 text-base flex gap-1 items-center transition-all duration-300"
        >
          {item.image && (
            <Image
              src={`${IMAGE_LINKS_URL}${item.image}`}
              width={512}
              height={512}
              alt={``}
              className="size-5"
            />
          )}

          <p>{item.name}</p>
        </a>
      ))}
    </div>
  );
}

export default MyContactTopNav;
