import React from "react";
import LabPup from "../../../public/LabPup.png";
import Image from "next/image";
import Badge from "../../../public/badge.png";
import Pug from "../../../public/pug.jpg";
import Golden from "../../../public/golden.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse items-center justify-around p-10 md:mt-10 md:flex-row">
      <div>
        <BigText />
        <Description />
        <Buttons />
      </div>

      <div className="grid grid-cols-2 gap-2 md:mb-0 md:gap-4">
        <Image
          src={Golden}
          alt="Golden"
          className="size-[150px] rounded-xl md:size-[250px]"
        />
        <div className="flex w-max items-end">
          <WeAreNonProfit className="md:size-44" />
        </div>
        <div className="flex justify-end">
          <Image
            src={Badge}
            alt="Badge"
            className="badge_animation size-32 md:size-44"
          />
        </div>
        <Image
          src={Pug}
          alt="Pug"
          className="size-[130px] rounded-xl md:size-[200px]"
        />
      </div>
    </div>
  );
}

const BigText = () => {
  return (
    <div className="hidden flex-col items-center text-center text-6xl font-black md:flex md:items-start md:text-left md:text-8xl">
      <h1>Every Tail</h1>
      <h1>Deserves</h1>
      <h1 className="flex items-center gap-2 leading-none">
        <span>A</span>
        <span>
          <Image
            src={LabPup}
            alt="Lab Pup"
            className="mt-[-1.4rem] size-18 md:mt-[-2rem] md:size-28"
          />
        </span>
        <span>Meal!</span>
      </h1>
    </div>
  );
};

const Description = () => {
  return (
    <div className="mt-7 max-w-lg text-center text-sm md:text-left md:text-lg">
      <p className="text-black/80">
        Every meal is a celebration of joy! Relish the happiness of our fresh
        ingredients. Join us for a delightful journey. Feel the love of our
        sweet touch with a non-profit cause.
      </p>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="mt-4 flex justify-center gap-12 md:mt-7 md:justify-start">
      <button className="bg-blue shadow-blue cursor-pointer rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-2xl/50 transition-all duration-300 ease-in-out hover:shadow-2xl/100 md:text-base">
        <Link href={"/products"}>Buy Now!</Link>
      </button>
      <button className="gap-2 text-sm font-bold md:text-base">
        Learn More &gt;
      </button>
    </div>
  );
};

const WeAreNonProfit = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} shadow-orange bg-orange flex aspect-square flex-col items-center justify-center rounded-xl p-2 font-mono text-white shadow-2xl/50`}
    >
      <h1 className="md:text-xl">We Are</h1>
      <h1 className="font-black md:text-xl">Non-Profit</h1>
    </div>
  );
};
