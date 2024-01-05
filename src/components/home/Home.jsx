// Local Files
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import Main from "./components/Main";
import Sub from "./components/Sub";
import HomeServices from "./components/HomeServices";
import Youtube from "./components/Youtube";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
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
