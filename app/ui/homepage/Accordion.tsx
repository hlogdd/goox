/** @format */
"use client"
import { useState } from "react";

const accordionData = [
  {
    title: "Sáng tạo - Cá nhân hóa",
    content: "Chúng tôi tạo ra không gian sống mang cá tính riêng, từ thiết kế đến chất liệu.",
  },
  {
    title: "Chất lượng là nền tảng",
    content: "Chúng tôi ưu tiên vật liệu cao cấp và quy trình kiểm soát chất lượng nghiêm ngặt.",
  },
  {
    title: "Tận tâm trong từng công trình",
    content: "Mỗi dự án là tâm huyết của cả một đội ngũ – từ thiết kế đến thi công.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full mb-3 pt-9 clr-primary">
      <div className="flex items-center justify-between">
        <h2 className="text-[60px] font-medium mb-6 uppercase max-w-[400px] leading-18">Giá trị tạo nên Goox</h2>
        <p className="text-sm italic mb-6 max-w-[500px] ">
          “ Với mỗi công trình, chúng tôi không chỉ thi công nội thất, mà còn kiến tạo một không gian có hồn, có phong cách, có cá tính. Ở đây không chỉ là câu chuyện, là nghệ thuật, là dấu ấn của
          thời gian.{" "}
        </p>
      </div>

      {accordionData.map((item, idx) => (
        <div key={idx} className={`${idx !== 0 ? "border-t " : ""} border-t-[#D0D0D0] py-4 cursor-pointer`} onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">/{String(idx + 1).padStart(2, "0")}</span>
            <h3 className="ml-4 font-semibold text-lg flex-1">{item.title}</h3>
            <span className="text-xl">{openIndex === idx ? "−" : "+"}</span>
          </div>
          {openIndex === idx && <div className="mt-2 ml-8 text-gray-600 text-sm transition-all duration-300 ease-in-out">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
