import React from "react";
import { useLocation } from "react-router-dom";
import JobDetails from "./JobDetails";



const DepartWiseJob = () => {
    const { state } = useLocation();
  return (
    <div>
      <div className="flex justify-center items-center p-[2rem]">
        <h1 className="text-3xl font-bold text-black border-b-2 border-black">Job Description</h1>
      </div> 

       <JobDetails />
    </div>
  );
};

export default DepartWiseJob;
