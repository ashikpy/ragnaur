import React from "react";
import Image from "next/image";
import ragnaur from "../../../public/ragnaur.png";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

export default function Navbar() {
  return (
    <div className="container mx-auto my-8">
      <nav className="border-grey relative grid grid-cols-3 items-center rounded-xl border-2 px-7 text-sm font-semibold">
        <div className="flex justify-start gap-4">
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/diy-recipes"}>DIY Recipes</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Link href={"/"} className="bg-grey flex items-center gap-2 pr-4">
            <Image src={ragnaur} alt="logo of ragnaur" className="size-14" />
            <h1 className="-ml-2 text-lg font-bold uppercase">Ragnaur</h1>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4">
          <ul className="flex gap-4">
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <AlignJustify />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
