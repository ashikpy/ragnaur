import React from "react";
import Image, { StaticImageData } from "next/image";

import { OctagonX, ShoppingCart } from "lucide-react";
import { ProductData } from "@/utils/ProductData";

export default function Products() {
  return (
    <div className="my-20">
      <h1 className="text-right text-7xl font-black">Our Products</h1>
      <div className="mt-10">
        <ProductsSection />
      </div>
    </div>
  );
}

const ProductsSection = () => {
  return (
    <div className="grid grid-cols-4 gap-7">
      {ProductData.map((product, index) => (
        <div key={index} className="flex justify-center">
          <ProductCard
            Img={product.Img}
            title={product.title}
            price={product.price}
            available={product.available}
            description={product.description}
          />
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({
  Img,
  title,
  price,
  description,
  available,
}: {
  Img: StaticImageData;
  title: string;
  price: string;
  description: string;
  available?: boolean;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${available ? "bg-grey border-slate-300" : "border-red-500 bg-red-500/10"} `}
    >
      <div className="grid place-items-center p-5 px-10">
        <Image src={Img} alt={title} className="size-[200px] rounded-xl p-2" />
      </div>
      <div className="flex flex-col justify-center bg-white p-4">
        <h2 className="text-xl font-bold">
          {title}

          <div className="absolute top-0 right-0 p-5">
            {!available && <OctagonX />}
          </div>
        </h2>
        <p className="mt-2 max-w-xs text-sm leading-6 text-black/80">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div
            className={`font-bold ${!available ? "text-red-500 line-through" : ""}`}
          >
            $ {price}
          </div>
          <button
            className={`flex items-center justify-center gap-2 rounded-lg bg-black p-1 px-3 text-sm text-white ${available ? "cursor-pointer opacity-100" : "cursor-not-allowed line-through opacity-50"}`}
          >
            Add to Cart <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
