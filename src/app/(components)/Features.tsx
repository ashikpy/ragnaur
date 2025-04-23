import { Beef, MapPinHouse } from "lucide-react";
import React from "react";

export default function Features() {
  return (
    <div className="my-10">
      <div className="bg-yellow flex w-full gap-24 rounded-2xl p-10">
        <Feature1 />
        <Feature2 />

        <div className="seperator w-1"></div>

        <div className="flex flex-col justify-center text-3xl font-semibold">
          <h1>We Care About Your Dogs, Because They&apos;re Family!</h1> And We
          ❤️ it
        </div>
      </div>
    </div>
  );
}

const Feature1 = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white p-2 px-4">
          <Beef />
        </div>
        <h1 className="text-xl font-semibold">Highy Nutritial</h1>
      </div>
      <p className="mt-5 max-w-lg leading-7 font-semibold">
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
        <h1 className="text-xl font-semibold">All-India Shipping</h1>
      </div>
      <p className="mt-5 max-w-lg leading-7 font-semibold">
        We deliver to every corner of India, ensuring your pet&apos;s favorite
        meals reach you no matter where you are.
      </p>
    </div>
  );
};
