import React from "react";
import Intro from "./Components/Intro";
import JobLook from "./Components/JobLook";
import Tittle from "./Components/Tittle";
import SearchBar from "./Components/SearchBar";

const Career = () => {
  return (
    <div>
      <Intro />
      <Tittle/>
      <SearchBar/>
      <JobLook/>
    </div>
  );
};

export default Career;
