"use client";

import { Minus, Plus, Star } from "lucide-react";
import React, { useState } from "react";

export default function LeftSection({
  title,
  desc,
  price,
  type,
  rating,
  meatContent,
  nonVeg,
  onStock,
}: {
  title: string;
  desc: string;
  price: string;
  type: string;
  rating: number;
  meatContent: number;
  nonVeg: boolean;
  onStock: boolean;
}) {
  const [cartNumber, setCartNumber] = useState(1);

  return (
    <div
      className={`${onStock ? "bg-grey border border-black/10 shadow" : "border-2 border-red-500 bg-red-500/10"} relative m-4 flex flex-col gap-5 overflow-hidden rounded-xl p-5 md:m-0 md:mt-10 md:p-20 lg:mt-0`}
    >
      {!onStock && <OutOfStockNotice />}

      <p className="text-lg font-semibold text-orange-400 uppercase">{type}</p>
      <h1 className="-mt-5 text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-2 font-bold">
        <Star fill="#E2B060" stroke="#E2B060" />
        {rating}/10
      </div>
      <p className="max-w-3xl text-lg font-semibold opacity-60">{desc}</p>

      <div className="flex w-max gap-8 rounded-md border-2 border-black/20 p-3 px-6">
        <div className="">
          <p className="text-sm font-bold uppercase opacity-60">MEAL</p>
          <p className="text-xl font-black">
            {meatContent}
            <span className="text-base font-bold opacity-60">%</span>
          </p>
        </div>
        <div className="border opacity-20"></div>
        <div className="">
          <p className="text-sm font-bold uppercase opacity-60">Non-Veg</p>
          <p className="text-xl font-black">{nonVeg ? "Yes" : "No"}</p>
        </div>
      </div>
      <p
        className={`mt-3 text-4xl font-bold ${!onStock ? "text-red-400 line-through" : ""}`}
      >
        ₹ {price}
      </p>
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => setCartNumber(cartNumber > 1 ? cartNumber - 1 : 1)}
          className="rounded border border-black p-1"
        >
          <Minus />
        </button>
        <p className="px-2 text-2xl font-bold uppercase">{cartNumber}</p>
        <button
          onClick={() => setCartNumber(cartNumber + 1)}
          className={`rounded border p-1 ${cartNumber < 1 ? "border-white bg-black text-white" : "border-black"}`}
        >
          <Plus />
        </button>
      </div>
      <div
        className={`buttons flex gap-5 font-bold ${onStock ? "opacity-100" : "opacity-50"}`}
      >
        <button
          className={`rounded-lg border border-black/20 bg-white p-4 ${onStock ? "cursor-pointer" : "cursor-not-allowed line-through"}`}
        >
          Add To Cart
        </button>
        <button
          className={`rounded-lg bg-black p-4 text-white ${onStock ? "cursor-pointer" : "cursor-not-allowed line-through"}`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

const OutOfStockNotice = () => {
  return (
    <div className="absolute top-0 right-0 flex items-center gap-2 rounded-bl-xl bg-black p-2 px-5 text-sm text-white md:text-base">
      <p className="font-bold">Out Of Stock</p>
      {/* <OctagonX /> */}
    </div>
  );
};
