import fileDownload from "js-file-download";

import { useEffect } from "react";
import { scrollTop } from "../../../utils/methods";

import React, { useState } from "react";
import { Accordion, AccordionItem, Button, Pagination, Divider } from "@nextui-org/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Model from "./Model";
import { FaRegEye } from "react-icons/fa";

import Space from "./Space";
const content = [
  {
    Name: "Manish Kumar",
    email: "amanish123@gmail.com",
    gap: "  ",
    contact: "95875426345",
    year: 2018,
    expected: 4.5,
    exp: "2 year",
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
    gap: "  ",
  },
  {
    Name: "Manish Kumar",
    email: "amanish123@gmail.com",
    contact: "95875426345",
    year: 2018,
    expected: 4.5,
    exp: 2,
    jobid: 124857,
    gap: "  ",
  },
  {
    Name: "Manish Kumar",
    email: "amanish123@gmail.com",
    contact: "95875426345",
    year: 2018,
    expected: 4.5,
    exp: 2,
    jobid: 124857,
    gap: "  ",
  },
];

const pageSize = 8;

const AllCandidate = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }
  
  const [CandidateCount, setCandidateCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { name, id } = useParams();

  const [CandidateData, setCandidateData] = useState([
    { job_id: "", name: "", email: "", contact: "", experience: "", pdf: "" },
  ]);

  const [showModel, setShowModel] = useState(false);

  const navigate = useNavigate();
  const Download = (data) => {
    fileDownload(data, "filename.pdf");
  };

  useEffect(() => scrollTop(), []);

  return (
    <>
      <div className="flex flex-col justify-center items-center md:p-[5rem] p-[1rem] ">
        <div className="p-[2rem]">
          <h1 className="text-3xl text-1xl font-bold border-b-1 border-black">Applied Candidates</h1>
        </div>
        {content.map((data, i) => (
          <div className=" w-full">
            <Accordion selectionMode="multiple" variant="splitted" showDivider="true">
              <AccordionItem
                key={i}
                aria-label="Chung Miller"
                subtitle={<Space exp={data.exp} expected={data.expected} contact={data.contact} />}
                title={data.Name}
                className="font-semibold my-[0.5rem]"
                showDivider="true"
              >
                <Divider />
                <div className="flex flex-wrap  gap-x-[2rem] gap-y-[0.2rem] text-gray-600 my-[1rem] text-sm">
                  <h1>
                    <span className="font-semibold text-gray-600">Job ID : </span>
                    {data.jobid}
                  </h1>
                  <h1>
                    <span className="font-semibold text-gray-600 ">Email : </span>
                    {data.email}
                  </h1>
                  <h1>
                    <span className="font-semibold text-gray-600 ">Graduation Year : </span>
                    {data.contact}
                  </h1>
                  <h1>
                    <span className="font-semibold text-gray-600">Experience: </span>
                    {data.exp}
                  </h1>
                  <h1>
                    <span className="font-semibold text-gray-600">Current Employer: </span>
                    {data.expected}
                  </h1>
                  <h1>
                    <span className="font-semibold text-gray-600">Current CTC: </span>
                    {data.expected}
                  </h1>
                  <h1>
                    <span className="font-semibold text-gray-600">Notice Period: </span>
                    {data.expected}
                  </h1>
                  <h1>
                    <span className="font-semibold text-gray-600">Current Location: </span>
                    {data.expected}
                  </h1>
                </div>
                <a href={`${apiUrl}/applicant/applicantResumes/default.pdf`} target="_blank">
                  <Button  className=" text-black" size="sm">
                    View Resume : <FaRegEye />
                  </Button>
                </a>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
        <div className="py-[2rem]">
          <Pagination
            loop
            showControls
            color="primary"
            variant="light"
            onChange={(pageNumber) => setCurrentPage(pageNumber)}
            total={CandidateCount ? Math.ceil(CandidateCount / pageSize) : 1}
            initialPage={1}
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-[2rem] p-[2rem]">
          <Button
            variant="ghost"
            color="primary"
            onClick={() => navigate(`../Career/Individual/${name}/${id}`)}
            className="py-[1rem] px-[1.2rem] font-semibold rounded-xl "
          >
            Job Details
          </Button>
          <Button
            variant="ghost"
            color="danger"
            onClick={() => setShowModel(true)}
            className="py-[1rem] px-[1.2rem] font-semibold rounded-xl "
          >
            Delete Job
          </Button>
        </div>
        <div></div>
      </div>
      {showModel && <Model onClose={() => setShowModel(false)} jobId={id} />}
    </>
  );
};

export default AllCandidate;
