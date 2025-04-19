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

  const imagesRow2 = ["/home/homepage_5.png", "/home/homepage_6.png", "/home/homepage_6.png"];

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
                <div className="grid grid-rows-2 grid-cols-5 gap-3 h-full px-5 py-10">
                  {/* === ROW 1 === */}

                  {imagesRow1.map((src, i) => (
                    <motion.div
                      key={`img1-${i}`}
                      custom={i}
                      variants={slideFromLeft}
                      initial="hidden"
                      animate="visible"
                      className={`flex justify-center items-center row-start-1 col-start-${i < 2 ? i + 1 : i + 2}`}>
                      <Image src={src} alt={`img1-${i}`} width={273} height={430} className="object-cover" />
                    </motion.div>
                  ))}

                  {/* "goox" vào cột 3 của hàng 1 */}
                  <motion.div variants={textVariant} custom={3} initial="hidden" animate="visible" className="flex justify-start items-end font-bold row-start-1 col-start-3">
                    <h1 className="text-[64px] font-bold text-gray-800">goox</h1>
                  </motion.div>

                  {/* === ROW 2 === */}

                  {/* Text left vào cột 1 hàng 2 */}
                  <motion.div variants={textVariant} custom={1} initial="hidden" animate="visible" className="flex items-end justify-end font-bold row-start-2 col-start-1">
                    <p className="text-[32px]">
                      Giản dị trong
                      <br />
                      hình dáng.
                    </p>
                  </motion.div>

                  {/* Các ảnh tiếp theo ở cột 2, 3, 4 */}
                  {imagesRow2.map((src, i) => (
                    <motion.div
                      key={`img2-${i}`}
                      custom={i + 4}
                      variants={slideFromLeft}
                      initial="hidden"
                      animate="visible"
                      className={`flex justify-center items-center row-start-2 col-start-${i + 2}`}>
                      <Image src={src} alt={`img2-${i}`} width={273} height={430} className="object-cover" />
                    </motion.div>
                  ))}

                  {/* Text right vào cột 4 hàng 2 */}
                  <motion.div variants={textVariant} custom={2} initial="hidden" animate="visible" className="flex justify-start items-end font-bold row-start-2 col-start-5">
                    <p className="text-[32px]">
                      Tinh tế trong
                      <br />
                      từng đường nét.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Các section tiếp theo */}
              <div className="section">
                <div className="section__infor">
                  {/* Tiêu đề và mô tả */}
                  <div className="flex items-center justify-between mb-[64]">
                    <h2 className="section__infor-left leading-snug uppercase">Chúng tôi đã tạo ra hơn 700 thiết kế nội thất gỗ độc bản</h2>
                    <div className="space-y-6">
                      <p className="section__infor-right text-gray-700 text-base md:text-lg leading-relaxed">
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
                  <div className="section__infor-experience grid grid-cols-2 md:grid-cols-4 text-center gap-8 mt-16 pt-10">
                    <div>
                      <h3 className="text-[110px] font-bold">10+</h3>
                      <p className="text-md mt-2">Năm kinh nghiệm sản xuất</p>
                    </div>
                    <div>
                      <h3 className="text-[110px] font-bold">99+</h3>
                      <p className="text-md mt-2">Số dự án đã thực hiện</p>
                    </div>
                    <div>
                      <h3 className="text-[110px] font-bold">100%</h3>
                      <p className="text-md mt-2">Khách hàng hài lòng</p>
                    </div>
                    <div>
                      <h3 className="text-[110px] font-bold">20+</h3>
                      <p className="text-md mt-2">Chi nhánh trên toàn quốc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section__build">
                  <div className="flex items-center">
                    <Image src={"/home/homepage_sec_3_1.png"} width={500} height={500} alt="Xuong san xuat rieng" />

                    <div className="flex flex-col max-w-[420px]">
                      <h3 className="text-[36px] font-medium uppercase">Xưởng sản xuất riêng</h3>
                      <p className="text-md font-normal">Chúng tôi cam kết đảm bảo chất lượng từ nguyên liệu đến thành phẩm.</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-row-reverse">
                    <Image src={"/home/homepage_sec_3_2.png"} width={500} height={500} alt="Xuong san xuat rieng" />

                    <div className="flex flex-col max-w-[420px]">
                      <h3 className="text-[36px] font-medium uppercase">Vật liệu cao cấp</h3>
                      <p className="text-md font-normal"> Gỗ tự nhiên, gỗ công nghiệp xử lý chống cong vênh, mối mọt. Sản phẩm được bền đẹp theo thời gian</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Image src={"/home/homepage_sec_3_3.png"} width={500} height={500} alt="Xuong san xuat rieng" />

                    <div className="flex flex-col max-w-[420px]">
                      <h3 className="text-[36px] font-medium uppercase">ĐỘI NGŨ THỢ với TAY NGHỀ CAO</h3>
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
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
