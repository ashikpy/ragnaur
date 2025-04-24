import React from "react";
import Image, { StaticImageData } from "next/image";
import { OctagonX, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  Img: StaticImageData;
  title: string;
  price: string;
  description: string;
  available?: boolean;
  id: number;
}

export default function ProductCard({
  id,
  Img,
  title,
  price,
  description,
  available,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
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
            ₹ {price}
          </div>
          <button
            className={`flex items-center justify-center gap-2 rounded-lg bg-black p-1 px-3 text-sm text-white ${available ? "cursor-pointer opacity-100" : "cursor-not-allowed line-through opacity-50"}`}
          >
            Add to Cart <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
