/** @format */

"use client";

import { useEffect, useState } from "react";
import Header from "./ui/Header";
// import Footer from "./ui/Footer";
import LoadingScreen from "./ui/LoadingScreen";
import Footer from "./ui/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <>
          <Header />
          <div className="main">{children}</div>
          <Footer />
        </>
      )}
    </>
  );
}
