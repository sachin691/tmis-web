// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Main from "./components/Main";
import Sub from "./components/Sub";
import HomeServices from "./components/HomeServices";
import Youtube from "./components/Youtube";
import { updateCheckoutPermit } from "../../store/checkoutPermitSlice";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  dispatch(updateCheckoutPermit(false));

  return (
    <>
      <Main />
      <Sub />
      <HomeServices />
      <Youtube />
    </>
  );
};

export default Home;
