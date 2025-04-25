import React from "react";
import indianDog1 from "../../../public/indianDog1_1.jpg";
import indianDog2 from "../../../public/indianDog4_3.png";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <div className="mt-10 p-5 md:mt-0 md:p-0">
      <h1 className="mt-10 text-left text-4xl font-black sm:text-5xl md:mt-0 lg:text-7xl">
        What We Do?
      </h1>
      <div className="flex flex-col justify-between md:flex-row">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div className="flex flex-col">
        <h2 className="mt-1 mb-5 text-left text-xl font-semibold text-black/80 sm:text-2xl md:mt-2 md:mb-10 lg:text-3xl">
          Every Tail Deserves a Meal!
        </h2>
        <div className="mt-5 flex gap-5 md:mt-0">
          <Image
            src={indianDog1}
            alt="Indian Dog"
            className="rounded-xl sm:w-1/2 md:w-[30rem] lg:size-[450px]"
          />
          <Image
            src={indianDog2}
            alt="Indian Dog"
            className="hidden aspect-square w-1/2 rounded-xl object-cover sm:block md:hidden"
          />
        </div>
      </div>
      <SubSection1 />
    </div>
  );
};

const SubSection1 = () => {
  return (
    <div className="flex flex-col justify-center gap-8 md:mb-[-4rem] md:gap-5 lg:gap-10 xl:mb-0 xl:gap-5">
      <h2 className="max-w-sm text-2xl font-black sm:max-w-none sm:text-3xl md:text-3xl">
        We are a Non-Profit Organization
      </h2>
      <p className="max-w-[26rem] leading-7 font-semibold text-gray-600 sm:max-w-none sm:text-lg md:max-w-[26rem] md:text-sm md:leading-6 lg:text-base lg:leading-7">
        Nourish your pup, save a life. ♥️ Every meal you buy feeds your dog and
        supports street dogs in need. 100% profits go to their welfare. Help us
        make a difference, one bowl at a time. Join us in our mission to provide
        food, shelter, and care for street dogs.
      </p>
      <div className="max-w-sm text-left text-xl font-semibold xl:hidden">
        <p>“Feed Yours, Save Another.</p>
        <p>🐾 Every Bowl Brings Hope.”</p>
      </div>
      <button className="bg-blue shadow-blue w-max cursor-pointer rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-2xl/50 transition-all duration-300 ease-in-out hover:shadow-2xl/100 sm:text-base md:text-xs lg:text-sm">
        Learn More &gt;
      </button>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="hidden xl:block">
      <Image
        src={indianDog2}
        alt="Indian Dog"
        className="w-[300px] rounded-xl"
      />
      <div className="mt-8 max-w-sm text-center text-xl font-semibold">
        <p>“Feed Yours, Save Another.</p>
        <p>🐾 Every Bowl Brings Hope.”</p>
      </div>
    </div>
  );
};
