/** @format */

// components/ImageWrap.tsx
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ImageWrapProps {
  src: string;
  col: number;
  row: number;
  animation?: {
    variants: Variants;  // Use Variants type from framer-motion
    custom: number;
  };
}

const ImageWrap: React.FC<ImageWrapProps> = ({ src, col, row, animation }) => {
  return (
    <motion.div
      className={`relative w-full col-start-${col} row-start-${row}`}
      variants={animation?.variants}
      initial="hidden"
      whileInView="visible"
      custom={animation?.custom}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative w-full h-[150px] sm:h-[280px] md:h-[350px] lg:h-[380px] xl:h-[430px] 2xl:h-[530px]">
        <Image src={src} alt="" fill className="object-cover" />
      </div>
    </motion.div>
  );
};

export default ImageWrap;
