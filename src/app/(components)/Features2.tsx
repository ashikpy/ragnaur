import React from "react";

const Features = [
  {
    icon: "🐶",
    title: "Nourishing Every Tail",
    description:
      "We provide protein-rich meals made from ethically sourced chicken, fish, and lamb to ensure every dog gets the nutrition they deserve — because health starts in the bowl.",
  },
  {
    icon: "🌱",
    title: "Non-Profit, All Heart",
    description:
      "As a non-profit, your support directly funds meals for rescued and stray dogs. For every bag you buy, we donate one to a shelter — because every dog matters.",
  },
  {
    icon: "❤️",
    title: "Gut-Friendly, Vet-Approved",
    description:
      "Our recipes skip the fillers and focus on what matters: real meat, essential nutrients, and digestive support — all developed in partnership with veterinarians.",
  },
];

export default function Features2() {
  return (
    <div className="">
      <h1 className="text-center text-7xl font-black">Why Choose Us?</h1>
      <div className="my-10 flex justify-center gap-5">
        {Features.map((feature, index) => {
          const borderColors = [
            "border-orange",
            "border-yellow",
            "border-green",
          ];
          const bgColors = ["bg-orange/20", "bg-yellow/20", "bg-green/20"];
          return (
            <SectionCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              borderColor={borderColors[index]}
              bgColor={bgColors[index]}
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
}: {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  bgColor?: string;
}) {
  return (
    <div
      className={`flex max-w-sm flex-col items-center rounded-lg border-2 p-8 py-10 text-center shadow-xl/5 ${borderColor} ${bgColor}`}
    >
      <div
        className={`grid size-[5rem] place-items-center rounded-full border-2 text-4xl font-bold ${borderColor} ${bgColor}`}
      >
        <p>{icon}</p>
      </div>
      <h3 className="mt-10 text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-black/80">{description}</p>
    </div>
  );
}
