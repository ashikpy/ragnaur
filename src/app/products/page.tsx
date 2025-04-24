import React from "react";
import ProductCard from "@/utils/ProductCard";
import { ProductData } from "@/utils/Data";

export default function page() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-7xl font-black">Our Products</h1>
      <div className="mt-14 grid grid-cols-4 gap-7">
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
