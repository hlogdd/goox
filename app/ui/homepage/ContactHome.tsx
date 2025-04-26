/** @format */

import Image from "next/image";
import React from "react";

const ContactHome = () => {
  return (
    <div className="relative py-12">
      {/* Ảnh nền nằm ngoài cùng, sát phải */}
      <div className="absolute hidden lg:block top-0 right-10 bottom-0 w-1/2 z-0 pointer-events-none">
        <Image
          src="/home/homepage_contact_bg.png"
          alt="Background"
          fill
          className="object-contain"
        />
      </div>

      {/* Content chính */}
      <div className="flex flex-col md:flex-row gap-12 py-0 px-6 md:px-24 relative z-10">
        {/* Form bên trái */}
        <div className="flex-1">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium mb-8 uppercase leading-[1.1] max-w-[400px]">
            Let&apos;s work together
          </h2>

          <form className="grid grid-cols-1 gap-6">
            {/* Họ tên */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">
                Họ tên
              </label>
              <input
                id="name"
                type="text"
                placeholder="Nhập họ tên của bạn"
                className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Số điện thoại */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Nhập số điện thoại"
                className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Tin nhắn */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
                Tin nhắn
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Nội dung liên hệ..."
                className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            {/* Nút gửi */}
            <button
              type="submit"
              className="text-white py-3 px-6 hover:bg-gray-800 transition bg-primary font-bold"
            >
              Gửi liên hệ
            </button>
          </form>
        </div>

        {/* Ảnh chính */}
        <div className="flex-1 hidden lg:flex justify-center items-center"> {/* hidden for mobile/tablet, visible on large screens */}
          <div className="relative max-w-[400px] w-full h-[500px] md:max-w-[500px] md:h-[770px] z-10">
            <Image
              src="/home/homepage_contact.png"
              alt="Contact Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
