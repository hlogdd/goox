/** @format */

"use client";

import { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";

import "./global.css";
import "./styles/global.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LoadingScreen from "./ui/LoadingScreen";
import Container from "./ui/Container";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // thời gian đủ cho animation progress

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} flex flex-col min-h-screen antialiased`}>
        {isLoading && <LoadingScreen />}
        {!isLoading && (
          <>
            <Header />
            <main className="main flex-grow">
              <Container>{children}</Container>
            </main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
