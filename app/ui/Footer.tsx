// app/ui/footer.tsx hoặc components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-[#09201e] sticky bottom-0 z-50 text-white py-10 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Cột 1 - Logo + Thông tin */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">goox</h2>
            <p className="mb-1 text-gray-300">Hot line: <a href="tel:+8421345299752" className="hover:underline">+84 21345299752</a></p>
            <p className="text-gray-300">Email: <a href="mailto:Goox@goox.com" className="hover:underline">Goox@goox.com</a></p>
          </div>
  
          {/* Cột 2 - Menu */}
          <div className="space-y-2">
            <p>Trang chủ</p>
            <p>Danh mục sản phẩm</p>
            <p>Dự án thực tế</p>
          </div>
  
          {/* Cột 3 - Thông tin thêm */}
          <div className="space-y-2">
            <p>Thông tin thương hiệu</p>
            <p>Liên hệ</p>
            <p>Blog</p>
          </div>
  
          {/* Cột 4 - Mạng xã hội */}
          <div className="space-y-2">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
        </div>
      </footer>
    );
  }
  