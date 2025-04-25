"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ragnaur from "../../../public/ragnaur.png";
import Link from "next/link";
import { AlignJustify, CircleX } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,

        y: -20,
        filter: "blur(20px)",
        transition: { ease: "easeIn", duration: 0.22 },
      }}
      animate={{
        opacity: 1,

        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", duration: 2 },
      }}
    >
      {isOpen && <MenuBarOptions handleClick={handleClick} />}
      <div className="container mx-auto my-8">
        <nav className="border-grey relative grid grid-cols-3 items-center rounded-xl border-2 px-7 text-sm font-semibold">
          <div className="flex justify-start gap-4">
            <ul className="flex gap-4">
              <li className="hidden md:block">
                <Link href={"/products"}>Products</Link>
              </li>
              <li className="hidden md:block">
                <Link href={"/diy-recipes"}>DIY Recipes</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Link href={"/"} className="bg-grey flex items-center gap-2 pr-4">
              <Image src={ragnaur} alt="logo of ragnaor" className="size-14" />
              <h1 className="-ml-2 pr-14 text-lg font-bold uppercase sm:pr-0 md:p-0">
                Ragnaor
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-4">
            <ul className="flex gap-4">
              <li className="hidden md:block">
                <Link href={"/login"}>Login</Link>
              </li>
              <li onClick={handleClick} className="cursor-pointer">
                <AlignJustify />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

const MenuBarOptions = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="absolute z-10 grid h-screen w-full place-items-center bg-black/80 backdrop-blur-xl">
      <ul className="flex flex-col items-center gap-6 text-2xl font-semibold text-white *:cursor-pointer">
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/diy-recipes"}>DIY Recipes</Link>
        </li>
        <li>
          <Link href={"#about"}>About Us</Link>
        </li>
        <li>
          <Link href={"#footer"}>Contact Us</Link>
        </li>
        <li>Login</li>
        <CircleX onClick={handleClick} />
      </ul>
    </div>
  );
};
