import { Space_Grotesk } from "next/font/google";
import "./global.css";
import "./styles/global.css";

import Providers from "./providers"; 

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Goox - Nội thất hiện đại",
  description: "Khám phá bộ sưu tập nội thất đậm chất riêng",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
