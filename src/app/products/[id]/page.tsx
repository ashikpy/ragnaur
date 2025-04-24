import Image, { StaticImageData } from "next/image";

import LeftSection from "./(components)/LeftSection";
import { ProductData } from "@/utils/Data";
import ProductCard from "@/utils/ProductCard";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const data = ProductData[Number(params.id)];

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
    <div className="flex flex-col md:flex-row">
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
    </div>
  );
};

const ButtonSection = () => {
  return (
    <>
      <h1 className="mt-10 text-center text-3xl font-black md:mt-20 md:text-left md:text-6xl">
        Suggested Products
      </h1>
      <div className="mt-10 grid gap-7 md:grid-cols-4">
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
