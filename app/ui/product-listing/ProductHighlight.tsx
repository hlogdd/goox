/** @format */

import Image from "next/image";

interface ProductHighlightProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
  ctaText?: string;
}

export default function ProductHighlight({ image, title, description, reverse = false, ctaText = "XEM BỘ SƯU TẬP" }: ProductHighlightProps) {
  return (
    <section className="w-full py-12 px-4 md:px-16">
      <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-8 items-center`}>
        <Image src={image} className="w-full md:w-1/2" width={0} height={0} sizes="100vw" alt={title} />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <button className="mt-4 px-5 py-2 bg-black text-white !font-bold hover:bg-neutral-800 bg-primary">{ctaText}</button>
        </div>
      </div>
    </section>
  );
}
