"use client";

import React from "react";
import Image from "next/image";
import { ProductSectionProps } from "@/app/types/product.types";

const ProductSection: React.FC<ProductSectionProps> = ({
  products = [],
  title = "Every tool you need, wrapped into one",
}) => {
  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };
  const getSafeImageUrl = (imageUrl: string) => {
    if (!imageUrl || !isValidUrl(imageUrl)) {
      return "/images/fallback-product.jpg"; // Make sure this exists
    }
    return imageUrl;
  };
  return (
    <section className={`px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-28`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
          <h4 className="max-w-6xl text-balance font-founders-grotesk text-[36px] leading-none tracking-[-0.72px] text-dark md:text-[48px] md:tracking-[-0.96px] lg:text-[48px] lg:tracking-[-0.96px] xl:text-[56px] xl:tracking-[-1.12px] lg:mb-12 mb-6">
            {title}
          </h4>
        </div>
        <div className="h-10" />
        {products.map((product) => (
          <div
            className="grid grid-cols-1 items-center gap-6 mb-16 lg:grid-cols-2"
            key={product.title}
          >
            <Image
              src={getSafeImageUrl(product.image)}
              className={`relative aspect-[1.618] h-auto w-full rounded-xl ${
                product.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
              }`}
              alt={`${product.title} product image`}
              width={800}
              height={495}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className={`flex items-center ${
                product.imagePosition === "left"
                  ? "lg:order-2 lg:ml-4 xl:ml-8"
                  : "lg:order-1 lg:mr-4 xl:mr-8"
              }`}
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <h4 className="font-founders-grotesk text-[36px] leading-none tracking-[-0.72px] text-dark md:text-[48px] md:tracking-[-0.96px] lg:text-[48px] lg:tracking-[-0.96px] xl:text-[56px] xl:tracking-[-1.12px]">
                    {product.title}
                  </h4>
                  <div className="space-y-6 font-abc-diatype text-[18px] leading-[130%] tracking-[-0.18px] text-gray-700 md:text-[20px] md:tracking-[-0.2px] lg:text-[20px] lg:tracking-[-0.2px] xl:text-[20px] xl:tracking-[-0.2px]">
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
