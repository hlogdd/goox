// components/ProductSlider.tsx
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
];

export default function ProductList() {
  return (
    <div className="py-6 px-4">
      <h2 className="text-[56px] font-medium uppercase text-center mb-8">Danh mục sản phẩm</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        navigation={false}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
          1280: { slidesPerView: 5.5 },
          1536: { slidesPerView: 6 },
          1920: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {productData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" overflow-hidden">
              <Image src={item.image} alt={item.name} width={190} height={250} className="w-full object-contain" />
              <div className="text-md text-center p-4 font-medium">{item.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
