/** @format */

import Image from "next/image";

interface ProductHighlightProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
  ctaText?: string;
}

export default function ProductHighlight({
  image,
  title,
  description,
  reverse = false,
  ctaText = "XEM BỘ SƯU TẬP",
}: ProductHighlightProps) {
  return (
    <section className="w-full pb-6 sm:pb-8 md:pb-12">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } gap-5 2xl:gap-[100px] md:gap-8 items-center`}
      >
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[500px] lg:h-[600px]">
          <Image
            src={image}
            className="object-cover w-full h-full"
            alt={title}
            layout="fill"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="md:w-full max-w-full px-6 text-left lg:max-w-[425px] space-y-2 lg:space-y-4 lg:text-left md:text-left">
          <h2 className="text-[32px] lg:text-[56px] leading-[32px] lg:leading-[65px] font-medium">{title}</h2>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
          <button className="mt-4 px-5 py-3 flex items-center gap-2 bg-primary text-white !font-bold transition-all">
            {ctaText}
            <Image src={"/product/icon_arrow_up.svg"} width={20} height={20} alt="icon"/>
          </button>
        </div>
      </div>
    </section>
  );
}
