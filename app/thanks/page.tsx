/** @format */
"use client";

import React, { useEffect } from "react";
import Banner from "../ui/projects/Banner";
import Image from "next/image";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";
import AOSProvider from "../ui/AOSProviders";

const Page = () => {
  useEffect(() => {
    removeInlineStylesFromMain();
  }, []);

  return (
    <AOSProvider>
      <div className="relative min-h-[calc(100vh-340px)] w-full pt-[60px]">
        <div className="max-w-[600px] w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6" data-aos="fade-in">
          <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium leading-tight mb-4">Cảm ơn bạn đã tin tưởng và kết nối cùng chúng tôi</h1>

          <p className="mb-3 text-sm sm:text-md font-normal">
            Chúng tôi đã ghi nhận thông tin từ bạn và đội ngũ chuyên viên tư vấn sẽ sớm liên hệ để lắng nghe kỹ hơn về nhu cầu cũng như mong muốn của bạn.
          </p>

          <p className="text-sm sm:text-md font-normal">
            Nếu cần hỗ trợ gấp, vui lòng liên hệ trực tiếp qua số: <span className="font-bold">+84 21345299752</span>
          </p>
        </div>

        <div className="absolute hidden lg:block top-0 right-0 bottom-0 w-full z-0 pointer-events-none">
          <Image src="/home/homepage_thank_bg.png" alt="Background" fill className="object-cover" />
        </div>
      </div>
    </AOSProvider>
  );
};

export default Page;
