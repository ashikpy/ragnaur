"use client";

import React from "react";
import LabPup from "../../../public/LabPup.png";
import Image from "next/image";
import Badge from "../../../public/badge.png";
import Pug from "../../../public/pug.jpg";
import Golden from "../../../public/golden.jpg";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse items-center justify-around gap-10 p-10 md:mt-10 md:flex-row lg:gap-0">
      <div>
        <BigText />
        <Description />
        <Buttons />
      </div>

      <div className="grid grid-cols-2 gap-2 md:mb-0 md:gap-4">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: -20,
            filter: "blur(20px)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 1 },
          }}
        >
          <Image
            src={Golden}
            alt="Golden"
            className="size-[150px] rounded-xl sm:size-[250px] md:size-[150px] lg:size-[200px] xl:size-[250px]"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            x: 20,
            filter: "blur(20px)",
            transition: { ease: "easeIn", duration: 1.1 },
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 0.8 },
          }}
          className="flex w-max items-end"
        >
          <WeAreNonProfit className="sm:size-44 md:size-24 lg:size-33 xl:size-44" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
            filter: "blur(20px)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 1.2 },
          }}
          className="flex justify-end"
        >
          <Image
            src={Badge}
            alt="Badge"
            className="badge_animation size-32 sm:size-44 md:size-26 lg:size-40 xl:size-44"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
            filter: "blur(20px)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 1.3 },
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <Image
            src={Pug}
            alt="Pug"
            className="size-[130px] rounded-xl sm:size-[200px] md:size-[120px] lg:size-[180px] xl:size-[200px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

const BigText = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
        filter: "blur(5px)",
        transition: { ease: "easeIn", duration: 0.22 },
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", duration: 0.7 },
      }}
      className="hidden flex-col items-center text-center text-6xl font-black md:flex md:items-start md:text-left lg:text-7xl xl:text-8xl"
    >
      <h1>Every Tail</h1>
      <h1>Deserves</h1>
      <h1 className="flex items-center gap-2 leading-none">
        <span>A</span>
        <span>
          <Image
            src={LabPup}
            alt="Lab Pup"
            className="mt-[-1.4rem] size-20 lg:mt-[-2rem] lg:size-28"
          />
        </span>
        <span>Meal!</span>
      </h1>
    </motion.div>
  );
};

const Description = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(5px)",
        transition: { ease: "easeIn", duration: 0.22 },
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", duration: 0.7 },
      }}
      className="max-w-lg text-center text-sm sm:text-lg md:mt-5 md:text-left md:text-xs lg:mt-7 lg:text-sm xl:text-left xl:text-lg"
    >
      <p className="text-black/80 md:max-w-xs lg:max-w-sm xl:max-w-none">
        Every meal is a celebration of joy! Relish the happiness of our fresh
        ingredients. Join us for a delightful journey. Feel the love of our
        sweet touch with a non-profit cause. We are committed to making a
        difference!
      </p>
    </motion.div>
  );
};

const Buttons = () => {
  return (
    <div className="mt-4 flex justify-center gap-12 sm:mt-7 md:mt-5 md:justify-start lg:mt-7">
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
          filter: "blur(5px)",
          transition: { ease: "easeIn", duration: 0.22 },
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { type: "spring", duration: 0.7 },
        }}
      >
        <button className="bg-blue shadow-blue cursor-pointer rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-2xl/50 transition-all duration-300 ease-in-out hover:shadow-2xl/100 sm:text-base md:text-sm">
          <Link href={"/products"}>Buy Now!</Link>
        </button>
      </motion.div>
      <motion.button
        initial={{
          opacity: 0,
          x: 20,
          filter: "blur(5px)",
          transition: { ease: "easeIn", duration: 0.22 },
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { type: "spring", duration: 0.7 },
        }}
        className="gap-2 text-sm font-bold sm:text-base md:text-sm"
      >
        Learn More &gt;
      </motion.button>
    </div>
  );
};

const WeAreNonProfit = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} shadow-orange bg-orange flex aspect-square flex-col items-center justify-center rounded-xl p-2 font-mono text-white shadow-2xl/50`}
    >
      <h1 className="sm:text-xl md:text-xs lg:text-base xl:text-xl">We Are</h1>
      <h1 className="font-black sm:text-xl md:text-xs lg:text-base xl:text-xl">
        Non-Profit
      </h1>
    </div>
  );
};
