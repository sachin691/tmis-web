import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import Values from "./components/Values";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  return (
    <>
      <AboutUs />
      <Values />
      <OurMission />
    </>
  );
};

export default About;
