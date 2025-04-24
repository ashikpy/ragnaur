import React from "react";
import { ProductData } from "@/utils/Data";
import ProductCard from "@/utils/ProductCard";

export default function Products() {
  return (
    <div className="">
      <h1 className="text-right text-7xl font-black">Our Products</h1>
      <div className="mt-14">
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
