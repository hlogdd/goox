/** @format */

// app/ui/footer.tsx hoặc components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Danh mục sản phẩm", href: "/product-listing" },
    { label: "Dự án thực tế", href: "/projects" },
    { label: "Thông tin thương hiệu", href: "/about" },
    { label: "Liên hệ", href: "/contact" },
    { label: "Blog", href: "/blogs" },
  ];

  return (
    <footer className={`bg-[#061D1B] text-[#EEEBE5] py-[100px] px-6 md:px-16 ${pathname === "/" ? "min-h-screen relative" : ""} ${pathname === "/projects-master" ? "hidden" : ""}`}>
      <div className="flex flex-wrap justify-between gap-8">
        {/* Cột 1 - Logo + Thông tin */}
        <div className="max-w-[250px] w-full">
          <h2 className="text-[36px] font-black mb-3 text-[#EEEBE5]">goox</h2>
          <p className="text-md mb-1 text-[#EEEBE5]  !text-white">
            Hotline:{" "}
            <a href="tel:+8421345299752" className="hover:underline">
              +84 21345299752
            </a>
          </p>
          <p className="text-md text-[#EEEBE5]  !text-white">
            Email:{" "}
            <a href="mailto:Goox@goox.com" className="hover:underline">
              Goox@goox.com
            </a>
          </p>
        </div>

        {/* Cột 2, Cột 3, Cột 4 - Menu, Thông tin thêm, Mạng xã hội */}
        <div className="flex flex-wrap gap-[20px] 2xl:gap-[120px] md:gap-[60px] justify-between w-full md:w-auto">
          {/* Cột 2 - Menu */}
          <div className="w-full sm:w-auto space-y-2 font-medium">
            <p className="min-h-[12px]"></p>
            {navItems.slice(0, 3).map((item) => (
              <Link key={item.label} href={item.href}>
                <p className="mb-[16px] hover:underline cursor-pointer !text-white">{item.label}</p>
              </Link>
            ))}
          </div>

          {/* Cột 3 - Thông tin thêm */}
          <div className="w-full sm:w-auto space-y-2 font-medium">
            <p className="min-h-[12px]"></p>
            {navItems.slice(3, 6).map((item) => (
              <Link key={item.label} href={item.href}>
                <p className="mb-[16px] hover:underline cursor-pointer !text-white">{item.label}</p>
              </Link>
            ))}
          </div>

          {/* Cột 4 - Mạng xã hội */}
          {/* <div className="w-full sm:w-auto space-y-2 font-medium">
            <p className="min-h-[12px]"></p>
            {navItems.slice(5).map((item) => (
              <Link key={item.label} href={item.href}>
                <p className="mb-[16px] hover:underline cursor-pointer">{item.label}</p>
              </Link>
            ))}
          </div> */}
        </div>

       
      </div>

      {pathname === "/" && (
          <div className="w-full h-[50%] 2xl:h-[calc(100vh-240px)] md:h-[50%] absolute left-0 bottom-0">
            <Image src="/home/background_footer.png" fill alt="background" className="object-cover"/>
          </div>
        )}
    </footer>
  );
}
