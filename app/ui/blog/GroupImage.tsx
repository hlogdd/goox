/** @format */

import Image from "next/image";

interface GroupImageProps {
  srcImage: string;
  className?: string;
}

export const GroupImage: React.FC<GroupImageProps> = ({ srcImage, className }) => {
  return (
    <div className={`w-full h-[250px] sm:h-[300px] md:h-[385px] relative ${className}`}>
      <Image src={srcImage} fill alt="img" className="object-cover" />
      <div className="absolute -bottom-[17px] right-0 bg-[#142927] w-[34px] h-[34px]">
        <span></span>
      </div>
    </div>
  );
};
