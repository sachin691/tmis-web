import React from "react";
import { useNavigate } from "react-router-dom";

const content = [
  {
    jobid: 12548,
    jobtitle: "Frontend Developer",
    Departemnt: "Sales",
    Date: "05-sep-2023",
    jobdes: "Frontend role we need to develop frontend websiste for our cliend, who knows React redux etx",
  },
  {
    jobid: 12548,
    jobtitle: "Frontend Developer",
    Departemnt: "Sales",
    Date: "05-sep-2023",
    jobdes: "Frontend role we need to develop frontend websiste for our cliend, who knows React redux etx",
  },
  {
    jobid: 12548,
    jobtitle: "Frontend Developer",
    Departemnt: "Sales",
    Date: "05-sep-2023",
    jobdes: "Frontend role we need to develop frontend websiste for our cliend, who knows React redux etx",
  },
  {
    jobid: 12548,
    jobtitle: "Frontend Developer",
    Departemnt: "Sales",
    Date: "05-sep-2023",
    jobdes: "Frontend role we need to develop frontend websiste for our cliend, who knows React redux etx",
  },
  {
    jobid: 12548,
    jobtitle: "Frontend Developer",
    Departemnt: "Sales",
    Date: "05-sep-2023",
    jobdes: "Frontend role we need to develop frontend websiste for our cliend, who knows React redux etx",
  },
];

const JobDetails = () => {

  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center">
      <div className="md:flex flex-col justify-center items-center gap-4 h-auto lg:px-[4rem] p-[2rem] lg:inline-block hidden">
        <div className="flex flex-row items-center justify-between gap-[4rem] border-2  border-slate-600 text-1xl font-bold ">
          <div className="lg:px-[2rem]">
            <h1>Job Id</h1>
          </div>
          <div className="lg:px-[2rem]">
            <h1>job Title</h1>
          </div>
          <div className="lg:px-[2rem]">
            <h1>Department</h1>
          </div>
          
          <div className="lg:px-[2rem]">
            <button>Edit</button>
          </div>
          {/* <div className="lg:px-[2rem]">
            <button>View</button>
          </div> */}
          <div className="lg:px-[2rem]">Delete</div>
        </div>
        {content.map((data) => (
          <div className="flex flex-row items-center justify-between py-[1rem] lg:gap-[0rem] gap-[4rem] border-2">
            <div className="lg:px-[2rem]">
              <h1>{data.jobid}</h1>
            </div>
            <div className="lg:px-[2rem]">
              <h1>{data.jobtitle}</h1>
            </div>
            <div className="lg:px-[2rem]">
              <h1>{data.Departemnt}</h1>
            </div>
            {/* <div className="lg:px-[2rem]">
            <h1>{data.Date}</h1>
          </div> */}
            {/* <div className="px-[2rem]">
            <h1>{data.jobdes}</h1>
          </div> */}
            <div className="lg:px-[2rem]">
              <button className="py-[0.5rem] px-[1rem] bg-blue-500 text-white rounded-xl">Edit</button>
            </div>
            {/* <div className="lg:px-[2rem]">
              <button
                onClick={() => navigate("/allcandidate", { state: { ...data } })}
                className="py-[0.5rem] px-[1rem] bg-yellow-600 text-white rounded-xl"
              >
                View
              </button>
            </div> */}
            <div className="lg:px-[2rem]">
              <button className="py-[0.5rem] px-[1rem] bg-red-500 text-white rounded-xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
