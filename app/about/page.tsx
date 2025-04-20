/** @format */

"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Accordion from "../ui/homepage/Accordion";
import ProductList from "../ui/homepage/ProductList";
import ProjectHighlight from "../ui/homepage/ProjectHighlight";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";

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
    <div className="py-[80px]">
      <div className="section">
        <div className="section__container">
          {/* Tiêu đề và mô tả */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <h2 className="leading-snug uppercase text-xl md:text-3xl lg:text-4xl md:max-w-[45%]">Chúng tôi đã tạo ra hơn 700 thiết kế nội thất gỗ độc bản</h2>
            <div className="space-y-6 md:max-w-[50%]">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Chúng tôi là một đội ngũ thiết kế và thi công đầy đam mê, chuyên tạo nên những không gian sống và làm việc chuẩn thẩm mỹ, tối ưu công năng. Goox đặc biệt chú trọng vào chất liệu gỗ tự
                nhiên, chi tiết thủ công và sự hài hoà trong tổng thể – tạo nên những công trình bền vững, mang dấu ấn riêng biệt.
              </p>
              <button className="px-5 py-3 !text-white !font-bold transition-all flex items-center gap-2 w-fit bg-primary">
                Về Goox
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thống kê */}
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6 md:gap-8 mt-10 pt-8">
            <div>
              <h3 className="text-5xl md:text-[110px] font-bold">10+</h3>
              <p className="text-sm md:text-md mt-2">Năm kinh nghiệm sản xuất</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-[110px] font-bold">99+</h3>
              <p className="text-sm md:text-md mt-2">Số dự án đã thực hiện</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-[110px] font-bold">100%</h3>
              <p className="text-sm md:text-md mt-2">Khách hàng hài lòng</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-[110px] font-bold">20+</h3>
              <p className="text-sm md:text-md mt-2">Chi nhánh trên toàn quốc</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__container space-y-16">
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Image src={"/home/homepage_sec_3_1.png"} alt="Xuong san xuat rieng" width={500} height={500} className="w-full h-auto object-cover" />
            </div>
            <div className="flex flex-col max-w-[420px] w-full">
              <h3 className="text-[28px] md:text-[36px] font-medium uppercase">Xưởng sản xuất riêng</h3>
              <p className="text-md font-normal">Chúng tôi cam kết đảm bảo chất lượng từ nguyên liệu đến thành phẩm.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Image src={"/home/homepage_sec_3_2.png"} alt="Vat lieu cao cap" width={500} height={500} className="w-full h-auto object-cover" />
            </div>
            <div className="flex flex-col max-w-[420px] w-full">
              <h3 className="text-[28px] md:text-[36px] font-medium uppercase">Vật liệu cao cấp</h3>
              <p className="text-md font-normal">Gỗ tự nhiên, gỗ công nghiệp xử lý chống cong vênh, mối mọt. Sản phẩm được bền đẹp theo thời gian</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Image src={"/home/homepage_sec_3_3.png"} alt="Doi ngu tho" width={500} height={500} className="w-full h-auto object-cover" />
            </div>
            <div className="flex flex-col max-w-[420px] w-full">
              <h3 className="text-[28px] md:text-[36px] font-medium uppercase">ĐỘI NGŨ THỢ với TAY NGHỀ CAO</h3>
              <p className="text-md font-normal">
                Đội ngũ thi công của Goox có nhiều năm kinh nghiệm, thi công thủ công tỉ mỉ, kết hợp với máy móc hiện đại để đảm bảo độ chính xác và thẩm mỹ cho từng dự án
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__container">
          <Accordion />

          <ProductList />
        </div>
      </div>
      <div className="section">
        <div className="section__container">
          <ProjectHighlight />
        </div>
      </div>
      <div className="section">
        <div className="section__container">
          <ContactHome />
        </div>
      </div>
    </div>
  );
};

export default Page;
