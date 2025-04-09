/** @format */
import Banner from "../ui/product-listing/banner";
import ProductHighlight from "../ui/product-listing/ProductHighlight";
import ProductGrid from "../ui/product-listing/ProductGrid";

export default function Page() {
  return (
    <div className="">
      <Banner />

      <ProductHighlight
        image="/product/product-high-1.png"
        title="NẰM - THƯ GIÃN"
        description="Những mẫu giường, sofa nằm thư giãn thiết kế tối giản nhưng đầy tinh tế, phù hợp với mọi không gian sống hiện đại."
      />

      <ProductGrid
        title="SẢN PHẨM ĐỂ NẰM"
        products={[
          { id: 1, name: "Giường gỗ tối giản", image: "/product/product-high-1.png" },
          { id: 2, name: "Sofa dài thư giãn", image: "/product/product-high-1.png" },
          { id: 3, name: "Daybed vải bố", image: "/product/product-high-1.png" },
          { id: 4, name: "Giường bệt Nhật Bản", image: "/product/product-high-1.png" },
          { id: 5, name: "Giường bệt Nhật Bản", image: "/product/product-high-1.png" },
          { id: 6, name: "Giường bệt Nhật Bản", image: "/product/product-high-1.png" },
          { id: 7, name: "Giường bệt Nhật Bản", image: "/product/product-high-1.png" },
          { id: 8, name: "Giường bệt Nhật Bản", image: "/product/product-high-1.png" },
        ]}
      />

      <ProductHighlight image="/product/product-high-2.png" title="NGỒI" description="Tựa đầu, tựa lưng, đón lấy đôi mắt – đó chính là sự thoải mái bạn đang tìm kiếm." reverse />

      <ProductGrid
        title="SẢN PHẨM NGỒI"
        products={[
          { id: 1, name: "Ghế bọc nhung", image: "/product/product-high-2.png" },
          { id: 2, name: "Ghế gỗ cổ điển", image: "/product/product-high-2.png" },
          { id: 3, name: "Ghế đọc sách", image: "/product/product-high-2.png" },
          { id: 4, name: "Ghế ngồi thư giãn", image: "/product/product-high-2.png" },
          { id: 5, name: "Giường bệt Nhật Bản", image: "/product/product-high-2.png" },
          { id: 6, name: "Giường bệt Nhật Bản", image: "/product/product-high-2.png" },
          { id: 7, name: "Giường bệt Nhật Bản", image: "/product/product-high-2.png" },
          { id: 8, name: "Giường bệt Nhật Bản", image: "/product/product-high-2.png" },
        ]}
      />

      <ProductHighlight
        image="/product/product-high-3.png"
        title="TREO"
        description="Giá treo, móc gỗ, kệ gắn tường – nơi lưu giữ và thể hiện những điều bạn trân trọng. Đơn giản, gọn gàng nhưng đầy cá tính, như chính không gian sống bạn đang xây dựng."
      />

      <ProductGrid
        title="SẢN PHẨM TREO"
        products={[
          { id: 1, name: "Giường gỗ tối giản", image: "/product/product-high-3.png" },
          { id: 2, name: "Sofa dài thư giãn", image: "/product/product-high-3.png" },
          { id: 3, name: "Daybed vải bố", image: "/product/product-high-3.png" },
          { id: 4, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
          { id: 5, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
          { id: 6, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
          { id: 7, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
          { id: 8, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
        ]}
      />

      <ProductHighlight image="/product/product-high-4.png" title="TRƯNG BÀY" description="Kệ, tủ, bàn console… không chỉ để cất trữ mà còn để kể câu chuyện của bạn. Mỗi món đồ nội thất là một sân khấu cho vật dụng bạn yêu quý toả sáng." reverse />

      <ProductGrid
        title="SẢN PHẨM TRƯNG BÀY"
        products={[
          { id: 1, name: "Ghế bọc nhung", image: "/product/product-high-3.png" },
          { id: 2, name: "Ghế gỗ cổ điển", image: "/product/product-high-3.png" },
          { id: 3, name: "Ghế đọc sách", image: "/product/product-high-3.png" },
          { id: 4, name: "Ghế ngồi thư giãn", image: "/product/product-high-3.png" },
          { id: 5, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
          { id: 6, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
          { id: 7, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
          { id: 8, name: "Giường bệt Nhật Bản", image: "/product/product-high-3.png" },
        ]}
      />
    </div>
  );
}
