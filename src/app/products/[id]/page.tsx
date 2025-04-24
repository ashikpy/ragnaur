import Image, { StaticImageData } from "next/image";

import LeftSection from "./(components)/LeftSection";
import { ProductData } from "@/utils/Data";
import ProductCard from "@/utils/ProductCard";

export default function page({ params }: { params: { id: number } }) {
  const data = ProductData[params.id];
  console.log(data);

  return (
    <>
      <div className="mt-10 flex">
        <TopSection data={data} />
      </div>
      <ButtonSection />
    </>
  );
}

interface ProductData {
  id: number;
  Img: StaticImageData;
  title: string;
  price: string;
  available: boolean;
  rating: number;
  meatContent: number;
  description: string;
  type: string;
  nonVeg: boolean;
}

const TopSection = ({ data }: { data: ProductData }) => {
  return (
    <>
      <div className="grid w-full place-items-center">
        <Image src={data.Img} alt={data.title} />
      </div>
      <LeftSection
        title={data.title}
        desc={data.description}
        price={data.price}
        type={data.type}
        rating={data.rating}
        meatContent={data.meatContent}
        nonVeg={data.nonVeg}
        onStock={data.available}
      />
    </>
  );
};

const ButtonSection = () => {
  return (
    <>
      <h1 className="mt-20 text-6xl font-black">Suggested Products</h1>
      <div className="mt-10 grid grid-cols-4 gap-7">
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
    </>
  );
};
