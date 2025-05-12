/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectHighlight = () => {
  const productData = [
    { name: "The nine apartment", image: "/home/homepage_project_1.png" },
    { name: "Vinhome Ocean Park", image: "/home/homepage_project_2.png" },
    { name: "The Park Home", image: "/home/homepage_project_3.png" },
    { name: "Hoanh Son Complex", image: "/home/homepage_project_4.png" },
  ];

  return (
    <div className="pt-[68px] lg:pt-0">
      <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
        <h2 className="text-[36px] md:text-[42px] md:text-[56px] font-medium uppercase max-w-[400px]">Dự án nổi bật</h2>
        <div className="flex flex-col">
          <p className="text-sm sm:text-base mb-4 max-w-[500px]">Mỗi dự án là một hành trình sáng tạo, nơi Goox biến ý tưởng thành không gian sống trọn vẹn.</p>
          <button className="w-fit bg-primary text-white !font-medium px-4 py-2 flex items-center gap-2">
            Xem tất cả
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

        {/* Grid of project items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[30px]">
        {productData.map((x, idx) => (
          <Link href={"/projects"} key={idx} >
          <div className="flex flex-col gap-2 w-full">
            <div className="relative w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[350px] overflow-hidden group">
              <Image src={x.image} alt={x.name} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.1]" />
            </div>
            <p className="text-sm sm:text-base font-medium text-center">{x.name}</p>
          </div>
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlight;
