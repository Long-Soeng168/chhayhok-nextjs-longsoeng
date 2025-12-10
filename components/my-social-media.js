"use client";
import React from "react";
import Image from "next/image";
import { IMAGE_LINKS_URL } from "@/env";
import Link from "next/link";

function MySocialMedia({ resultContact, resultLink }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {/* Contact Information Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
          {resultContact.name}
        </h2>

        {/* Contact Details */}
        <div className="space-y-4">
          {/* Phone */}
          {resultLink?.length > 0 &&
            resultLink.map((item) => (
              <Link
                href={item.link || "#"}
                key={item.id}
                className={`flex items-center gap-2 ${
                  item.link ? "hover:underline underline-offset-4" : ""
                }`}
              >
                <Image
                  src={`${IMAGE_LINKS_URL}${item.image}`}
                  width={512}
                  height={512}
                  alt={`${item.name} icon`}
                  className="size-5"
                />

                <p className="text-gray-600 text-sm">{item.name}</p>
              </Link>
            ))}

          {/* Email
          <div className="flex items-start gap-3">
            <p className="text-gray-600 flex items-center text-sm whitespace-nowrap gap-2 w-[100px] shrink-0 border-r ">
              <Image
                src="/assets/images/gmail.png"
                width={24}
                height={24}
                alt="Email icon representing email address"
                className="w-6 h-6"
              />
              Email
            </p>
            <p className="text-gray-600 text-sm">{resultContact.email}</p>
          </div>

          <div className="flex items-start gap-3">
            <p className="text-gray-600 flex items-center text-sm whitespace-nowrap gap-2 w-[100px] shrink-0 border-r ">
              <Image
                src="/assets/images/location.png"
                width={24}
                height={24}
                alt="Location icon representing address"
                className="w-6 h-6"
              />
              Address
            </p>
            <p className="text-gray-600 text-sm">{resultContact.address}</p>
          </div> */}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
            Find Us
          </h2>
          <iframe
            src={resultContact.map}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
            className="w-full h-80 rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MySocialMedia;
