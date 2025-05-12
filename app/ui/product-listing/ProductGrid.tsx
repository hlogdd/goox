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

  // Calculate the progress for the progress bar
  const calculateProgress = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const totalSlides = swiper.slides.length;
    const slidesPerView = swiper.params.slidesPerView as number;
    const maxIndex = totalSlides - slidesPerView;
    const current = swiper.activeIndex;
    const percent = Math.min((current / maxIndex) * 100, 100);
    setProgress(percent);
  };

  useEffect(() => {
    // Recalculate progress bar on resize (debounced to reduce excessive recalculations)
    const handleResize = () => {
      setTimeout(() => {
        calculateProgress();
      }, 300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pl-[32px] lg:pl-[100px] mb-[56px] lg:mb-[100px]">
      <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-6">{title}</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4.5 },
          1224: { slidesPerView: 5.2 },
          1536: { slidesPerView: 5.5 },
          1780: { slidesPerView: 6.2 },
          1920: { slidesPerView: 6.5 },
        }}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          calculateProgress(); // Initialize progress when swiper is set up
        }}
        onSlideChange={calculateProgress} // Recalculate progress on slide change
        className="!pb-10">
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border-transparent hover:border-blue-400 transition">
              <Link href="/product-detail" className="flex max-w-full lg:max-w-[288px] h-[350px] relative">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </Link>
              <p className="text-center mt-2 text-md font-medium text-[#414141]">{product.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom progress bar */}
      <div className="mt-[-22px] max-w-[500px] w-full h-[4px] bg-neutral-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#00332E] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}
