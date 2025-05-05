/** @format */

import { motion, Variants } from "framer-motion";

interface TextBlockProps {
  content: string;
  col: number;
  row: number;
  type?: "text" | "title";
  className?: string;
  animation?: {
    variants: Variants; // Use Variants from framer-motion
    custom: number;
  };
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, col, row, type = "text", className = "justify-start", animation }) => (
  <motion.div
    className={`flex ${className} items-end text-center font-bold col-start-${col} row-start-${row}`}
    variants={animation?.variants}
    initial="hidden"
    whileInView="visible"
    custom={animation?.custom}
    viewport={{ once: true, amount: 0.2 }}
  >
    {type === "title" ? (
      <h1 className={`text-[32px] md:text-[48px] lg:text-[64px] font-bold text-gray-800 ${className}`}>{content}</h1>
    ) : (
      <p className={`text-[20px] md:text-[28px] lg:text-[32px] whitespace-pre-line text-left lg:text-justify leading-[20px] lg:leading-[32px] ${className}`}>{content}</p>
    )}
  </motion.div>
);
