import Image, { StaticImageData } from "next/image";

import LeftSection from "./(components)/LeftSection";
import { ProductData } from "@/utils/Data";
import ProductCard from "@/utils/ProductCard";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);
  const data = ProductData[productId];

  if (!data) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="text-3xl font-black">Product Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 flex">
        <TopSection data={data} />
      </div>
      <ButtonSection />
    </>
  );
}

interface ProductDataInterface {
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

const TopSection = ({ data }: { data: ProductDataInterface }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="grid w-full place-items-center">
        <Image
          src={data.Img}
          alt={data.title}
          className="w-[20rem] lg:w-auto"
        />
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
      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
