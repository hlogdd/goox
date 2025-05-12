/** @format */

"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { Mousewheel } from "swiper/modules";

const projects = [
  {
    key: 1,
    title: "Dự án G",
    parts: [
      { id: 1, image: "/projects/project_bg_1.png", description: "MINIMALISM" },
      { id: 2, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 3, image: "/projects/project_bg_3.png", description: "JAPANDI" },
      { id: 4, image: "/projects/project_bg_3.png", description: "CONTEMPORARY" },
      { id: 1, image: "/projects/project_bg_1.png", description: "MINIMALISM" },
      { id: 2, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 3, image: "/projects/project_bg_3.png", description: "JAPANDI" },
      { id: 4, image: "/projects/project_bg_3.png", description: "CONTEMPORARY" },
    ],
  },
  {
    key: 2,
    title: "Dự án O",
    parts: [
      { id: 1, image: "/projects/project_bg_1.png", description: "MINIMALISM" },
      { id: 2, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 3, image: "/projects/project_bg_2.png", description: "MODERN" },
      { id: 1, image: "/projects/project_bg_1.png", description: "MINIMALISM" },
      { id: 2, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 3, image: "/projects/project_bg_2.png", description: "MODERN" },
      { id: 1, image: "/projects/project_bg_1.png", description: "MINIMALISM" },
      { id: 2, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 3, image: "/projects/project_bg_2.png", description: "MODERN" },
    ],
  },
  {
    key: 3,
    title: "Dự án O",
    parts: [
      { id: 1, image: "/projects/project_bg_3.png", description: "JAPANDI" },
      { id: 2, image: "/projects/project_bg_3.png", description: "CONTEMPORARY" },
      { id: 3, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 4, image: "/projects/project_bg_2.png", description: "MODERN" },
      { id: 1, image: "/projects/project_bg_3.png", description: "JAPANDI" },
      { id: 2, image: "/projects/project_bg_3.png", description: "CONTEMPORARY" },
      { id: 3, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 4, image: "/projects/project_bg_2.png", description: "MODERN" },
    ],
  },
  {
    key: 4,
    title: "Dự án X",
    parts: [
      { id: 1, image: "/projects/project_bg_3.png", description: "RUSTIC" },
      { id: 2, image: "/projects/project_bg_3.png", description: "INDUSTRIAL" },
      { id: 3, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 4, image: "/projects/project_bg_2.png", description: "MODERN" },
      { id: 1, image: "/projects/project_bg_3.png", description: "RUSTIC" },
      { id: 2, image: "/projects/project_bg_3.png", description: "INDUSTRIAL" },
      { id: 3, image: "/projects/project_bg_4.png", description: "CLASSIC / NEOCLASSIC" },
      { id: 4, image: "/projects/project_bg_2.png", description: "MODERN" },
    ],
  },
];

export default function VerticalImageSlider() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0); // index of project in array
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // index in parts
  const swiperRef = useRef<SwiperRef>(null);

  const currentProject = projects[activeProjectIndex];
  const slides = currentProject.parts;

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  // Reset slide index when switching projects
  useEffect(() => {
    setActiveSlideIndex(0);
    swiperRef.current?.swiper?.slideToLoop(0);
  }, [activeProjectIndex]);

  return (
    <section className="section h-screen">
      <div className="section__container mx-auto px-4 h-full">
        <div className="flex lg:flex-row gap-8 h-full">
          {/* Left side */}
          <div className="w-full max-w-[110px] md:max-w-[220px] lg:max-w-[400px] h-full flex flex-col">
            <div className="flex-1 flex flex-col justify-center relative">
              <h2 className="text-[24px] md:text-[28px] lg:text-[56px] leading-[28px] lg:leading-[56px] font-medium ">{slides[activeSlideIndex]?.description || ""}</h2>

              {/* Pagination buttons */}
              <div className="flex flex-col gap-2 absolute bottom-[32px]">
                {projects.map((project, index) => (
                  <button
                    key={project.key}
                    className={`px-4 text-left text-md transition-all ${index === activeProjectIndex ? "text-[#0F2927] font-medium" : "text-[#939D9C]"}`}
                    onClick={() => {
                      setActiveProjectIndex(index);
                    }}>
                    {project.title}
                  </button>
                ))}
              </div>
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
              breakpoints={{
                0: { slidesPerView: 4.5 },
                480: { slidesPerView: 6.5 },
                640: { slidesPerView: 5.5 },
                768: { slidesPerView: 4.5 },
                1024: { slidesPerView: 1.5 },
                1280: { slidesPerView: 1.5 },
                1536: { slidesPerView: 1.5 },
              }}
              modules={[Mousewheel]}
              mousewheel={{ forceToAxis: true }}
              centeredSlides
              loop
              onSlideChange={handleSlideChange}
              className="h-full">
              {slides.map((slide, index) => (
                <SwiperSlide key={`${slide.id}-${index}`}>
                  <Link href="/projects">
                    <div className="w-full h-full relative transition-transform duration-300">
                      <Image
                        src={slide.image}
                        fill
                        alt={slide.description}
                        className={`object-cover transition-all duration-300 ${index === activeSlideIndex ? "scale-100" : "scale-85 lg:scale-75"}`}
                        priority={index === activeSlideIndex}
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
