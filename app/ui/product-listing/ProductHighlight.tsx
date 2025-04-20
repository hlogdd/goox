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
    <section className="w-full py-6 px-4 sm:py-8 md:py-12 md:px-16">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } gap-8 items-center`}
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
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
          <button className="mt-4 px-5 py-2 bg-black text-white font-bold hover:bg-neutral-800 transition-all">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
