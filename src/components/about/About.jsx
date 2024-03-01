import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import Values from "./components/Values";
import { updateCheckoutPermit } from "../../store/checkoutPermitSlice";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  dispatch(updateCheckoutPermit(false));

  return (
    <>
      <AboutUs />
      <Values />
      <OurMission />
    </>
  );
};

export default About;
