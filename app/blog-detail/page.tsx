"use client";

import Image from "next/image";
import React, { useEffect } from "react";
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
    <>
      <section className="py-16 pt-10">
        <div className="section__container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-2">
            <span className="text-gray-400">Trang chủ</span> / <span className="text-black font-medium">Blog</span> / <span className="text-black font-medium">Phong cách thiết kế nội thất...</span>
          </div>

          {/* Tiêu đề + mô tả */}
          <h2 className="text-[56px] font-bold mb-2">PHONG CÁCH THIẾT KẾ NỘI THẤT SANG XỊN MỊN NHẤT NĂM 2025</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">16/06/2025</p>
        </div>
      </section>

      <div className="section__container space-y-16 p-10 font-sans mb-[80px]">
        {/* Section 1: Header + Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Col 1 */}
          <div className="space-y-6">
            {/* Row 1: Text + Small Image */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold uppercase leading-tight">Storytelling OrganicModern</h1>
                <h2 className="text-xl uppercase tracking-wide">Elevated Simplicity Architectural Furniture</h2>
              </div>
              <Image src="/product/product_detail_1.png" alt="Mini Room" width={200} height={117} className="rounded-xl object-cover" style={{ height: "117px", width: "auto" }} />
            </div>

            {/* Row 2: Mid-size Image */}
            <Image src="/product/product_detail_1.png" alt="Room" width={500} height={226} className="rounded-xl object-cover w-full" style={{ height: "226px" }} />

            {/* Row 3: Text */}
            <p className="text-gray-700 text-lg">Kiến tạo không gian yên tĩnh với chất liệu tự nhiên – thiết kế lành, cảm xúc sâu.</p>
          </div>

          {/* Col 2: Large Image */}
          <div>
            <Image src="/product/product_detail_1.png" alt="Chair Large" width={600} height={524} className="rounded-xl object-cover w-full" style={{ height: "524px" }} />
          </div>
        </div>

        {/* Section 2: Gỗ organic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold uppercase">Gỗ Organic & Những bề mặt thô mộc</h3>
            <p className="mt-2 text-gray-700">Không sơn phủ. Không bóng bẩy. Chỉ là vân gỗ thật – thô – tự nhiên – nguyên bản. Mỗi chiếc ghế như một mảnh rừng còn sót lại giữa lòng thành phố.</p>
          </div>
          <div className="flex gap-4 flex-wrap justify-between">
            <Image src="/product/product_detail_2.png" alt="Stone Chair" width={200} height={300} className="rounded-lg" />
            <Image src="/product/product_detail_3.png" alt="Wave Chair" width={200} height={300} className="rounded-lg" />
            <Image src="/product/product_detail_4.png" alt="Modern Chair" width={200} height={300} className="rounded-lg" />
          </div>
        </div>

        {/* Section 3: Tone màu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold uppercase">Màu Beige, Đen mờ, và Tone đất cháy</h3>
            <p className="mt-2 text-gray-700">Bảng màu 2025 không phô trương. Nó gợi cảm giác ấm, trầm, và gần gũi như một làn khói cafe buổi sớm. Đẹp theo cách im lặng.</p>
          </div>
          <div>
            <ul className="text-sm space-y-1">
              <li>
                <strong>CLAY</strong> – Cảm giác của nắng chiều
              </li>
              <li>
                <strong>BEIGE</strong> – Như một lời thì thầm
              </li>
              <li>
                <strong>OLIVE</strong> – Màu của người trưởng thành
              </li>
              <li>
                <strong>GREIGE</strong> – Nơi Beige gặp Grey
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Ghế đẹp */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold uppercase">Tối giản, nhưng không rỗng tuếch</h3>
          <p className="text-gray-700 max-w-xl">Sự giản lược không đồng nghĩa với sự thiếu thốn. Nó là chủ đích. Là chọn lọc. Là lời thì thầm thay vì hô hào. Một kiểu đẹp không cần giải thích.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src="/product/product_detail_1.png" alt="Chair 1" width={200} height={300} className="rounded-lg" />
            <Image src="/product/product_detail_1.png" alt="Chair 2" width={200} height={300} className="rounded-lg" />
            <Image src="/product/product_detail_1.png" alt="Chair 3" width={200} height={300} className="rounded-lg" />
            <Image src="/product/product_detail_1.png" alt="Chair 4" width={200} height={300} className="rounded-lg" />
          </div>
        </div>

        {/* Section 5: Ghế trung tâm với chữ 2 bên */}
        <div className="relative text-center">
          <Image src="/product/product_detail_1.png" alt="Center Chair" width={400} height={400} className="mx-auto" />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 text-left text-lg font-medium">Tất cả mềm mại như một dòng chảy.</div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 text-right text-lg font-medium">Gợi nhắc về cơ thể – về chuyển động – về sự sống.</div>
        </div>

        {/* Section 6: Màu cảm xúc và hai ghế */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold uppercase">Màu của cảm xúc tĩnh</h3>
            <p className="mt-2 text-gray-700">Beige không buồn. Đen không lạnh. Khi được đặt đúng chỗ, chúng gợi nên sự hiện tại rất thật. Nội thất cũng có thể dịu dàng, không cần lên tiếng.</p>
          </div>
          <div className="flex gap-4">
            <Image src="/product/product_detail_1.png" alt="Side Chair 1" width={200} height={300} className="rounded-lg" />
            <Image src="/product/product_detail_1.png" alt="Side Chair 2" width={200} height={300} className="rounded-lg" />
          </div>
        </div>

        {/* Section 7: Bài viết */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold uppercase">Bài viết</h3>
            <a href="#" className="text-sm text-gray-700 hover:underline flex items-center gap-1">
              Xem tất cả <span>→</span>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-b pb-3">
                  <p className="text-xs text-gray-500">11/04/2025</p>
                  <a href="#" className="block text-sm font-medium hover:underline">
                    Gỗ Tần Bì Và Gỗ Sồi Làm Ghế Có Tốt Không? So Sánh Chi Tiết
                  </a>
                </div>
              ))}
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <Image src="/product/product_detail_1.png" alt="Article 1" width={300} height={200} className="rounded-lg" />
              <Image src="/product/product_detail_1.png" alt="Article 2" width={300} height={200} className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
