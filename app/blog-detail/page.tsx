/** @format */

"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { removeInlineStylesFromMain } from "../lib/function";
import ContactHome from "../ui/homepage/ContactHome";

const Page = () => {
  useEffect(() => {
    removeInlineStylesFromMain();

    // Chạy 1 lần duy nhất khi component được render lần đầu
    console.log("Chạy một lần duy nhất");

    // Optional: cleanup function
    return () => {
      console.log("Component bị unmount");
    };
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto px-3 mt-12">
      <section className="py-8 md:py-16">
        <div className="mx-auto px-4 max-w-[1240px]">
          {/* Breadcrumb */}
          <div className="text-xs md:text-sm text-gray-500 mb-2">
            <span className="text-gray-400">Trang chủ</span> / <span className="text-black font-medium">Blog</span> / <span className="text-black font-medium">Phong cách thiết kế nội thất...</span>
          </div>

          {/* Tiêu đề + mô tả */}
          <h2 className="text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-tight mb-2">PHONG CÁCH THIẾT KẾ NỘI THẤT SANG XỊN MỊN NHẤT NĂM 2025</h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base max-w-3xl">16/06/2025</p>
        </div>
      </section>

      <div className="space-y-16 font-sans mb-[80px]">
        <div className="flex flex-col lg:flex-row border-b border-b-[#B9B9B9] gap-8">
          {/* Left nội dung */}
          <div className="w-full lg:w-[70%] pr-4">
            <div className="flex flex-col lg:flex-row mb-4 gap-4">
              <h3 className="text-[36px] lg:text-[56px] leading-[40px] lg:leading-[56px] flex-1">
                STORYTELLING <br /> ORGANICMODERN
              </h3>

              <div className="max-w-[320px] w-full h-[120px] relative">
                <Image src={"/blogs/02.png"} fill alt="img" className="object-cover" />
              </div>
            </div>

            <div className="w-full h-[200px] md:h-[363px] relative">
              <Image src={"/blogs/04.png"} fill alt="img" className="object-cover" />
            </div>

            <h3 className="text-[36px] lg:text-[56px] leading-[40px] lg:leading-[56px] mt-4">
              STORYTELLING <br /> ORGANICMODERN
            </h3>
          </div>

          {/* Right ảnh */}
          <div className="w-full lg:w-[30%] h-[300px] lg:h-[524px] relative">
            <Image src={"/blogs/banner_1.png"} fill alt="img" className="object-cover" />
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-b-[#B9B9B9] pb-16 flex-col lg:flex-row">
          <div className="max-w-[500px] w-full mb-8 lg:mb-0 lg:mr-[100px]">
            <h3 className="text-[32px] sm:text-[40px] font-bold mb-2 leading-[40px]">
              Gỗ organic & <br />
              những bề mặt thô mộc
            </h3>

            <p className="text-base sm:text-lg">Không sơn phủ. Không bóng bẩy. Chỉ là vân gỗ thật – thô – tự nhiên – nguyên bản. Mỗi chiếc ghế như một mảnh rừng còn sót lại giữa lòng thành phố.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[385px] relative">
              <Image src={"/blogs/02.png"} fill alt="img" className="object-contain" />
            </div>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[385px] relative">
              <Image src={"/blogs/02.png"} fill alt="img" className="object-contain" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between border-b border-b-[#B9B9B9] pb-16">
          {/* Left Section */}
          <div className="max-w-[500px] w-full lg:mr-[100px] mb-8 lg:mb-0">
            <h3 className="text-[32px] sm:text-[40px] font-bold mb-2 leading-[40px]">
              Màu beige, đen mờ, và <br /> tone đất cháy
            </h3>

            <p className="text-base sm:text-lg">Bảng màu 2025 không phô trương. Nó gợi cảm giác ấm, trầm, và gần gũi như một làn khói cafe buổi sớm. Đẹp theo cách im lặng.</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="item text-[24px] sm:text-[28px] font-medium py-8 border-b border-b-[#8F8F8F]">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
            <div className="item text-[24px] sm:text-[28px] font-medium py-8 border-b border-b-[#8F8F8F]">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
            <div className="item text-[24px] sm:text-[28px] font-medium py-8 border-b border-b-[#8F8F8F]">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
            <div className="item text-[24px] sm:text-[28px] font-medium py-8">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-b border-b-[#B9B9B9] pb-16">
          {/* Section with Title and Text */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full mb-[40px]">
            <h3 className="text-[32px] sm:text-[40px] font-bold mb-2 leading-[40px] sm:mr-4">TỐI GIẢN, NHƯNG KHÔNG RỖNG TUẾCH</h3>

            <p className="text-base sm:text-lg sm:max-w-[400px]">Bảng màu 2025 không phô trương. Nó gợi cảm giác ấm, trầm, và gần gũi như một làn khói cafe buổi sớm. Đẹp theo cách im lặng.</p>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-full h-[250px] sm:h-[300px] md:h-[385px] relative">
                <Image src="/blogs/banner_1.png" fill alt="img" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative border-b border-b-[#B9B9B9] pb-16">
          <div className="relative h-[524px] max-w-[1058px] w-full mx-auto">
            {/* Ảnh trung tâm */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <div className="relative w-full h-full max-w-[415px]">
                <Image src="/blogs/banner_1.png" alt="middle" fill className="object-cover" />
              </div>
            </div>

            {/* Text trái */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 max-w-[300px] px-4 z-10 text-black text-xl font-medium text-right sm:text-lg">
              Tất cả mềm mại như
              <br />
              một dòng chảy.
            </div>

            {/* Text phải */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-[300px] px-4 z-10 text-black text-xl font-medium text-left sm:text-lg">
              Gợi nhắc về cơ thể –<br />
              về chuyển động – về
              <br />
              sự sống.
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-[#B9B9B9] pb-16">
          {/* Text Content */}
          <div className="max-w-[500px] w-full mb-8 lg:mb-0 lg:mr-[100px]">
            <h3 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold mb-2 leading-[40px]">MÀU CỦA CẢM XÚC TĨNH</h3>
            <p className="text-sm sm:text-base lg:text-lg">
              Beige không buồn. Đen không lạnh. Khi được đặt đúng chỗ, chúng gợi nên sự tĩnh tại rất thật. Nội thất cũng có thể dịu dàng, không cần lên tiếng.
            </p>
          </div>

          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full flex-1">
            <div className="w-full sm:w-[50%] h-[250px] sm:h-[385px] lg:h-[450px] relative">
              <Image src={"/blogs/02.png"} alt="img" layout="fill" objectFit="cover" />
            </div>
            <div className="w-full sm:w-[50%] h-[250px] sm:h-[385px] lg:h-[450px] relative">
              <Image src={"/blogs/02.png"} alt="img" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto py-16 border-b border-[#DCDCDC]">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold">BÀI VIẾT</h2>
                <a href="#" className="text-base font-medium flex items-center gap-2">
                  Xem tất cả
                  <span>→</span>
                </a>
              </div>

              {/* List of posts */}
              <div className="space-y-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border-b border-[#B9B9B9] pb-4">
                    <p className="text-sm text-[#999] mb-1">11/04/2025</p>
                    <div className="flex justify-between items-center">
                      <p className="text-base font-medium max-w-[80%]">Gỗ Tần Bì Và Gỗ Sồi Làm Ghế Có Tốt Không? So Sánh Chi Tiết</p>
                      <span className="text-lg">↗</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Featured Images */}
            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
              {["/blogs/01.png", "/blogs/02.png"].map((src, idx) => (
                <div key={idx} className="w-full sm:w-1/2 aspect-[3/4] relative">
                  <Image src={src} alt="sample" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContactHome />
      </div>
    </div>
  );
};

export default Page;
