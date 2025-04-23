// components/ImageWrap.tsx
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageWrapProps {
  src: string;
  col: number;
  row: number;
}

const ImageWrap: React.FC<ImageWrapProps> = ({ src, col, row }) => (
  <motion.div className={`relative aspect-[2/3] col-start-${col} row-start-${row} w-full h-full`}>
    <Image src={src} alt="" fill className="object-cover" />
  </motion.div>
);

export default ImageWrap;
