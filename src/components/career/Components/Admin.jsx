import React from "react";
import Intro from "./Intro";
import { Link } from "react-router-dom";

const content = [
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consecteturn adipisicing elit. Delectus",
  },
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consecteturn adipisicing elit. Delectus",
  },
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consecteturn adipisicing elit. Delectus",
  },
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consecteturn adipisicing elit. Delectus",
  },
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consecteturn adipisicing elit. Delectus",
  },
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consecteturn adipisicing elit. Delectus",
  },
  {
    department: "MARKETING",
    title: "Senior Product Manager",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consecteturn adipisicing elit. Delectus",
  },
];

const Admin = () => {
  return (
    <div>
      <Intro />
      <div className="flex items-center justify-center p-[5rem]">
        <Link
          to="/Career/Create"
          className="bg-blue-500 text-white font-bold py-[0.8rem] px-[1.5rem] text-1xl rounded-xl"
        >
          Create Job
        </Link>
      </div>

      <div className="flex justify-center items-center text-3xl font-bold">
        <div className="border-b-2 ">
          <h1 className="text-yellow-500">Active Jobs</h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 p-[5rem]">
        {content.map((data) => (
          <div className="flex flex-col items-start justify-between p-[1rem] bg-slate-100 rounded-xl">
            <div className="py-[0.5rem] px-[1rem]">
              <h2 className="text-gray-400">{data.department}</h2>
            </div>
            <div className="px-[1rem]">
              <h1 className="font-bold">{data.title}</h1>
            </div>
            <div className="px-[1rem]  text-gray-600">
              <h3 className="py-[0.3rem] text-gray-600">Description</h3>
              <p>{data.des}</p>
            </div>
            <div className="p-[1rem]  text-gray-600">
              <p>Posted: 5 Days Ago</p>
            </div>
            <div className="p-[1rem]">
              <button className="text-white bg-red-500 py-[0.8rem] px-[1.5rem] font-bold rounded-xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col items-start justify-between p-[3rem] bg-slate-100">
        <div className="py-[0.5rem] px-[1rem]">
          <h2 className="text-gray-400">MARKETING</h2>
        </div>
        <div className="px-[1rem]">
          <h1 className="font-bold">Senior Product Manager</h1>
        </div>
        <div className="px-[1rem]  text-gray-600">
          <h3 className="py-[0.3rem] text-gray-600">Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus
          </p>
        </div>
        <div className="p-[1rem]">
          <button className="text-white bg-blue-500 py-[0.8rem] px-[1.5rem] font-bold rounded-xl">Delete</button>
        </div>
      </div> */}
    </div>
  );
};

export default Admin;
