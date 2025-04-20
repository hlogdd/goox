import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/projects/banner.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Mipec Duplex Penthouse
      </h2>
    </section>
  );
};

export default Banner;
