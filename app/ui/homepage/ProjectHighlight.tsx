/** @format */

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
    <div>
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-[56px] font-medium mb-6 uppercase max-w-[400px] leading-18">Dự án nổi bật</h2>
        <div className="flex flex-col">
          <p className="text-sm italic mb-6 max-w-[500px]">"Mỗi dự án là một hành trình sáng tạo, nơi Goox biến ý tưởng thành không gian sống trọn vẹn. </p>
          <button className="max-w-[160px] bg-[#061D1B] !text-white p-2">Xem tất cả</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[30px]">
        {productData.map((x, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="max-w-[605px] h-[320px] relative">
              <Image src={x.image} alt="img" fill className="object-cover" />
            </div>
            <p>{x.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlight;
