import React from "react";
import Hero from "./(components)/Hero";
import Features from "./(components)/Features";
import WhatWeDo from "./(components)/WhatWeDo";

export default function page() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Features />
      <WhatWeDo />
    </div>
  );
}
