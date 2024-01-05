import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import React from "react";
import PricingHead from "./components/PricingHead";
import Rates from "./components/Rates";
const Pricing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Pricing"));
  return (
    <>
      <PricingHead />
      <Rates />
    </>
  );
};

export default Pricing;
