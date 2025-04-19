/** @format */

export function removeInlineStylesFromMain() {
  // Lấy tất cả các thẻ <main> trong trang
  const mainElements = document.querySelectorAll<HTMLElement>("main");

  // Duyệt qua các thẻ <main> và xóa thuộc tính style
  mainElements.forEach((element) => {
    element.removeAttribute("style");
  });
}
