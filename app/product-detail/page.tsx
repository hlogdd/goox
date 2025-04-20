/** @format */
"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ProductList from "../ui/homepage/ProductList";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";

const Page = () => {
  const thumbnails = [
    "/product/product_detail_2.png",
    "/product/product_detail_3.png",
    "/product/product_detail_4.png",
  ];

  const colors = ["#D2A46B", "#D1D1D1", "#5C5C5C", "#3B4D31", "#243654"];

  useEffect(() => {
    removeInlineStylesFromMain();
    console.log("Chạy một lần duy nhất");
    return () => {
      console.log("Component bị unmount");
    };
  }, []);

  return (
    <div className="mt-[80px] mb-[50px]">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Bên trái: ảnh chính + thumbnails */}
        <div>
          {/* Ảnh chính */}
          <div className="overflow-hidden mb-6">
            <Image
              src="/product/product_detail_1.png"
              alt="Ảnh chính"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Thumbnail images */}
          <div className="grid grid-cols-3 gap-4">
            {thumbnails.map((src, idx) => (
              <div key={idx} className="aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={`thumb-${idx}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bên phải: nội dung chi tiết */}
        <div className="flex flex-col justify-start gap-6">
          <h2 className="text-2xl font-semibold uppercase">GOOX Low Platform Bed</h2>
          <p className="text-gray-600 text-sm">
            Tông gỗ tự nhiên ấm, giữ nguyên sắc gỗ và vân thật. Có thể lựa chọn giữa sồi sáng, óc chó nâu trầm hoặc phủ dầu xám khói.
          </p>

          {/* Màu sắc */}
          <div>
            <p className="text-sm font-semibold mb-2">MÀU SẮC</p>
            <div className="flex gap-3">
              {colors.map((c, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Chất liệu & Kích thước */}
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>CHẤT LIỆU:</strong> Gỗ sồi thịt tự nhiên phủ sơn
            </p>
            <p>
              <strong>KÍCH THƯỚC:</strong> 1x2m, 1m2x2m, 1m4x2m
            </p>
          </div>

          {/* Nút liên hệ */}
          <button className="uppercase py-3 px-6 w-fit mt-4 hover:bg-gray-800 transition-all bg-primary text-white rounded">
            Liên hệ ngay →
          </button>
        </div>
      </div>

      <ProductList />
      <ContactHome />
    </div>
  );
};

export default Page;
