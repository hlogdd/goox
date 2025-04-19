/** @format */

import Image from "next/image";
import React from "react";

const ContactHome = () => {
  return (
    <div className="section__container flex flex-col md:flex-row gap-12 py-12">
      {/* Phần trái: Tiêu đề + form */}
      <div className="flex-1">
        <h2 className="text-[56px] font-medium mb-6 uppercase max-w-[400px] leading-[1.1]">Let&apos;s work together</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Họ tên */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">
              Họ tên
            </label>
            <input id="name" type="text" placeholder="Nhập họ tên của bạn" className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          {/* Số điện thoại */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input id="phone" type="tel" placeholder="Nhập số điện thoại" className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          {/* Email */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input id="email" type="email" placeholder="example@email.com" className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          {/* Tin nhắn */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
              Tin nhắn
            </label>
            <textarea id="message" rows={5} placeholder="Nội dung liên hệ..." className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none" />
          </div>

          {/* Nút gửi */}
          <button type="submit" className="text-white py-3 px-6 hover:bg-gray-800 transition md:col-span-2 bg-primary !font-bold">
            Gửi liên hệ
          </button>
        </form>
      </div>

      {/* Phần phải: ảnh */}
      <div className="flex-1 flex justify-end">
        <div className="max-w-[500px] w-full h-full relative overflow-hidden shadow-lg">
          <Image src="/home/homepage_contact.png" alt="Contact Illustration" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
