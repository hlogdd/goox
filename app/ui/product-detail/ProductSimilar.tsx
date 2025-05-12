/** @format */

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const productData = [
  { name: "Danh mục 1", image: "/product/product_sp_1.png" },
  { name: "Danh mục 2", image: "/product/product_sp_2.png" },
  { name: "Danh mục 3", image: "/product/product_sp_3.png" },
  { name: "Danh mục 4", image: "/product/product_sp_4.png" },
  { name: "Danh mục 5", image: "/product/product_sp_5.png" },
  { name: "Danh mục 6", image: "/product/product_sp_6.png" },
  { name: "Danh mục 6", image: "/product/product_sp_6.png" },
  { name: "Danh mục 6", image: "/product/product_sp_6.png" },
];

export default function ProductSimilar() {
  return (
    <div className="py-6 mt-12">
      <h2 className="text-[36px] md:text-[42px] lg:text-[56px] font-medium uppercase text-center mb-[40px] text-[#061D1B]">Danh mục sản phẩm</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        loop
        navigation={false}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 2.2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 3.5 },
          1536: { slidesPerView: 4 },
          1600: { slidesPerView: 5 },
          1920: { slidesPerView: 5.5 },
        }}
        className="w-full">
        {productData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="w-full relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden group">
                <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.1]" />
              </div>
              <div className="text-sm sm:text-base text-center p-3 font-medium">{item.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
