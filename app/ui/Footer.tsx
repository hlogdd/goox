/** @format */

// app/ui/footer.tsx hoặc components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#061D1B] text-[#EEEBE5] py-[100px] px-6 md:px-16">
      <div className="flex justify-between gap-8">
        {/* Cột 1 - Logo + Thông tin */}
        <div className="max-w-[250px] w-full">
          <h2 className="text-[36px] font-black mb-3 text-[#EEEBE5]">goox</h2>
          <p className="text-md mb-1 text-[#EEEBE5]">
            Hot line:{" "}
            <a href="tel:+8421345299752" className="hover:underline">
              +84 21345299752
            </a>
          </p>
          <p className="text-md text-[#EEEBE5]">
            Email:{" "}
            <a href="mailto:Goox@goox.com" className="hover:underline">
              Goox@goox.com
            </a>
          </p>
        </div>

        <div className="flex justify-between max-w-[810px] w-full">
          {/* Cột 2 - Menu */}
          <div className="w-full space-y-2 font-medium">
            <p className="min-h-[12px]"></p>
            <p className="mb-[16px]">Trang chủ</p>
            <p className="mb-[16px]">Danh mục sản phẩm</p>
            <p className="mb-[16px]">Dự án thực tế</p>
          </div>

          {/* Cột 3 - Thông tin thêm */}
          <div className="w-full space-y-2 font-medium">
            <p className="min-h-[12px]"></p>
            <p className="mb-[16px]">Thông tin thương hiệu</p>
            <p className="mb-[16px]">Liên hệ</p>
            <p className="mb-[16px]">Blog</p>
          </div>

          {/* Cột 4 - Mạng xã hội */}
          <div className="w-full space-y-2 font-medium">
            <p className="min-h-[12px]"></p>
            <p className="mb-[16px]">Facebook</p>
            <p className="mb-[16px]">Instagram</p>
            <p className="mb-[16px]">Youtube</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
