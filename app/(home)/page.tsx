/** @format */

"use client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import Image from "next/image";
import Accordion from "../ui/homepage/Accordion";
import ProductList from "../ui/homepage/ProductList";
import ProjectHighlight from "../ui/homepage/ProjectHighlight";
import ContactHome from "../ui/homepage/ContactHome";
import Footer from "../ui/Footer";

interface ImageWrapProps {
  src: string;
  col: number;
  row: number;
}

export const ImageWrap: React.FC<ImageWrapProps> = ({ src, col, row }) => (
  <motion.div className={`relative aspect-[2/3] col-start-${col} row-start-${row} w-full h-full`}>
    <Image src={src} alt="" fill className="object-cover" />
  </motion.div>
);

interface TextBlockProps {
  content: string;
  col: number;
  row: number;
  type?: "text" | "title";
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, col, row, type = "text" }) => (
  <motion.div className={`flex justify-center items-end text-center font-bold col-start-${col} row-start-${row}`}>
    {type === "title" ? (
      <h1 className="text-[32px] md:text-[48px] lg:text-[64px] text-gray-800">{content}</h1>
    ) : (
      <p className="text-[20px] md:text-[28px] lg:text-[32px] leading-snug whitespace-pre-line">{content}</p>
    )}
  </motion.div>
);

export default function Page() {
  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 + 1, duration: 0.6 }, // Delay bắt đầu sau text
    }),
  };

  const textVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const imagesRow1 = ["/home/homepage_1.png", "/home/homepage_2.png", "/home/homepage_3.png", "/home/homepage_4.png"];

  const imagesRow2 = ["/home/homepage_5.png", "/home/homepage_6.png", "/home/homepage_6.png","/home/homepage_7.png"];

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
                <ImageWrap src={imagesRow1[0]} col={1} row={1} />
                <ImageWrap src={imagesRow1[1]} col={2} row={1} />
                <TextBlock content="goox" type="title" col={3} row={1} />
                <ImageWrap src={imagesRow1[2]} col={4} row={1} />
                <ImageWrap src={imagesRow1[3]} col={5} row={1} /> {/* ảnh bị mất trước đây */}
                {/* Hàng 2: text1 - ảnh5 - ảnh6 - text2 - ảnh7 */}
                <TextBlock content="Giản dị trong\nhình dáng." col={1} row={2} />
                <ImageWrap src={imagesRow2[0]} col={2} row={2} />
                <ImageWrap src={imagesRow2[1]} col={3} row={2} />
                <TextBlock content="Tinh tế trong\nđường nét." col={4} row={2} />
                <ImageWrap src={imagesRow2[2]} col={5} row={2} />
              </div>

              {/* === TABLET (md - lg) === */}
              <div className="hidden md:grid lg:hidden grid-cols-4 grid-rows-3 gap-3 px-5 py-10">
                {/* Hàng 1: ảnh1 - ảnh2 - goox - ảnh3 */}
                <ImageWrap src={imagesRow1[0]} col={1} row={1} />
                <ImageWrap src={imagesRow1[1]} col={2} row={1} />
                <TextBlock content="goox" type="title" col={3} row={1} />
                <ImageWrap src={imagesRow1[2]} col={4} row={1} />

                {/* Hàng 2: text1 - ảnh4 - ảnh5 - text2 */}
                <TextBlock content="Giản dị trong\nhình dáng." col={1} row={2} />
                <ImageWrap src={imagesRow2[0]} col={2} row={2} />
                <ImageWrap src={imagesRow2[1]} col={3} row={2} />
                <TextBlock content="Tinh tế trong\nđường nét." col={4} row={2} />

                {/* Hàng 3: ảnh6 - empty - empty - ảnh7 */}
                <ImageWrap src={imagesRow2[2]} col={1} row={3} />
                <div className="col-start-2 row-start-3" />
                <div className="col-start-3 row-start-3" />
                <ImageWrap src={imagesRow2[3]} col={4} row={3} />
              </div>

              {/* === MOBILE (< md) === */}
              <div className="grid md:hidden grid-cols-3 grid-rows-3 gap-3 px-5 py-10">
                {/* Hàng 1: ảnh1 - goox - ảnh2 */}
                <ImageWrap src={imagesRow1[0]} col={1} row={1} />
                <TextBlock content="goox" type="title" col={2} row={1} />
                <ImageWrap src={imagesRow1[1]} col={3} row={1} />

                {/* Hàng 2: ảnh3 - text1 - ảnh4 */}
                <ImageWrap src={imagesRow1[2]} col={1} row={2} />
                <TextBlock content="Giản dị trong\nhình dáng." col={2} row={2} />
                <ImageWrap src={imagesRow2[0]} col={3} row={2} />

                {/* Hàng 3: ảnh5 - ảnh6 - text2 */}
                <ImageWrap src={imagesRow2[1]} col={1} row={3} />
                <ImageWrap src={imagesRow2[2]} col={2} row={3} />
                <TextBlock content="Tinh tế trong\nđường nét." col={3} row={3} />
              </div>
              </div>


              {/* Các section tiếp theo */}
              <div className="section">
                <div className="section__container">
                  {/* Tiêu đề và mô tả */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
                    <h2 className="leading-snug uppercase text-xl md:text-3xl lg:text-4xl md:max-w-[45%]">Chúng tôi đã tạo ra hơn 700 thiết kế nội thất gỗ độc bản</h2>
                    <div className="space-y-6 md:max-w-[50%]">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
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
