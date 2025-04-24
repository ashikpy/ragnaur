import React from "react";
import ProductCard from "@/utils/ProductCard";
import { ProductData } from "@/utils/Data";

export default function page() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-black md:text-7xl">
        Our Products
      </h1>
      <div className="mt-10 grid gap-7 md:mt-14 md:grid-cols-4">
        {ProductData.map((product, index) => (
          <div key={index} className="flex justify-center">
            <ProductCard
              id={product.id}
              Img={product.Img}
              title={product.title}
              price={product.price}
              available={product.available}
              description={product.description}
            />
          </div>
        ))}
        {ProductData.slice()
          .reverse()
          .map((product, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard
                id={product.id}
                Img={product.Img}
                title={product.title}
                price={product.price}
                available={product.available}
                description={product.description}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
