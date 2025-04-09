import Image from "next/image";

// components/Banner.tsx
export default function Banner() {
    return (
      <section className="w-full h-auto bg-white py-12 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">DANH MỤC SẢN PHẨM</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Khám phá bộ sưu tập nội thất đầy cảm hứng – hiện đại, tối giản và đậm chất riêng. Không ngừng đổi mới, chỉ dành cho bạn.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Giả lập hình ảnh sản phẩm */}
          <Image src={'/product/product-banner.png'} alt="product banner" width={1480} height={800} />
        </div>
      </section>
    );
  }
  