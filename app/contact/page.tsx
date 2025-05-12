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
    <section className="section h-screen bg-[#EEEBE5] ">
        <div className="section__container h-full flex items-center flex items-center">
          <ContactHome />
        </div>
      </section>
  );
};

export default Page;
