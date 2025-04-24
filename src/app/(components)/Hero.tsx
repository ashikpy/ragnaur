import React from "react";
import LabPup from "../../../public/LabPup.png";
import Image from "next/image";
import Badge from "../../../public/badge.png";
import Pug from "../../../public/pug.jpg";
import Golden from "../../../public/golden.jpg";

export default function Hero() {
  return (
    <div className="mt-10 flex items-center justify-around p-10">
      <div>
        <BigText />
        <Description />
        <Buttons />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Image src={Golden} alt="Golden" className="size-[250px] rounded-xl" />
        <div className="flex items-end">
          <WeAreNonProfit className="size-44" />
        </div>
        <div className="flex justify-end">
          <Image src={Badge} alt="Badge" className="badge_animation size-44" />
        </div>

        <Image src={Pug} alt="Pug" className="size-[200px] rounded-xl" />
      </div>
    </div>
  );
}

const BigText = () => {
  return (
    <div className="flex flex-col text-8xl font-black">
      <h1>Every Tail</h1>
      <h1>Deserves</h1>
      <h1 className="flex items-center gap-2 leading-none">
        <span>A</span>
        <span>
          <Image src={LabPup} alt="Lab Pup" className="mt-[-2rem] size-28" />
        </span>
        <span>Meal!</span>
      </h1>
    </div>
  );
};

const Description = () => {
  return (
    <div className="mt-7 max-w-lg text-lg">
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
    <div className="mt-7 flex gap-12">
      <button className="bg-blue shadow-blue cursor-pointer rounded-xl px-8 py-4 font-semibold text-white shadow-2xl/50 transition-all duration-300 ease-in-out hover:shadow-2xl/100">
        Buy Now!
      </button>
      <button className="gap-2 font-bold">Learn More &gt;</button>
    </div>
  );
};

const WeAreNonProfit = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} shadow-orange bg-orange flex aspect-square flex-col items-center justify-center rounded-xl p-2 font-mono text-white shadow-2xl/50`}
    >
      <h1 className="text-xl">We Are</h1>
      <h1 className="text-xl font-black">Non-Profit</h1>
    </div>
  );
};
