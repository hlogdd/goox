/** @format */

"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Accordion from "../ui/homepage/Accordion";
import ProductList from "../ui/homepage/ProductList";
import ProjectHighlight from "../ui/homepage/ProjectHighlight";
import ContactHome from "../ui/homepage/ContactHome";
import { removeInlineStylesFromMain } from "../lib/function";
import { motion } from "framer-motion";
import useCounterOnVisible from "../hooks/useCounter";

const Page = () => {
  const counterRef1 = useRef<HTMLDivElement>(null);
  const counterRef2 = useRef<HTMLDivElement>(null);
  const counterRef3 = useRef<HTMLDivElement>(null);
  const counterRef4 = useRef<HTMLDivElement>(null);

  // Đếm số 10+, 99+, 100%, 20+
  const count1 = useCounterOnVisible({ targetRef: counterRef1, startValue: 0, endValue: 10, duration: 1 }); // Đếm từ 0 đến 10 trong 2 giây
  const count2 = useCounterOnVisible({ targetRef: counterRef2, startValue: 0, endValue: 99, duration: 1.5 }); // Đếm từ 0 đến 99 trong 3 giây
  const count3 = useCounterOnVisible({ targetRef: counterRef3, startValue: 0, endValue: 100, duration: 1.5 }); // Đếm từ 0 đến 100 trong 4 giây
  const count4 = useCounterOnVisible({ targetRef: counterRef4, startValue: 0, endValue: 20, duration: 1 }); // Đếm từ 0 đến 20 trong 2 giây

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
    <div className="">
      <div className="section h-screen bg-[#EEEBE5] bg-contain bg-center" style={{ backgroundImage: "url('/home/homepage_bg.png')" }}>
        <div className="section__container flex flex-col justify-center gap-[64px] 2xl:gap-[120px] xl:gap-[80px] h-full">
          {/* Tiêu đề và mô tả */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row  md:flex-col items-start md:items-center justify-between gap-8">
            <h2 className="leading-[40px] md:leading-[35px] lg:leading-[55px] uppercase text-[32px] md:text-3xl lg:text-[48px] font-medium 2xl:max-w-[30%] xl:max-w-[45%] lg:max-w-[55%] md:max-w-[100%]">
              Chúng tôi đã tạo ra hơn 700 thiết kế nội thất gỗ độc bản
            </h2>
            <div className="space-y-6 xl:max-w-[30%] lg:max-w-[45%] md:max-w-[100%]">
              <p className="text-gray-700 text-base md:text-md leading-relaxed">
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
          </motion.div>

          {/* Thống kê */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div ref={counterRef1}>
              <h3 className="text-5xl md:text-[68px] lg:text-[90px] xl:text-[110px] font-bold">{count1}+</h3>
              <p className="text-md md:text-lg leading-[22px] mt-2">Năm kinh nghiệm sản xuất</p>
            </div>
            <div ref={counterRef2}>
              <h3 className="text-5xl md:text-[68px] lg:text-[90px] xl:text-[110px] font-bold">{count2}+</h3>
              <p className="text-md md:text-lg leading-[22px] mt-2">Số dự án đã thực hiện</p>
            </div>
            <div ref={counterRef3}>
              <h3 className="text-5xl md:text-[68px] lg:text-[90px] xl:text-[110px] font-bold">{count3}%</h3>
              <p className="text-md md:text-lg leading-[22px] mt-2">Khách hàng hài lòng</p>
            </div>
            <div ref={counterRef4}>
              <h3 className="text-5xl md:text-[68px] lg:text-[90px] xl:text-[110px] font-bold">{count4}+</h3>
              <p className="text-md md:text-lg leading-[22px] mt-2">Chi nhánh trên toàn quốc</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section">
        <div className="section__container pt-[70px]">
          <Accordion />
        </div>
      </div>

      <div className="section py-[70px]">
        <div className="section__container">
          <ProjectHighlight />
        </div>
      </div>

      <ContactHome />
    </div>
  );
};

export default Page;
