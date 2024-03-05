import React from "react";
import Intro from "./Intro";
import { Link, useNavigate } from "react-router-dom";
import { ArcElement, BarElement, CategoryScale, Chart as ChartJs, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { FaUsers } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import JobDetails from "./JobDetails";
import Search from "./Search";
import AllCandidate from "./AllCandidate";
ChartJs.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

const userData = {
  labels: ["Applied", "Total View"],
  datasets: [
    {
      label: "User Details",
      data: [5, 12],
      backgroundColor: ["rgb(59,130,246)", "rgb(245,165,36)"],
      borderWidth: 1,
      borderColor: ["yellow", "green"],
    },
  ],
};

const salesData = {
  labels: ["jan", "feb", "march", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  fontColor: "rgb(71,85,105)",
  datasets: [
    {
      label: "Jobs / Months",
      data: [10, 13, 12, 14, 16],
      backgroundColor: ["rgb(59,130,246)"],
      borderColor: ["rgb(245,165,36)"],
      borderWidth: 2,
    },
  ],
};

const content = [
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: 13,
  },
  {
    department: "IT",
    title: "Frontend Developer",
    des: 5,
  },
  {
    department: "DESIGN",
    title: "Design Manager",
    des: 6,
  },
  {
    department: "HUMAN REASOUCE",
    title: "Senior Product Manager",
    des: 7,
  },
  {
    department: "MARKETING",
    title: "Senior Product ",
    des: 8,
  },
  {
    department: "SALES",
    title: "Sales Manager",
    des: 2,
  },
];



const Admin = () => {
     
  const navigate = useNavigate()

  return (
    <div>
      {/* <div className="flex flex-row items-center justify-center py-[2rem]  ">
      
        <Link
          to="/Career/Create"
          className="bg-blue-500 text-white font-bold py-[0.8rem] px-[1.5rem] text-1xl rounded-xl"
        >
          Create Job
        </Link>
      </div> */}
      

      {/* <div className="flex flex-col justify-center items-center text-3xl font-bold p-[1rem]">
        <div className="border-b-2 ">
          <h1 className="text-yellow-500">Admin DashBoard</h1>
        </div>

        <div className="flex md:flex-row flex-col gap-10 items-center justify-between py-[5rem] px-[2rem]">
          <div className="flex flex-col justify-center items-center">
            <div className="lg:w-80 lg:h-80 w-60 h-60">
              <Pie data={userData} />
            </div>
            <div className="flex flex-row items-center justify-center py-[2rem]">
              <div className="flex flex-col justify-center items-center">
                <p className="font-semibold text-3xl">Total Applied </p>

                <h3 className="text-2xl font-bold">5</h3>
                <FaUsers className="text-blue-500 text-5xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="sm:h-60 lg:h-80 h-auto md:w-full ">
              <Bar className="   w-[20rem] md:w-[40rem]" data={salesData} />
            </div>
            <div className="flex flex-row items-center py-[2rem]">
              <div className="flex flex-col justify-center items-center">
                <p className="font-semibold text-3xl">Total Post </p>

                <h3 className="text-2xl font-bold">5</h3>
                <MdOutlineLocalPostOffice className="text-blue-500 text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
{/* 
      <div className="flex justify-center items-center p-[2rem]">
        <h1 className="text-3xl font-bold text-black border-b-2 border-black">Job Description</h1>
      </div> 

       <JobDetails /> */}

      

      <AllCandidate/>

      {/* <div className="flex flex-wrap gap-5 items-center justify-center p-[3rem]">
        {content.map((data) => (
          <div className="flex flex-col items-center justify-between p-[1rem] w-[18rem] bg-slate-200 rounded-xl border-t-2 border-green-400">
            <div className="py-[0.5rem] px-[1rem]">
              <h2 className="font-bold">{data.department}</h2>
            </div>

            <div className="px-[1rem] flex flex-row items-center justify-between gap-[4rem] text-gray-600  ">
              <div>
                <h3 className="py-[0.3rem] text-gray-600">Openings</h3>
                <p className="text-3xl text-center">{data.des}</p>
              </div>
              <div>
                <h3 className="py-[0.3rem] text-gray-600">Candidates</h3>
                <p className="text-3xl text-center ">{data.des}</p>
              </div>
            </div>
            <div className="p-[1rem]">
              <button
              onClick={() => navigate('/department/jobs', {state:{...data}})}
              className="text-white bg-blue-500 py-[0.8rem] px-[1.5rem] font-bold rounded-xl">View</button>
            </div>
          </div>
        ))}
      </div>
       */}
    </div>
  );
};

export default Admin;
