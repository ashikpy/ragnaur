import React from "react";
import Hero from "./(components)/Hero";
import Features from "./(components)/Features";
import Products from "./(components)/Products";
import WhatWeDo from "./(components)/WhatWeDo";
import Features2 from "./(components)/Features2";

export default function page() {
  return (
    <div className="flex flex-col md:gap-36">
      <Hero />
      <Features />
      <Products />
      <WhatWeDo />
      <Features2 />
    </div>
  );
}
