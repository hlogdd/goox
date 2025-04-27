"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Thời gian animation
      easing: "ease-in-out", // Kiểu easing
      offset: 100, // Khoảng cách trigger animation (px)
    });
  }, []);

  return <>{children}</>;
}