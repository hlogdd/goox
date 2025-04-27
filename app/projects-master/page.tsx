"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper"; // 👈 Swiper Core instance
import type { SwiperRef } from "swiper/react"; // 👈 SwiperRef wrapper
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/projects/project_bg_1.png",
    title: "MINIMALISM",
    description: "Phong cách tối giản với đường nét gọn gàng và không gian mở",
  },
  {
    id: 2,
    image: "/projects/project_bg_2.png",
    title: "CLASSIC / NEOCLASSIC",
    description: "Vẻ đẹp cổ điển kết hợp với nét hiện đại",
  },
  {
    id: 3,
    image: "/projects/project_bg_3.png",
    title: "MODERN",
    description: "Phong cách hiện đại với vật liệu mới và công năng tối ưu",
  },
  {
    id: 4,
    image: "/projects/project_bg_4.png",
    title: "MINIMALISM",
    description: "Phong cách tối giản với đường nét gọn gàng và không gian mở",
  },
  {
    id: 5,
    image: "/projects/project_bg_5.png",
    title: "CLASSIC / NEOCLASSIC",
    description: "Vẻ đẹp cổ điển kết hợp với nét hiện đại",
  },
];

export default function VerticalImageSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<SwiperRef>(null); // 👈 Đây nè!

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="section h-screen">
      <div className="section__container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left side */}
          <div className="w-full max-w-[400px] h-full flex flex-col pb-12">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-[56px] leading-[56px] font-medium">
                {slides[activeIndex].title}
              </h2>
            </div>

            {/* Pagination buttons */}
            <div className="flex flex-col gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.id}-${index}`}
                  className={`px-4 text-left text-md transition-all ${
                    index === activeIndex ? "text-[#0F2927] font-medium" : "text-[#939D9C]"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.swiper.slideToLoop(index); // 👈 Phải .swiper mới đúng!
                  }}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="w-full h-full">
            <Swiper
              ref={swiperRef}
              direction="vertical"
              speed={800}
              spaceBetween={0}
              slidesPerView={1.5}
              centeredSlides
              loop
              onSlideChange={handleSlideChange}
              className="h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={`${slide.id}-${index}`}>
                  <Link href="/projects">
                    <div className="w-full h-full relative transition-transform duration-300">
                      <Image
                        src={slide.image}
                        fill
                        alt={slide.title}
                        className={`object-cover transition-all duration-300 ${
                          index === activeIndex ? "scale-100" : "scale-75"
                        }`}
                        priority={index === activeIndex}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
