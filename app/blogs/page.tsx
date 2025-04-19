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
      console.log('Chạy một lần duy nhất');
  
      // Optional: cleanup function
      return () => {
        console.log('Component bị unmount');
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
    {
      image: "/blogs/010.png",
      title: "Thảm trải sàn: Lựa chọn và cách bố trí phù hợp cho từng phòng",
      date: "24/06/2025",
    },
    {
      image: "/blogs/011.png",
      title: "Thiết kế phòng bếp: Tối ưu hóa không gian và công năng sử dụng",
      date: "25/06/2025",
    },
    {
      image: "/blogs/012.png",
      title: "Phòng ngủ thư giãn: Cách bày trí để nâng cao chất lượng giấc ngủ",
      date: "26/06/2025",
    },
    {
      image: "/blogs/013.png",
      title: "Phong cách Japandi: Sự hòa quyện giữa Nhật và Bắc Âu",
      date: "27/06/2025",
    },
    {
      image: "/blogs/014.png",
      title: "Tường ốp gỗ: Biến không gian trở nên ấm cúng và sang trọng",
      date: "28/06/2025",
    },
    {
      image: "/blogs/015.png",
      title: "Sàn gỗ tự nhiên: Ưu điểm và cách bảo quản đúng cách",
      date: "29/06/2025",
    },
    {
      image: "/blogs/016.png",
      title: "Kệ treo tường: Tối ưu hóa không gian nhỏ",
      date: "30/06/2025",
    },
    {
      image: "/blogs/017.png",
      title: "Bố trí ánh sáng tự nhiên trong căn hộ hiện đại",
      date: "01/07/2025",
    },
    {
      image: "/blogs/018.png",
      title: "Thiết kế góc làm việc tại nhà: Nhỏ gọn mà hiệu quả",
      date: "02/07/2025",
    },
    {
      image: "/blogs/019.png",
      title: "Màu sắc trung tính: Sự lựa chọn an toàn và tinh tế",
      date: "03/07/2025",
    },
    {
      image: "/blogs/020.png",
      title: "Nội thất tối giản: Nghệ thuật của sự tinh gọn",
      date: "04/07/2025",
    },
    {
      image: "/blogs/021.png",
      title: "Tủ âm tường: Giải pháp lưu trữ thông minh cho nhà hiện đại",
      date: "05/07/2025",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 6);

  return (
    <section className="py-16 pt-10">
      <div className="section__container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
          <span className="text-gray-400">Trang chủ</span> / <span className="text-black font-medium">Blog</span>
        </div>

        {/* Tiêu đề + mô tả */}
        <h2 className="text-[56px] font-bold mb-2">BLOG</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">Nơi chúng tôi lưu giữ và chia sẻ những cảm hứng sống tinh tế, từ chất liệu gỗ tự nhiên đến những xu hướng thiết kế đương đại.</p>

        {/* Grid bài viết */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visiblePosts.map((post, index) => (
            <Link key={index} href={`/blog-detail`} className="flex flex-col gap-3 cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm text-[#414141]">{post.date}</p>
                <h3 className="text-md font-medium">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Nút xem thêm */}
        {!showAll && (
          <div className="text-center mt-8">
            <button onClick={() => setShowAll(true)} className="px-6 py-3 !font-bold text-white transition-all bg-primary">
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
