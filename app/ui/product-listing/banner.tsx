/** @format */

import Image from "next/image";

// components/Banner.tsx
export default function Banner() {
  return (
    <section className="relative w-full h-auto">
      {/* Text content - center vertically in the image */}
      <div className="absolute inset-0 top-1/2 transform -translate-y-1/2 text-center z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          DANH MỤC SẢN PHẨM
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Khám phá bộ sưu tập nội thất đầy cảm hứng – hiện đại, tối giản và đậm chất riêng. Không ngừng đổi mới, chỉ dành cho bạn.
        </p>
      </div>

      {/* Image background */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[800px]">
        <Image
          src="/product/product-banner.png"
          alt="product banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
