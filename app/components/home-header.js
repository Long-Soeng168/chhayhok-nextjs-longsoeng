import MyHeader from "@/components/my-header";
import MyNavigation from "@/components/my-navigation";
import { BASE_API_URL } from "@/env";
import React from "react";

const HomeHeader = async () => {
  const respone = await fetch(`${BASE_API_URL}/categories?withSub=2`, {
    next: {
      revalidate: 3600,
    },
  });
  const resultCate = await respone.json();

  const responeContact = await fetch(`${BASE_API_URL}/links`, {
    next: { revalidate: 3600 },
  });
  const resultContact = await responeContact.json();
  return (
    <div className="bg-white/55 border-b backdrop-blur-md sticky top-0 z-50">
      <MyHeader resultCate={resultCate} resultContact={resultContact} />
    </div>
  );
};

export default HomeHeader;
