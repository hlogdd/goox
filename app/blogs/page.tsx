/** @format */

"use client";

/** @format */

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { removeInlineStylesFromMain } from "../lib/function";
import Link from "next/link";

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

  const blogPosts = [
    {
      image: "/blogs/01.png",
      title: "Gỗ Tần Bì và Gỗ Sồi: So sánh chất lượng cho ghế ngồi",
      date: "15/06/2025",
    },
    {
      image: "/blogs/02.png",
      title: "Thiết kế nội thất: Tạo không gian thoáng đãng cho căn hộ nhỏ",
      date: "16/06/2025",
    },
    {
      image: "/blogs/03.png",
      title: "Chọn màu sơn phù hợp: Xu hướng màu sắc cho năm 2025",
      date: "17/06/2025",
    },
    {
      image: "/blogs/04.png",
      title: "Nội thất thông minh: Giải pháp cho không gian sống hạn chế",
      date: "18/06/2025",
    },
    {
      image: "/blogs/05.png",
      title: "Gỗ Óc Chó: Đặc điểm và ứng dụng trong nội thất hiện đại",
      date: "19/06/2025",
    },
    {
      image: "/blogs/06.png",
      title: "Ghế sofa đa năng: Tính năng và lựa chọn cho phòng khách",
      date: "20/06/2025",
    },
    {
      image: "/blogs/07.png",
      title: "Cây xanh trong nhà: Tác dụng và cách bố trí hợp lý",
      date: "21/06/2025",
    },
    {
      image: "/blogs/08.png",
      title: "Nội thất vintage: Xu hướng trở lại trong thiết kế hiện đại",
      date: "22/06/2025",
    },
    {
      image: "/blogs/09.png",
      title: "Chọn đèn trang trí: Phong cách và công năng trong không gian sống",
      date: "23/06/2025",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 6);

  return (
    <section className="py-16 pt-[80px]">
      <div className="section__container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2 flex gap-[12px]">
          <span className="text-[#9D9D9D]">Trang chủ</span> / <span className="text-[#1D1D1D] font-normal">Blog</span>
        </div>

        {/* Tiêu đề + mô tả */}
        <h2 className="text-[32px] lg:text-[56px] font-bold mb-2">BLOG</h2>
        <p className="text-[#141414] mb-2 lg:mb-8 max-w-3xl">Nơi chúng tôi lưu giữ và chia sẻ những cảm hứng sống tinh tế, từ chất liệu gỗ tự nhiên đến những xu hướng thiết kế đương đại.</p>

        {/* Grid bài viết */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visiblePosts.map((post, index) => (
            <Link key={index} href={`/blog-detail`} className="flex flex-col gap-3 cursor-pointer">
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-b-[#8F8F8F]">
                <div className="max-w-[300px] w-full">
                  <p className="text-sm text-[#414141] mb-1">{post.date}</p>
                  <h3 className="text-md font-medium text-black leading-[18px]">{post.title}</h3>
                </div>
                <Image src="/product/icon_arrow_up_black.svg" alt="icon" width={20} height={20} className="object-contain sepia-0" />
              </div>
            </Link>
          ))}
        </div>

        {/* Nút xem thêm */}
        {!showAll && (
          <div className="text-center mt-8 flex justify-center">
            <button onClick={() => setShowAll(true)} className="px-6 py-3 !font-bold text-white transition-all bg-primary flex items-center gap-2">
              Xem thêm
              <Image src="/product/icon_arrow_up.svg" alt="icon" width={20} height={20} className="object-contain" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
