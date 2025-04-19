/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  image: string;
};

type Props = {
  title: string;
  products: Product[];
};

export default function ProductSlider({ title, products }: Props) {
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const calculateProgress = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const totalSlides = swiper.slides.length;
    let slidesPerView = 1;

    // Xử lý slidesPerView theo responsive breakpoints
    if (typeof swiper.params.slidesPerView === "number") {
      slidesPerView = swiper.params.slidesPerView;
    } else if (swiper.params.breakpoints) {
      const currentWidth = window.innerWidth;
      const breakpoints = swiper.params.breakpoints;
      const matched = Object.keys(breakpoints)
        .map(Number)
        .filter((bp) => bp <= currentWidth)
        .sort((a, b) => b - a)[0];
      slidesPerView = typeof breakpoints[matched]?.slidesPerView === "number" ? breakpoints[matched].slidesPerView : 1;
    }

    const maxIndex = totalSlides - slidesPerView;
    const current = swiper.activeIndex;
    const percent = Math.min((current / maxIndex) * 100, 100);
    setProgress(percent);
  };

  useEffect(() => {
    // Recalculate on resize to keep it responsive
    const handleResize = () => {
      setTimeout(calculateProgress, 300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
        }}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          calculateProgress(); // Tính lúc đầu
        }}
        onSlideChange={calculateProgress}
        className="!pb-10">
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg border-4 border-transparent hover:border-blue-400 transition">
              <Link href="/product-detail" className="text-2xl font-bold text-gray-900">
                <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-auto object-cover rounded-md" />
              </Link>
 
              <p className="text-center mt-2 text-sm font-medium text-neutral-800">{product.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom progress bar */}
      <div className="mt-[-22px] w-lg h-[4px] bg-neutral-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#00332E] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}
