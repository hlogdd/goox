/** @format */
"use client";

import React, { useEffect } from "react";
import Banner from "../ui/projects/Banner";
import Image from "next/image";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";

const Page = () => {
  useEffect(() => {
    removeInlineStylesFromMain();
  }, []);

  return (
    <div className="mb-6 clr-primary">
      <Banner />

      <section className="bg-white w-full px-8 py-16">
        <div className="section__container">
          {/* Phần đầu: tiêu đề bên trái - mô tả bên phải */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Cột trái */}
            <div className="space-y-6">
              <p className="text-sm font-medium text-gray-500 uppercase m-0">Tổng quan dự án</p>
              <h1 className="text-[56px] font-medium text-gray-900 leading-[56px]">
                MIPEC DUPLEX <br /> PENTHOUSE
              </h1>
              <div className="flex gap-8 text-sm text-gray-700">
                <div>
                  <p className="font-normal clr-primary">Thi công và thiết kế</p>
                  <p>GOOX</p>
                </div>
                <div>
                  <p className="font-medium">Năm</p>
                  <p>2024</p>
                </div>
              </div>
            </div>

            {/* Cột phải */}
            <div className="text-gray-700 text-base leading-relaxed">
              <p>Căn biệt thự Ánh Sáng là tổ ấm của một gia đình trẻ yêu sự tinh tế, tối giản nhưng không kém phần ấm cúng.</p>
              <p className="mt-4">
                Dự án là hành trình chuyển hóa một không gian cũ kỹ thành nơi chốn đầy cảm hứng, nơi ánh sáng, vật liệu tự nhiên và kiến trúc nội thất hòa quyện trong một nhịp sống mới.
              </p>
            </div>
          </div>

          {/* Ảnh bên dưới */}
          <div className="w-full overflow-hidden">
            <Image
              src="/projects/project_1.png" // Đổi thành ảnh bạn dùng
              alt="Kitchen"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="section__container">
          <div className="grid grid-cols-2 gap-[240px] py-[58px] px-[100px]">
            <div className="item flex flex-col gap-4 max-w-[400] mt-[86px]">
              <div className=" h-[450] relative">
                <Image src={"/projects/project_2.png"} fill alt="img" />
              </div>
              <p>Không gian tiếp khách được mở rộng hoàn toàn về phía vườn sau với hệ cửa kính toàn khung, nơi ánh sáng tràn ngập từ sáng sớm đến cuối ngày.</p>
            </div>

            <div className="item flex flex-col gap-4 max-w-[400]">
              <div className=" h-[450] relative">
                <Image src={"/projects/project_3.png"} fill alt="img" />
              </div>
              <p>Khu bếp nối liền phòng ăn là nơi phản chiếu đúng tinh thần “ít mà chất”. Tủ bếp làm từ gỗ sồi sơn mờ, mặt đá trắng vân mây và hệ đèn thả ánh vàng ấm</p>
            </div>
          </div>

          <div className="flex flex-wrap mb-[30px]">
            <div className="flex-1 w-full min-h-[600px] relative">
              <Image src={"/projects/project_5.png"} layout="fill" objectFit="cover" alt="img" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[30px] w-full min-h-[600px] mb-6">
            <div className="relative w-full h-[600px]">
              <Image src="/projects/project_6.png" fill alt="ảnh 1" className="object-cover" />
            </div>

            <div className="relative w-full h-[600px]">
              <Image src="/projects/project_7.png" fill alt="ảnh 2" className="object-cover" />
            </div>
          </div>

          <div className="flex gap-[30px] py-5">
            <div className="grid grid-cols-2 gap-[240px] py-[58px] px-[100px]">
              <div className="item flex flex-col gap-4 max-w-[400] mt-[86px]">
                <div className=" h-[450] relative">
                  <Image src={"/projects/project_2.png"} fill alt="img" />
                </div>
              </div>

              <div className="item flex flex-col gap-4 max-w-[400]">
                <div className=" h-[450] relative">
                  <Image src={"/projects/project_3.png"} fill alt="img" />
                </div>
                <p>
                  Nó là kết quả của một mối quan hệ sâu sắc giữa gia chủ và đội ngũ thiết kế, giữa nhu cầu sống và chất liệu không gian. Mỗi góc nhỏ đều mang tính chất riêng, nhưng vẫn kết nối hài hòa
                  trong tổng thể.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-[30px]">
            <div className="flex-1 w-full min-h-[600px] relative">
              <Image src={"/projects/project_5.png"} layout="fill" objectFit="cover" alt="img" />
            </div>
          </div>
        </div>
      </section>

      <ContactHome />
    </div>
  );
};

export default Page;
