"use client";

/** @format */

import React, { useEffect } from "react";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";

const Page = () => {
   useEffect(() => {
      removeInlineStylesFromMain();
  
      // Chạy 1 lần duy nhất khi component được render lần đầu
      console.log('Chạy một lần duy nhất');
  
      // Optional: cleanup function
      return () => {
        console.log('Component bị unmount');
      };
    }, []);

  return (
    <div className="section pt-[80px] pb-[120px] ">
      <div className="">
        <ContactHome />
      </div>
    </div>
  );
};

export default Page;
