"use client";
import React from "react";
import { Link as IconLink } from "lucide-react";
import Image from "next/image";
import { IMAGE_LINKS_URL } from "@/env";

function MyContactFooter({ resultContact }) {
  return (
    <div className="space-y-4">
      {/* Phone */}
      <div className="flex items-start gap-3">
        <Image
          src="/assets/images/telephone.png"
          width={24}
          height={24}
          alt="Phone icon representing contact number"
          className="w-6 h-6"
        />
        <p className="text-gray-600 text-sm">{resultContact.phone}</p>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <Image
          src="/assets/images/gmail.png"
          width={24}
          height={24}
          alt="Email icon representing email address"
          className="w-6 h-6"
        />
        <p className="text-gray-600 text-sm">{resultContact.email}</p>
      </div>

      {/* Address */}
      <div className="flex items-start gap-3">
        <Image
          src="/assets/images/location.png"
          width={24}
          height={24}
          alt="Location icon representing address"
          className="w-6 h-6"
        />
        <p className="text-gray-600 text-sm">{resultContact.address}</p>
      </div>
    </div>
  );
}

export default MyContactFooter;
