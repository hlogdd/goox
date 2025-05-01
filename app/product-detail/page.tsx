/** @format */
"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";
import ProductSimilar from "../ui/product-detail/ProductSimilar";

const Page = () => {
  const thumbnails = ["/product/product_detail_2.png", "/product/product_detail_3.png", "/product/product_detail_4.png"];

  const colors = ["#F0AB5E", "#96908B", "#69778E", "#6E724C", "#274156"];

  useEffect(() => {
    removeInlineStylesFromMain();
    console.log("Chạy một lần duy nhất");
    return () => {
      console.log("Component bị unmount");
    };
  }, []);

  return (
    <div className="section pt-[80px]">
      <div className="section__container ">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-[32px] flex gap-[12px]">
          <span className="text-[#9D9D9D]">Trang chủ</span> / <span className="text-[#9D9D9D]">Danh mục sản phẩm</span> / <span className="text-[#1D1D1D] font-normal">Ghế nằm</span>
        </div>
        <div className="flex flex-col xl:flex-row gap-[50px] gap-[32px] 2xl:gap-[100px] xl:gap-[60px]">
          {/* Bên trái: ảnh chính + thumbnails */}
          <div className="max-w-full xl:max-w-[50%] w-full">
            {/* Ảnh chính */}
            <div className="overflow-hidden mb-6 w-full h-[635px] relative">
              <Image src="/product/product_detail_1.png" alt="Ảnh chính" fill className="w-full object-cover" />
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-3 gap-4">
              {thumbnails.map((src, idx) => (
                <div key={idx} className="aspect-square overflow-hidden">
                  <Image src={src} alt={`thumb-${idx}`} width={300} height={300} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Bên phải: nội dung chi tiết */}
          <div className="flex flex-col justify-start max-w-[350px] lg:max-w-full w-full">
            <h2 className="text-[28px] font-medium uppercase mb-1">GOOX Low Platform Bed</h2>
            <p className="text-[#323232] leading-[24px] text-md mb-2">Tông gỗ tự nhiên ấm, giữ nguyên sắc gỗ và vân thật. Có thể lựa chọn giữa sồi sáng, óc chó nâu trầm hoặc phủ dầu xám khói.</p>

            {/* Màu sắc */}
            <div>
              <p className="text-md font-medium mb-2">MÀU SẮC</p>
              <div className="flex gap-3 mb-4">
                {colors.map((c, idx) => (
                  <div key={idx} className={`w-10 h-10 p-1 rounded-full flex items-center justify-center rounded-full ${idx === 1 ? "border-2 border-[#414141]" : ""} `}>
                    <div key={idx} className="w-6 h-6 rounded-[50%]" style={{ backgroundColor: c }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Chất liệu & Kích thước */}
            <div className="text-md text-[#414141] space-y-1">
              <p>
                <strong>CHẤT LIỆU:</strong> Gỗ sồi thịt tự nhiên phủ sơn
              </p>
              <p>
                <strong>KÍCH THƯỚC:</strong> 1x2m, 1m2x2m, 1m4x2m
              </p>
            </div>

            {/* Nút liên hệ */}
            <button className="uppercase py-3 px-6 w-fit mt-4 transition-all bg-primary text-white !font-medium flex items-center gap-2">
              Liên hệ ngay
              <Image src={"/product/icon_arrow_up.svg"} width={20} height={20} alt="icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__container">
          <ProductSimilar />
        </div>
      </div>
      <ContactHome />
    </div>
  );
};

export default Page;
