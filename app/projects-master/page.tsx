/** @format */

// components/VerticalImageSlider.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
  const [windowHeight, setWindowHeight] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="section h-screen">
      <div className="section__container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left side - Description */}
          <div className="w-full max-w-[400px] h-full flex flex-col pb-12">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-[56px] leading-[56px] font-medium">{slides[activeIndex].title}</h2>
            </div>

            {/* Pagination dots - Vertical */}
            <div className="flex flex-col gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.id}-${index}`}
                  className={`px-4 text-left text-md transition-all ${index === activeIndex ? "text-[#0F2927] font-medium" : "text-[#939D9C]"}`}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.swiper.slideTo(index);
                  }}>
                  {slide.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Vertical Image Slider */}
          <div className="w-full h-full">
            <Swiper
              ref={swiperRef}
              direction="vertical"
              modules={[]}
              effect="creative"
              creativeEffect={{
                prev: {
                  translate: [0, "-20%", 0],
                  scale: 0.8,
                  opacity: 0.6,
                },
                next: {
                  translate: [0, "20%", 0],
                  scale: 0.8,
                  opacity: 0.6,
                },
              }}
              speed={800}
              spaceBetween={0}
              slidesPerView={1.5}
              centeredSlides={true}
              loop={true}
              onSlideChange={handleSlideChange}
              className="h-full">
              {slides.map((slide, index) => (
                <SwiperSlide key={`${slide.id}-${index}`}>
                  <Link href={"/projects"}>
                    <div className="w-full h-full relative transition-transform duration-300">
                      <Image
                        src={slide.image}
                        fill
                        alt={slide.title}
                        className={`object-cover transition-all duration-300 ${index === activeIndex ? "scale-100" : "scale-75"}`}
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
