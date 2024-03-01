import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import PricingHead from "./components/PricingHead";
import Rates from "./components/Rates";
import { updateCheckoutPermit } from "../../store/checkoutPermitSlice";

const Pricing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Pricing"));
  dispatch(updateCheckoutPermit(false));

  return (
    <>
      <PricingHead />
      <Rates />
    </>
  );
};

export default Pricing;
