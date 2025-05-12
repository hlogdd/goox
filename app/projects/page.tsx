/** @format */
"use client";

import React, { useEffect } from "react";
import Banner from "../ui/projects/Banner";
import Image from "next/image";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";
import AOSProvider from "../ui/AOSProviders";

const Page = () => {
  useEffect(() => {
    removeInlineStylesFromMain();
  }, []);

  return (
    <AOSProvider>
      <div className="mb-6 clr-primary overflow-x-hidden">
        <Banner />

        <section className="w-full px-[0px] lg:px-8 pt-[32px] lg:py-16">
          <div className="section__container">
            {/* Phần đầu: tiêu đề bên trái - mô tả bên phải */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 lg:mb-12">
              {/* Cột trái */}
              <div className="space-y-6" data-aos="fade-right">
                <p className="text-sm font-medium text-gray-500 uppercase m-0">Tổng quan dự án</p>
                <h1 className="text-[36px] md:text-[56px] font-medium text-gray-900 leading-tight md:leading-[56px]" >
                  MIPEC DUPLEX <br /> PENTHOUSE
                </h1>
                <div className="flex gap-8 text-sm text-gray-700">
                  <div>
                    <p className="text-sm font-normal clr-primary">Thi công và thiết kế</p>
                    <p className="text-md font-bold text-[#0F2927]">GOOX</p>
                  </div>
                  <div>
                    <p className="text-sm font-normal clr-primary">Năm</p>
                    <p className="text-md font-bold text-[#0F2927]">2024</p>
                  </div>
                </div>
              </div>

              {/* Cột phải */}
              <div className="text-md " data-aos="fade-left" data-aos-delay="200">
                <p>Căn biệt thự Ánh Sáng là tổ ấm của một gia đình trẻ yêu sự tinh tế, tối giản nhưng không kém phần ấm cúng.</p>
                <p className="mt-4">
                  Dự án là hành trình chuyển hóa một không gian cũ kỹ thành nơi chốn đầy cảm hứng, nơi ánh sáng, vật liệu tự nhiên và kiến trúc nội thất hòa quyện trong một nhịp sống mới.
                </p>
              </div>
            </div>

            {/* Ảnh bên dưới */}
            <div className="w-full overflow-hidden max-w-[1600px] h-[450px] lg:h-[900px] relative" data-aos="fade-up" data-aos-delay="300">
              <Image
                src="/projects/project_1.png"
                alt="Kitchen"
                fill
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="section__container">
            {/* Phần đầu: Grid 2 cột */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 gap-[16px] lg:gap-[56px] lg:gap-[240px] md:gap-[32px] py-4 lg:py-12 lg:py-[58px] md:py-[28px] px-0 lg:px-[100px] md:px-[0px]">
              <div 
                className="item flex flex-col gap-4 max-w-[400px] mt-0 lg:mt-[86px]" 
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="h-[320px] lg:h-[450px] relative">
                  <Image src={"/projects/project_2.png"} fill alt="img" />
                </div>
                <p>Không gian tiếp khách được mở rộng hoàn toàn về phía vườn sau với hệ cửa kính toàn khung, nơi ánh sáng tràn ngập từ sáng sớm đến cuối ngày.</p>
              </div>

              <div 
                className="item flex flex-col gap-4 max-w-[400px]" 
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="h-[320px] lg:h-[450px] relative">
                  <Image src={"/projects/project_3.png"} fill alt="img" />
                </div>
                <p>Khu bếp nối liền phòng ăn là nơi phản chiếu đúng tinh thần &quot;ít mà chất&quot;. Tủ bếp làm từ gỗ sồi sơn mờ, mặt đá trắng vân mây và hệ đèn thả ánh vàng ấm</p>
              </div>
            </div>

            {/* Ảnh bên dưới */}
            <div className="flex flex-wrap mb-[12px] lg:mb-[30px]" data-aos="fade-up">
              <div className="flex-1 w-full min-h-[600px] relative">
                <Image src={"/projects/project_5.png"} layout="fill" objectFit="cover" alt="img" />
              </div>
            </div>

            {/* Phần Grid 2 cột cho các ảnh */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-h-[600px] mb-6">
              <div 
                className="relative w-full h-[600px]" 
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Image src="/projects/project_6.png" fill alt="ảnh 1" className="object-cover" />
              </div>

              <div 
                className="relative w-full h-[600px]" 
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <Image src="/projects/project_7.png" fill alt="ảnh 2" className="object-cover" />
              </div>
            </div>

            {/* Phần Grid 2 cột khác */}
            <div className="flex flex-wrap mb-[12px] lg:mb-[30px]">
              <div className="flex flex-wrap justify-center gap-8 gap-[16px] lg:gap-[56px] lg:gap-[240px] md:gap-[32px] py-0 lg:py-4 lg:py-12 lg:py-[58px] md:py-[28px] w-full px-0 lg:px-[100px] md:px-[0px]">
                <div 
                  className="item flex flex-col gap-4 w-full max-w-[400px] mt-0 md:mt-[86px]" 
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="h-[320px] lg:h-[450px] relative">
                    <Image src={"/projects/project_2.png"} fill alt="img" />
                  </div>
                </div>

                <div 
                  className="item flex flex-col gap-4 max-w-[400px]" 
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="h-[320px] lg:h-[450px] relative">
                    <Image src={"/projects/project_3.png"} fill alt="img" />
                  </div>
                  <p>
                    Nó là kết quả của một mối quan hệ sâu sắc giữa gia chủ và đội ngũ thiết kế, giữa nhu cầu sống và chất liệu không gian. Mỗi góc nhỏ đều mang tính chất riêng, nhưng vẫn kết nối hài hòa
                    trong tổng thể.
                  </p>
                </div>
              </div>
            </div>

            {/* Ảnh cuối */}
            <div 
              className="flex flex-wrap mb-[12px] lg:mb-[30px]" 
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="flex-1 w-full min-h-[600px] relative">
                <Image src={"/projects/project_5.png"} layout="fill" objectFit="cover" alt="img" />
              </div>
            </div>
          </div>
        </section>

        <section className="section h-screen bg-[#EEEBE5] ">
        <div className="section__container h-full flex items-center">
          <ContactHome />
        </div>
      </section>
      </div>
    </AOSProvider>
  );
};

export default Page;