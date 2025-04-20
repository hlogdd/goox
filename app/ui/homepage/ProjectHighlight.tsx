"use client";

import Image from "next/image";
import React from "react";

const ProjectHighlight = () => {
  const productData = [
    { name: "The nine apartment", image: "/home/homepage_project_1.png" },
    { name: "Vinhome Ocean Park", image: "/home/homepage_project_2.png" },
    { name: "The Park Home", image: "/home/homepage_project_3.png" },
    { name: "Hoanh Son Complex", image: "/home/homepage_project_4.png" },
  ];

  return (
    <div className="px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
        <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-medium uppercase max-w-[400px] leading-tight">
          Dự án nổi bật
        </h2>
        <div className="flex flex-col">
          <p className="text-sm sm:text-base italic mb-4 max-w-[500px]">
            Mỗi dự án là một hành trình sáng tạo, nơi Goox biến ý tưởng thành không gian sống trọn vẹn.
          </p>
          <button className="w-fit bg-[#061D1B] text-white !font-medium px-4 py-2">
            Xem tất cả
          </button>
        </div>
      </div>

      {/* Grid of project items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {productData.map((x, idx) => (
          <div key={idx} className="flex flex-col gap-2 w-full">
            <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[320px]">
              <Image
                src={x.image}
                alt={x.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="text-sm sm:text-base font-medium text-center">{x.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlight;
