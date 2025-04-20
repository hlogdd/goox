/** @format */

"use client";

/** @format */

import React, { useEffect } from "react";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";

const Page = () => {
  useEffect(() => {
    removeInlineStylesFromMain();

    // Chạy 1 lần duy nhất khi component được render lần đầu
    console.log("Chạy một lần duy nhất");

    // Optional: cleanup function
    return () => {
      console.log("Component bị unmount");
    };
  }, []);

  return (
    <div className="section pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-[80px] md:pb-[120px]">
      <ContactHome />
    </div>
  );
};

export default Page;
