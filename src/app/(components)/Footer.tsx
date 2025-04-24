import { Facebook, Instagram, MoveRight, Twitter, Youtube } from "lucide-react";
import React from "react";
import Image from "next/image";
import ragnaur from "../../../public/ragnaur.png";

export default function Footer() {
  return (
    <footer className="bg-grey mt-32 p-8">
      <div className="flex flex-col items-center justify-around gap-10 md:flex-row md:gap-0">
        <Left />
        <Middle />
        <Right />
      </div>
    </footer>
  );
}

const Left = () => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <Image src={ragnaur} alt="ragnaur" className="size-28" />
        <div className="-ml-5 flex flex-col items-start">
          <h1 className="text-3xl font-black uppercase">RAGNAOR</h1>
          <p className="text-sm font-semibold">Every Tail Deserves a Meal!</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="rounded-lg bg-white p-4">
          <Facebook className="size-6" />
        </div>
        <div className="rounded-lg bg-white p-4">
          <Instagram className="size-6" />
        </div>
        <div className="rounded-lg bg-white p-4">
          <Twitter className="size-6" />
        </div>
        <div className="rounded-lg bg-white p-4">
          <Youtube className="size-6" />
        </div>
      </div>
    </div>
  );
};
const Middle = () => {
  return (
    <div className="">
      <h2 className="text-center text-2xl font-bold md:text-left">
        Quick Links
      </h2>
      <div className="mt-3 flex justify-between gap-20 text-sm font-semibold">
        <ul className="leading-7">
          <li>About Us</li>
          <li>Blog</li>
          <li>Training</li>
        </ul>
        <ul className="text-right leading-7 md:text-left">
          <li>Gromming</li>
          <li>DIY Recipes</li>
          <li>Check Dog Health</li>
        </ul>
      </div>
    </div>
  );
};
const Right = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center text-2xl font-bold md:text-left">Contact</h2>
      <div className="flex items-center rounded-lg border-2">
        <input type="email" placeholder="Your Email " className="p-3" />
        <button type="submit" className="rounded-r-md bg-black p-3">
          <MoveRight color="white" />
        </button>
      </div>
      <p className="text-center md:text-left">contact@ragnaor.com</p>
    </div>
  );
};
