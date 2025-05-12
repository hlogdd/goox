/** @format */

"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import Accordion from "../ui/homepage/Accordion";
import ProductList from "../ui/homepage/ProductList";
import ProjectHighlight from "../ui/homepage/ProjectHighlight";
import ContactHome from "../ui/homepage/ContactHome";
import Footer from "../ui/Footer";
import ImageWrap from "../ui/homepage/ImageWrap";
import { TextBlock } from "../ui/homepage/TextBlock";
import useCounterOnVisible from "../hooks/useCounter";
import { motion } from "framer-motion";

export default function Page() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isLargeScreen = screenWidth >= 1536;

  const imagesRow1 = isLargeScreen
    ? ["/home/homepage_1_lg.png", "/home/homepage_2_lg.png", "/home/homepage_3_lg.png", "/home/homepage_4_lg.png"]
    : ["/home/homepage_1.png", "/home/homepage_2.png", "/home/homepage_3.png", "/home/homepage_4.png"];

  const imagesRow2 = isLargeScreen
    ? ["/home/homepage_5_lg.png", "/home/homepage_6_lg.png", "/home/homepage_6_lg.png", "/home/homepage_7_lg.png"]
    : ["/home/homepage_5.png", "/home/homepage_6.png", "/home/homepage_6.png", "/home/homepage_7.png"];

  const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.15, // Mượt hơn, bắt đầu sau 0.2s và cách nhau 0.15s
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  //
  const counterRef1 = useRef<HTMLDivElement>(null);
  const counterRef2 = useRef<HTMLDivElement>(null);
  const counterRef3 = useRef<HTMLDivElement>(null);
  const counterRef4 = useRef<HTMLDivElement>(null);

  // Đếm số 10+, 99+, 100%, 20+
  const count1 = useCounterOnVisible({ targetRef: counterRef1, startValue: 0, endValue: 10, duration: 1 }); // Đếm từ 0 đến 10 trong 2 giây
  const count2 = useCounterOnVisible({ targetRef: counterRef2, startValue: 0, endValue: 99, duration: 1.5 }); // Đếm từ 0 đến 99 trong 3 giây
  const count3 = useCounterOnVisible({ targetRef: counterRef3, startValue: 0, endValue: 100, duration: 1.5 }); // Đếm từ 0 đến 100 trong 4 giây
  const count4 = useCounterOnVisible({ targetRef: counterRef4, startValue: 0, endValue: 20, duration: 1 }); // Đếm từ 0 đến 20 trong 2 giây

  return (
    <>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        credits={{ enabled: false }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                {/* === DESKTOP (≥ lg) === */}
                <div className="hidden lg:grid grid-cols-5 grid-rows-2 gap-3 px-5 py-10">
                  {/* Hàng 1: ảnh1 - ảnh2 - goox - ảnh3 - ảnh4 */}
                  <ImageWrap src={imagesRow1[0]} col={1} row={1} animation={{ variants: fadeVariant, custom: 1 }} />
                  <ImageWrap src={imagesRow1[1]} col={2} row={1} animation={{ variants: fadeVariant, custom: 2 }} />
                  <TextBlock content="goox" type="title" col={3} row={1} animation={{ variants: fadeVariant, custom: 0 }} />
                  <ImageWrap src={imagesRow1[2]} col={4} row={1} animation={{ variants: fadeVariant, custom: 4 }} />
                  <ImageWrap src={imagesRow1[3]} col={5} row={1} animation={{ variants: fadeVariant, custom: 5 }} />
                  {/* Hàng 2: text1 - ảnh5 - ảnh6 - text2 - ảnh7 */}
                  <TextBlock content={`Giản dị trong \n hình dáng.`} col={1} row={2} className="justify-end" animation={{ variants: fadeVariant, custom: 0 }} />
                  <ImageWrap src={imagesRow2[0]} col={2} row={2} animation={{ variants: fadeVariant, custom: 2 }} />
                  <ImageWrap src={imagesRow2[1]} col={3} row={2} animation={{ variants: fadeVariant, custom: 3 }} />
                  <TextBlock content={`Tinh tế trong \n đường nét.`} col={4} row={2} animation={{ variants: fadeVariant, custom: 0 }} />
                  <ImageWrap src={imagesRow2[2]} col={5} row={2} animation={{ variants: fadeVariant, custom: 5 }} />
                </div>

                {/* === TABLET (md - lg) === */}
                <div className="hidden md:grid lg:hidden grid-cols-4 grid-rows-3 gap-3 px-5 py-10">
                  <ImageWrap src={imagesRow1[0]} col={1} row={1} animation={{ variants: fadeVariant, custom: 3 }} />
                  <ImageWrap src={imagesRow1[1]} col={2} row={1} animation={{ variants: fadeVariant, custom: 4 }} />
                  <TextBlock content="goox" type="title" col={3} row={1} animation={{ variants: fadeVariant, custom: 0 }} />
                  <ImageWrap src={imagesRow1[2]} col={4} row={1} animation={{ variants: fadeVariant, custom: 5 }} />

                  <TextBlock content={`Giản dị trong \n hình dáng.`} col={1} row={2} className="justify-end" animation={{ variants: fadeVariant, custom: 1 }} />
                  <ImageWrap src={imagesRow2[0]} col={2} row={2} animation={{ variants: fadeVariant, custom: 6 }} />
                  <ImageWrap src={imagesRow2[1]} col={3} row={2} animation={{ variants: fadeVariant, custom: 7 }} />
                  <TextBlock content={`Tinh tế trong \n đường nét.`} col={4} row={2} animation={{ variants: fadeVariant, custom: 2 }} />

                  <ImageWrap src={imagesRow2[2]} col={1} row={3} animation={{ variants: fadeVariant, custom: 8 }} />
                  <div className="col-start-2 row-start-3" />
                  <div className="col-start-3 row-start-3" />
                  <ImageWrap src={imagesRow2[3]} col={4} row={3} animation={{ variants: fadeVariant, custom: 9 }} />
                </div>

                {/* === MOBILE (< md) === */}
                <div className="grid md:hidden grid-cols-3 grid-rows-3 gap-3 px-5 py-10">
                  <ImageWrap src={imagesRow1[0]} col={1} row={1} animation={{ variants: fadeVariant, custom: 3 }} />
                  <TextBlock content="goox" type="title" col={2} row={1} animation={{ variants: fadeVariant, custom: 0 }} />
                  <ImageWrap src={imagesRow1[1]} col={3} row={1} animation={{ variants: fadeVariant, custom: 4 }} />

                  <ImageWrap src={imagesRow1[2]} col={1} row={2} animation={{ variants: fadeVariant, custom: 5 }} />
                  <TextBlock content={`Giản dị trong \n hình dáng.`} col={2} row={2} className="justify-end" animation={{ variants: fadeVariant, custom: 1 }} />
                  <ImageWrap src={imagesRow2[0]} col={3} row={2} animation={{ variants: fadeVariant, custom: 6 }} />

                  <ImageWrap src={imagesRow2[1]} col={1} row={3} animation={{ variants: fadeVariant, custom: 7 }} />
                  <ImageWrap src={imagesRow2[2]} col={2} row={3} animation={{ variants: fadeVariant, custom: 8 }} />
                  <TextBlock content={`Tinh tế trong \n đường nét.`} col={3} row={3} animation={{ variants: fadeVariant, custom: 2 }} />
                </div>
              </div>

              {/* Các section tiếp theo */}
              <div className="section bg-[#EEEBE5] bg-contain bg-center" style={{ backgroundImage: "url('/home/homepage_bg.png')" }}>
                <div className="section__container flex flex-col gap-[64px] 2xl:gap-[120px] xl:gap-[80px]">
                  {/* Tiêu đề và mô tả */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row  md:flex-col items-start lg:items-center justify-between gap-8">
                    <h2
                      className="leading-[42px] md:leading-[52px] lg:leading-[66px] uppercase text-[36px] md:text-[42px] lg:text-[56px] font-medium 2xl:max-w-[30%] xl:max-w-[45%] lg:max-w-[55%] md:max-w-[100%]"
                     >
                      Chúng tôi đã tạo ra hơn 700 thiết kế nội thất gỗ độc bản
                    </h2>
                    <div className="space-y-6 xl:max-w-[30%] lg:max-w-[45%] md:max-w-[100%]">
                      <p className="text-gray-700 text-base md:text-md leading-relaxed">
                        Chúng tôi là một đội ngũ thiết kế và thi công đầy đam mê, chuyên tạo nên những không gian sống và làm việc chuẩn thẩm mỹ, tối ưu công năng. Goox đặc biệt chú trọng vào chất
                        liệu gỗ tự nhiên, chi tiết thủ công và sự hài hoà trong tổng thể – tạo nên những công trình bền vững, mang dấu ấn riêng biệt.
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
                <div className="section__container space-y-[60px] py-[100px]">
                  {/* Item 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:px-[60px]">
                    <div className="w-[300px] xl:w-1/2 md:w-[300px] h-[300px] xl:h-[500px] lg:h-[300px] md:h-[280px] relative max-w-[500px]">
                      <Image src={"/home/homepage_sec_3_1.png"} alt="Xuong san xuat rieng" fill className="object-contain" />
                      {/* Div màu nằm ở góc phải dưới */}
                      <div className="absolute bottom-4 -right-0 lg:bottom-[25px] lg:-right-[25px] translate-y-1/2 bg-[#142927] p-4 text-white w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                        <span></span>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-[420px] w-full">
                      <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium uppercase leading-[32px] md:leading-[42px] lg:leading-[48px]">Xưởng sản xuất riêng</h3>
                      <p className="text-md font-normal">Chúng tôi cam kết đảm bảo chất lượng từ nguyên liệu đến thành phẩm.</p>
                    </div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row-reverse items-center gap-8 px-6 lg:px-[60px]">
                    <div className="w-full xl:w-1/2 md:w-[300px] h-[300px] xl:h-[500px] lg:h-[300px] md:h-[280px] relative max-w-[500px]">
                      <Image src={"/home/homepage_sec_3_2.png"} alt="Vat lieu cao cap" fill className="object-contain" />
                      <div className="absolute bottom-4 left-4 lg:bottom-[25px] lg:-left-[25px] translate-y-1/2 p-4 text-white w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] -z-1">
                        <Image src={"/home/home_section3_sub.png"} alt="Vat lieu" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="flex flex-col max-w-[420px] w-full">
                      <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium uppercase leading-[32px] md:leading-[42px] lg:leading-[48px]">Vật liệu cao cấp</h3>
                      <p className="text-md font-normal">Gỗ tự nhiên, gỗ công nghiệp xử lý chống cong vênh, mối mọt. Sản phẩm được bền đẹp theo thời gian</p>
                    </div>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:px-[60px]">
                    <div className="w-full xl:w-1/2 md:w-[300px] h-[300px] xl:h-[500px] lg:h-[300px] md:h-[280px] relative max-w-[500px]">
                      <Image src={"/home/homepage_sec_3_3.png"} alt="Doi ngu tho" fill className="object-contain" />
                      <div className="absolute bottom-4 -right-0 lg:bottom-[25px] lg:-right-[25px] translate-y-1/2 bg-[#142927] p-4 text-white w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                        <span></span>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-[420px] w-full">
                      <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium uppercase leading-[32px] md:leading-[42px] lg:leading-[48px]">ĐỘI NGŨ THỢ với TAY NGHỀ CAO</h3>
                      <p className="text-md font-normal">
                        Đội ngũ thi công của Goox có nhiều năm kinh nghiệm, thi công thủ công tỉ mỉ, kết hợp với máy móc hiện đại để đảm bảo độ chính xác và thẩm mỹ cho từng dự án
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="section">
                <div className="section__container">
                  <Accordion />
                </div>
              </div>

              <div className="section">
                <div className="section__container">
                  <ProductList />
                </div>
              </div>

              <div className="section">
                <div className="section__container">
                  <ProjectHighlight />
                </div>
              </div>

              <div className="section h-screen bg-[#EEEBE5]">
              <div className="section__container h-full flex items-center">
              <ContactHome />
                </div>
              </div>

              <div className="section min-h-screen">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
