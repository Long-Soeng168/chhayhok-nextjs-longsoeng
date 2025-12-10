"use client";
import React from "react";
import { Link as IconLink } from "lucide-react";
import Image from "next/image";
import { IMAGE_LINKS_URL } from "@/env";

function MyContactLinks({ resultLink }) {
  return (
    <div>
      {/* Social Links */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {resultLink.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${item.name}`}
            aria-label={`Link to ${item.name}`}
            className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 hover:bg-primary-100 hover:shadow-md transition-all duration-150"
          >
            <Image
              src={`${IMAGE_LINKS_URL}${item.image}`}
              width={24}
              height={24}
              alt={`${item.name} icon`}
              className="w-6 h-6"
            />
            <span className="text-sm text-gray-700 font-medium">
              {item.name}
            </span>
            <IconLink className="w-4 h-4 text-gray-500" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default MyContactLinks;
