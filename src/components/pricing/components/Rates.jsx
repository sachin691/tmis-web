import React from "react";
import "./Pricing.css";
import PriceCard from "./PriceCard";
const Rates = () => {
  return (
    <div className="h-[40rem] rates ">
      <div className="flex justify-center">
        <p className="font-['rubik_doodle_shadow'] text-white text-4xl py-[2rem] font-bold">
          Starting Rates As Low As
        </p>
      </div>

      <div className="flex items-center gap-8 justify-center">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Rates;
