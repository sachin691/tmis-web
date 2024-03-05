import fileDownload from "js-file-download";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MdOutlineFileDownload } from "react-icons/md";
const content = [
  {
    Name: "Manish Kumar",
    email: "amanish123@gmail.com",
    contact: "95875426345",
    year: 2018,
    expected: 4.5,
    exp: 2,
    jobid: 124857,
  },
  {
    Name: "Manish Kumar",
    email: "amanish123@gmail.com",
    contact: "95875426345",
    year: 2018,
    expected: 4.5,
    exp: 2,
    jobid: 124857,
  },
  {
    Name: "Manish Kumar",
    email: "amanish123@gmail.com",
    contact: "95875426345",
    year: 2018,
    expected: 4.5,
    exp: 2,
    jobid: 124857,
  },
  {
    Name: "Manish Kumar",
    email: "amanish123@gmail.com",
    contact: "95875426345",
    year: 2018,
    expected: 4.5,
    exp: 2,
    jobid: 124857,
  },
];

const AllCandidate = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const Download = (data) => {
    fileDownload(data, "filename.pdf");
  };

  return (
    // <div className="flex flex-col justify-center items-center p-[3rem]">
    //     <h1 className="text-3xl font-bold border-b-1 border-black">All Candidates</h1>
    //   <div className="md:flex flex-col justify-center items-center gap-4 h-auto lg:px-[4rem] p-[2rem] lg:inline-block hidden">
    //     <div className="flex flex-row items-center justify-between gap-[4rem] border-2  border-slate-600 text-1xl font-bold ">
    //       <div className="lg:px-[2rem]">
    //         <h1>Job Id</h1>
    //       </div>
    //       <div className="lg:px-[2rem]">
    //         <h1>Name</h1>
    //       </div>

    //       <div className="lg:px-[2rem]">
    //         <button>Download</button>
    //       </div>
    //     </div>
    //     {content.map((data) => (
    //       <div className="flex flex-row items-center justify-between py-[1rem] lg:gap-[0rem] gap-[4rem] border-2">
    //         <div className="lg:px-[2rem]">
    //           <h1>{data.jobid}</h1>
    //         </div>
    //         <div className="lg:px-[2rem]">
    //           <h1>{data.jobtitle}</h1>
    //         </div>

    //         <div className="lg:px-[2rem]">
    //           <button

    //             onClick={() => Download(data.pdf)}
    //             className="py-[0.5rem] px-[1rem] bg-red-600 text-white rounded-xl"
    //           >
    //             PDF
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center md:p-[5rem] p-[1rem]">
      <div className="p-[2rem]">
        <h1 className="text-3xl text-1xl font-bold border-b-1 border-black">All Candidates</h1>
      </div>
      <Accordion>
        {content.map((data, i) => (
          <AccordionItem key={i} aria-label="Accordion 1" title={data.Name}>
            <div className="flex flex-wrap   items-center gap-[3rem]">
              <h1>
                <span className="font-bold ">Job ID: </span>
                {data.jobid}
              </h1>
              <h1>
                <span className="font-bold ">Email: </span>
                {data.email}
              </h1>
              <h1>
                <span className="font-bold ">Contact: </span>
                {data.contact}
              </h1>
              <h1>
                <span className="font-bold ">Experience: </span>
                {data.exp}
              </h1>
              <h1>
                <span className="font-bold ">Expected CTC: </span>
                {data.expected}
              </h1>
              <button onClick={() => Download(i)} className=" text-black text-2xl">
                <MdOutlineFileDownload />
              </button>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AllCandidate;
