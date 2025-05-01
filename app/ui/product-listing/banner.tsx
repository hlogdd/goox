/** @format */

import Image from "next/image";
import AOSProvider from "../AOSProviders";

// components/Banner.tsx
export default function Banner() {
  return (
    <AOSProvider>
      <section className="relative w-full h-auto mb-[56px] 2xl:mb-[100px]">
        {/* Text content - center vertically in the image */}
        <div className="absolute inset-0 top-[128px]  text-center z-10 px-4" data-aos="fade-right" data-aos-delay="100">
          <h1 className="text-3xl sm:text-4xl md:text-[56px] font-bold mb-4">DANH MỤC SẢN PHẨM</h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">Khám phá bộ sưu tập nội thất đầy cảm hứng – hiện đại, tối giản và đậm chất riêng. Không ngừng đổi mới, chỉ dành cho bạn.</p>
        </div>

        {/* Image background */}
        <div className="relative w-full h-[1066px] ">
          <Image src="/product/product_banner_lg.png" alt="product banner" fill className="object-cover" priority />
        </div>
      </section>
    </AOSProvider>
  );
}
