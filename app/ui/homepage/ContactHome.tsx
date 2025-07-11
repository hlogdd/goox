/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactHome = () => {
  return (
    <div className="relative bg-[#EEEBE5] p-0 lg:py-[80px] w-full">
      <div className="relative">
      <div className="absolute hidden lg:block top-0 right-10 bottom-0 w-1/2 z-0 pointer-events-none">
        <Image src="/home/homepage_contact_bg.png" alt="Background" fill className="object-contain" />
      </div>

      {/* Content chính */}
      <div className="flex flex-col md:flex-row gap-12 py-0 px-[0px] lg:px-6 md:px-6 relative z-10">
        {/* Form bên trái */}
        <div className="flex-1">
          <h2 className="text-[36px] sm:text-[42px] md:text-[56px] font-medium mb-8 uppercase leading-[1.1] max-w-full md:max-w-full lg:max-w-[400px]">Let&apos;s work together</h2>

          <form className="grid grid-cols-1 gap-6">
            {/* Họ tên */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">
                Họ tên
              </label>
              <input id="name" type="text" placeholder="Nhập họ tên của bạn" className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            {/* Số điện thoại */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input id="phone" type="tel" placeholder="Nhập số điện thoại" className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input id="email" type="email" placeholder="example@email.com" className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>

            {/* Tin nhắn */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
                Tin nhắn
              </label>
              <textarea id="message" rows={5} placeholder="Nội dung liên hệ..." className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none" />
            </div>

            {/* Nút gửi */}
            <div className="text-center text-white py-3 px-6 transition bg-primary !font-bold">
              <Link href="/thanks" className="flex justify-center"> Liên hệ chúng tôi</Link>
            </div>
          </form>
        </div>

        {/* Ảnh chính */}
        <div className="flex-1 hidden lg:flex justify-center items-center">
          {" "}
          {/* hidden for mobile/tablet, visible on large screens */}
          <div className="relative max-w-[400px] w-full h-[500px] md:max-w-[500px] md:h-[770px] z-10">
            <Image src="/home/homepage_contact.png" alt="Contact Illustration" fill className="object-contain" />
          </div>
        </div>
      </div>
      </div>
      {/* Ảnh nền nằm ngoài cùng, sát phải */}
     
    </div>
  );
};

export default ContactHome;
