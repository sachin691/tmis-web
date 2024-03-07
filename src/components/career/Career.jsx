import React from "react";
import Intro from "./Components/Intro";
import Tittle from "./Components/Tittle";
import JobLook from "./Components/JobLook";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import { updateCheckoutPermit } from "../../store/checkoutPermitSlice";

const Career = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Career"));
  dispatch(updateCheckoutPermit(false));

  return (
    <div>
      <Intro />
      <Tittle />
      <JobLook />
    </div>
  );
};

export default Career;
