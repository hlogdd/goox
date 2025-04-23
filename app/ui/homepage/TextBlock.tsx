import { motion } from "framer-motion";

interface TextBlockProps {
    content: string;
    col: number;
    row: number;
    type?: "text" | "title";
  }
  
  export const TextBlock: React.FC<TextBlockProps> = ({ content, col, row, type = "text" }) => (
    <motion.div className={`flex justify-center items-end text-center font-bold col-start-${col} row-start-${row}`}>
      {type === "title" ? (
        <h1 className="text-[32px] md:text-[48px] lg:text-[64px] text-gray-800">{content}</h1>
      ) : (
        <p className="text-[20px] md:text-[28px] lg:text-[32px] leading-snug whitespace-pre-line">{content}</p>
      )}
    </motion.div>
  );