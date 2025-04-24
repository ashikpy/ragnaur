import React from "react";
import { ProductData } from "@/utils/Data";
import ProductCard from "@/utils/ProductCard";

export default function Products() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-5xl font-black md:text-right md:text-7xl">
        Our Products
      </h1>
      <div className="mt-10 md:mt-14">
        <ProductsSection />
      </div>
    </div>
  );
}

const ProductsSection = () => {
  return (
    <div className="grid gap-7 md:grid-cols-4">
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
    </div>
  );
};
