/** @format */

"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { removeInlineStylesFromMain } from "../lib/function";
import ContactHome from "../ui/homepage/ContactHome";
import { GroupImage } from "../ui/blog/GroupImage";
import AOSProvider from "../ui/AOSProviders";

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
    <AOSProvider>
      <div className="max-w-[1240px] mx-auto mt-[80px] px-[16px] lg:px-0">
        <section className="mb-[32px] lg:mb-[56px] md:mb-[40px]">
          <div className="mx-auto max-w-[1240px]">
            {/* Breadcrumb */}
            <div className="text-xs md:text-sm text-gray-500 flex gap-[12px] mb-[20px]">
              <span className="text-[#9D9D9D]">Trang chủ</span> / <span className="text-[#9D9D9D]">Blog</span> / <span className="text-[#1D1D1D] font-normal">Phong cách thiết kế nội thất...</span>
            </div>

            {/* Tiêu đề + mô tả */}
            <h2 className="text-[32px] md:text-[40px] font-medium leading-[34px] md:leading-[42px] lg:leading-[40px] max-w-[600px]">PHONG CÁCH THIẾT KẾ NỘI THẤT SANG XỊN MỊN NHẤT NĂM 2025</h2>
            <p className="text-sm">16/06/2025</p>
          </div>
        </section>

        <div className="flex lg:flex-row gap-8 mb-[8px] lg:mb-[100px] md:mb-[48px]" data-aos="fade-up" data-aos-duration="1000">
          {/* Left nội dung */}
          <div className="w-full lg:w-[70%] flex flex-col">
            <div className="flex flex-col lg:flex-row mb-4 gap-4">
              <h3 className="text-[24px] md:text-[46px] lg:text-[56px] leading-[28px] lg:leading-[40px] lg:leading-[56px] flex-1">
                STORYTELLING <br /> ORGANICMODERN
              </h3>

              <div className="max-w-[320px] w-full h-[120px] relative">
                <Image src={"/blogs/blog_detail_01.png"} fill alt="img" className="object-cover" />
              </div>
            </div>

            <div className="w-full h-[200px] md:h-[363px] relative">
              <Image src={"/blogs/blog_detail_02.png"} fill alt="img" className="object-cover" />
            </div>

            <h3 className="text-[24px] lg:text-[56px] leading-[28px] lg:leading-[40px] lg:leading-[56px] mt-4 uppercase">
              ELEVATED SIMPLICITY <br /> Architectural furniture
            </h3>
          </div>

          {/* Right ảnh */}
          <div className="flex-1 w-full lg:w-[30%] relative">
            <div className="absolute inset-0">
              <Image src={"/blogs/blog_detail_03.png"} fill alt="img" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-b-[#B9B9B9] pb-6 lg:pb-16 flex-col lg:flex-row mb-[32px] lg:mb-[100px] md:mb-[48px]" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-full lg:max-w-[500px] w-full mb-2 lg:mb-8 lg:mb-0 lg:mr-[100px]">
            <h3 className="text-[26px] sm:text-[40px] font-bold mb-2 leading-[24px] lg:leading-[40px]">
              Gỗ organic & <br />
              những bề mặt thô mộc
            </h3>

            <p className="text-base sm:text-md">Không sơn phủ. Không bóng bẩy. Chỉ là vân gỗ thật – thô – tự nhiên – nguyên bản. Mỗi chiếc ghế như một mảnh rừng còn sót lại giữa lòng thành phố.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <GroupImage srcImage="/blogs/blog_detail_04.png" />
            <GroupImage srcImage="/blogs/blog_detail_05.png" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-[#B9B9B9] pb-6 lg:pb-16 mb-[32px] lg:mb-[100px] md:mb-[48px]" data-aos="fade-up" data-aos-duration="1000">
          {/* Left Section */}
          <div className="max-w-full lg:max-w-[500px] w-full lg:mr-[100px] mb-[24px]">
            <h3 className="text-[24px] sm:text-[40px] font-bold mb-2 leading-[28px] lg:leading-[46px] uppercase">
              Màu beige, đen mờ, và <br /> tone đất cháy
            </h3>

            <p className="text-base sm:text-lg">Bảng màu 2025 không phô trương. Nó gợi cảm giác ấm, trầm, và gần gũi như một làn khói cafe buổi sớm. Đẹp theo cách im lặng.</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-[20px] w-full flex-1">
            <div className="item text-[20px] sm:text-[28px] font-medium pb-4 border-b border-b-[#8F8F8F]">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
            <div className="item text-[20px] sm:text-[28px] font-medium pb-4 border-b border-b-[#8F8F8F]">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
            <div className="item text-[20px] sm:text-[28px] font-medium pb-4 border-b border-b-[#8F8F8F]">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
            <div className="item text-[20px] sm:text-[28px] font-medium pb-4 border-b border-b-[#8F8F8F]">CLAY - CẢM GIÁC CỦA NẮNG CHIỀU</div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-b border-b-[#B9B9B9] pb-6 lg:pb-16 mb-[60px]" data-aos="fade-up" data-aos-duration="1000">
          {/* Section with Title and Text */}
          <div className="flex flex-col lg:flex-row items-start sm:items-center justify-between w-full mb-[16px] lg:mb-[40px]">
            <h3 className="text-[24px] sm:text-[40px] font-bold mb-2 leading-[28px] lg:leading-[46px] sm:mr-4 max-w-full lg:max-w-[500px]">TỐI GIẢN, NHƯNG KHÔNG RỖNG TUẾCH</h3>

            <p className="text-base sm:text-md max-w-full lg:max-w-[400px] flex-1">
              Bảng màu 2025 không phô trương. Nó gợi cảm giác ấm, trầm, và gần gũi như một làn khói cafe buổi sớm. Đẹp theo cách im lặng.
            </p>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[6, 7, 8, 9].map((x, i) => (
              <div key={i}>
                <GroupImage srcImage={`/blogs/blog_detail_0${x}.png`} />
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-[#B9B9B9] pt-4 lg:pt-16 pb-[56px] lg:pb-[100px] mb-[32px] lg:mb-[100px] md:mb-[48px]" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-[1058px] mx-auto flex items-center justify-center relative h-[524px] px-4 relative">
            {/* Text bên trái */}
            <h3 className="absolute top-0 lg:top-1/2 -translate-y-1/2 left-0 text-[24px] sm:text-[40px] font-medium leading-[28px] lg:leading-[46px] max-w-[420px] z-11">
              Tất cả mềm mại như
              <br />
              một dòng chảy.
            </h3>

            {/* Khối hình ảnh */}
            <div className="relative w-[412px] h-[524px]">
              {/* Layer background - z-0 */}
              <div className="absolute top-1/2 -translate-1/2 left-1/2 inset-0 z-0 max-w-full lg:max-w-[628px] w-[full] h-[612px]">
                <Image src="/blogs/blog_layer_bg.png" alt="background" fill className="object-cover" />
              </div>

              {/* Ảnh chính - z-10 */}
              <div className="absolute inset-0 z-10">
                <Image src="/blogs/blog_detail_10.png" alt="middle" fill className="object-cover" />
              </div>
            </div>

            {/* Text bên phải */}
            <h3 className="absolute top-full lg:top-1/2 -translate-y-1/2 right-0 text-[24px] sm:text-[40px] font-medium leading-[28px] lg:leading-[46px] max-w-[420px] text-left z-11">
              Gợi nhắc về cơ thể –<br />
              về chuyển động – về
              <br />
              sự sống.
            </h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-[#B9B9B9] pb-6 lg:pb-16 mb-[32px] lg:mb-[100px] md:mb-[48px]" data-aos="fade-up" data-aos-duration="1000">
          {/* Text Content */}
          <div className="max-w-full lg:max-w-[500px] w-full mb-2 lg:mb-8 lg:mb-0 lg:mr-[100px]">
            <h3 className="text-[28px] sm:text-[24px] lg:text-[40px] font-medium mb-2 leading-[24px] lg:leading-[40px]">MÀU CỦA CẢM XÚC TĨNH</h3>
            <p className="text-sm sm:text-base lg:text-md">
              Beige không buồn. Đen không lạnh. Khi được đặt đúng chỗ, chúng gợi nên sự tĩnh tại rất thật. Nội thất cũng có thể dịu dàng, không cần lên tiếng.
            </p>
          </div>

          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <GroupImage srcImage="/blogs/blog_detail_11.png" />
            <GroupImage srcImage="/blogs/blog_detail_12.png" />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto pb-6 lg:pb-16 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-3xl sm:text-[56px] font-bold">BÀI VIẾT</h2>
            <a href="#" className="text-base font-medium flex items-center gap-2">
              Xem tất cả
              <Image src="/product/icon_arrow_up_black.svg" alt="icon" width={20} height={20} className="object-contain sepia-0" />
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
            <div className="max-w-full lg:max-w-[400px] w-full lg:w-1/2 mb-8 lg:mb-0">
              {/* List of posts */}
              <div className="space-y-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border-b border-[#8f8f8f] pb-4">
                    <p className="text-sm text-[#999] mb-1">11/04/2025</p>
                    <div className="flex justify-between items-center">
                      <p className="text-base font-medium max-w-[80%] text-black leading-[18px]">Gỗ Tần Bì Và Gỗ Sồi Làm Ghế Có Tốt Không? So Sánh Chi Tiết</p>
                      <span className="text-lg">
                        <Image src="/product/icon_arrow_up_black.svg" alt="icon" width={20} height={20} className="object-contain sepia-0" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Featured Images */}
            <div className="w-full flex flex-col sm:flex-row gap-4">
              {["/blogs/blog_detail_13.png", "/blogs/blog_detail_14.png"].map((src, idx) => (
                <div key={idx} className="w-full sm:w-1/2 aspect-[3/4] relative">
                  <Image src={src} alt="sample" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="section h-screen bg-[#EEEBE5] ">
        <div className="section__container h-full flex items-center">
          <ContactHome />
        </div>
      </section>
    </AOSProvider>
  );
};

export default Page;
