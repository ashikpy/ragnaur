import React from "react";

const Features = [
  {
    icon: "🐶",
    title: "Nourishing Every Tail",
    description:
      "We provide protein-rich meals made from ethically sourced chicken, fish, and lamb to ensure every dog gets the nutrition they deserve — because health starts in the bowl.",
  },
  {
    icon: "❤️",
    title: "Non-Profit, All Heart",
    description:
      "As a non-profit, your support directly funds meals for rescued and stray dogs. For every bag you buy, we donate one to a shelter — because every dog matters.",
  },
  {
    icon: "🧑🏻‍🔬",
    title: "Gut-Friendly, Vet-Approved",
    description:
      "Our recipes skip the fillers and focus on what matters: real meat, essential nutrients, and digestive support — all developed in partnership with veterinarians.",
  },
];

export default function Features2() {
  return (
    <div className="mt-10 md:mt-0">
      <h1 className="mb-7 text-center text-3xl font-black md:mb-20 md:text-7xl">
        Why Choose Us?
      </h1>
      <div className="m-4 flex flex-col items-center justify-center gap-10 md:m-0 md:flex-row md:items-stretch md:gap-5">
        {Features.map((feature, index) => {
          const borderColors = [
            "border-orange",
            "border-yellow",
            "border-green",
          ];
          const bgColors = ["bg-orange/20", "bg-yellow/20", "bg-green/20"];
          const shadowColors = [
            "shadow-orange",
            "shadow-yellow",
            "shadow-green",
          ];
          return (
            <SectionCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              borderColor={borderColors[index]}
              bgColor={bgColors[index]}
              shadowColors={shadowColors[index]}
            />
          );
        })}
      </div>
    </div>
  );
}

function SectionCard({
  icon,
  title,
  description,
  borderColor,
  bgColor,
  shadowColors,
}: {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  bgColor?: string;
  shadowColors?: string;
}) {
  return (
    <div
      className={`flex max-w-sm flex-col items-center rounded-lg border-2 p-8 py-10 text-center shadow-xl/25 sm:max-w-none ${borderColor} ${bgColor} ${shadowColors}`}
    >
      <div
        className={`grid size-[5rem] place-items-center rounded-full border-2 text-4xl font-bold ${borderColor} ${bgColor}`}
      >
        <p>{icon}</p>
      </div>
      <h3 className="mt-10 text-xl font-bold md:text-sm lg:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/80 sm:text-base md:text-xs lg:text-sm xl:text-base xl:leading-7">
        {description}
      </p>
    </div>
  );
}
