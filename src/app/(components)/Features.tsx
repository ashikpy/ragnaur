"use client";
import { Beef, MapPinHouse } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

export default function Features() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        filter: "blur(20px)",
        transition: { ease: "easeIn", duration: 0.22 },
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { type: "spring", duration: 0.2 },
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="flex justify-center md:mt-[-8rem] md:block"
    >
      <div className="bg-yellow m-4 flex flex-col items-center gap-14 rounded-2xl p-10 sm:max-w-lg md:mt-[4rem] md:max-w-none md:flex-row md:items-stretch md:gap-10 xl:gap-20">
        <Feature1 />
        <Feature2 />

        <div className="seperator -my-5 h-1 w-full opacity-50 md:h-auto md:w-1"></div>
        <div className="flex flex-col justify-center text-center text-xl font-semibold sm:max-w-xs md:max-w-none md:text-left md:text-sm lg:text-lg xl:text-2xl">
          <h1>We Care About Your Dogs, Because They&apos;re Family!</h1> And We
          ❤️ it
        </div>
      </div>
    </motion.div>
  );
}

const Feature1 = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white p-2 px-4">
          <Beef />
        </div>
        <h1 className="text-xl font-black md:text-sm lg:text-lg xl:text-xl">
          Highy Nutritial
        </h1>
      </div>
      <p className="mt-5 max-w-lg text-base leading-7 font-semibold md:max-w-none md:text-sm lg:text-base">
        Our meals are packed with essential nutrients, ensuring your furry
        friend gets the best nutrition possible.
      </p>
    </div>
  );
};

const Feature2 = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white p-2 px-4">
          <MapPinHouse />
        </div>
        <h1 className="text-xl font-black md:text-sm lg:text-lg xl:text-xl">
          All-India Shipping
        </h1>
      </div>
      <p className="mt-5 max-w-lg text-base leading-7 font-semibold md:max-w-none md:text-sm lg:text-base">
        We deliver to every corner of India, ensuring your pet&apos;s favorite
        meals reach you no matter where you are.
      </p>
    </div>
  );
};
