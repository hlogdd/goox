/** @format */
"use client";
import { useState } from "react";

const accordionData = [
  {
    title: "Sáng tạo - Cá nhân hóa",
    content: (
      <>
        Goox không chạy theo lối mòn. Chúng tôi bắt đầu mỗi dự án bằng việc lắng nghe – để thấu hiểu không gian sống, thói quen sinh hoạt và cá tính của gia chủ.
      </>
    ),
  },
  {
    title: "Chất lượng là nền tảng",
    content: (
      <>
        Chúng tôi sử dụng nguyên liệu gỗ được tuyển chọn kỹ càng, quy trình xử lý nghiêm ngặt để đảm bảo độ bền, khả năng chống ẩm, mối mọt và giữ được vẻ đẹp theo năm tháng.
      </>
    ),
  },
  {
    title: "Tận tâm trong từng công trình",
    content: (
      <>
        Từ khâu thiết kế đến thi công, Goox luôn đồng hành và cập nhật xuyên suốt với khách hàng. Chúng tôi giải quyết nhanh mọi phát sinh, chủ động tối ưu giải pháp và đảm bảo thi công đúng tiến độ.
        <br />
        Sau khi bàn giao, Goox vẫn tiếp tục đồng hành với chính sách bảo hành lâu dài, hỗ trợ nhanh chóng khi khách hàng cần.
      </>
    ),
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full mb-3 pt-9 clr-primary">
      {/* Tiêu đề + mô tả */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium uppercase leading-tight max-w-full lg:max-w-[400px]">
          Giá trị tạo nên Goox
        </h2>
        <p className="text-sm max-w-full lg:max-w-[500px] text-center lg:text-left">
          “ Với mỗi công trình, chúng tôi không chỉ thi công nội thất, mà còn kiến tạo một không gian có hồn, có phong cách, có cá tính. Ở đây không chỉ là câu chuyện, là nghệ thuật, là dấu ấn của
          thời gian.”
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-8">
        {accordionData.map((item, idx) => (
          <div
            key={idx}
            className={`${
              idx !== 0 ? "border-t " : ""
            } border-t-[#D0D0D0] py-4 cursor-pointer`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
              <span className="text-gray-500 text-[28px] sm:text-[32px] mb-2 sm:mb-0">
                /{String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="ml-0 xl:ml-[180px] md:ml-[80px] sm:ml-[20px] font-semibold text-[22px] xl:text-[40px] md:text-[30px] sm:text-[28px] flex-1 text-center sm:text-left">
                {item.title}
              </h3>
              <span className="text-[24px] sm:text-[28px]">{openIndex === idx ? "−" : "+"}</span>
            </div>
            {openIndex === idx && (
              <div className="mt-2 sm:ml-[225px] text-gray-600 text-sm sm:text-base transition-all duration-300 ease-in-out max-w-[605px] mx-4 sm:mx-0">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
