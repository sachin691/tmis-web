import fileDownload from "js-file-download";

import { useEffect, useLayoutEffect } from "react";
import { scrollTop } from "../../../utils/methods";

import React, { useState } from "react";
import { Accordion, AccordionItem, Button, Pagination, Divider } from "@nextui-org/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Model from "./Model";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import Space from "./Space";
import { getCookie } from "../../../utils/cookies";
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
  const token = getCookie("token");
  const [CandidateData, setCandidateData] = useState([]);

  const [showModel, setShowModel] = useState(false);
  useEffect(() => scrollTop(), []);

  useLayoutEffect(() => {
    const getCandidates = async () => {
      try {
        console.log(token);
        const start = (currentPage - 1) * pageSize;
        const response = await axios.get(`${apiUrl}/applicant/getApplicants`, {
          headers: {
            Authorization: `Bearer ${token}`,
            start,
            id,
            end: "8",
          },
        });
        if (!response.data.success) {
          setCandidateCount(0);
          return;
        }
        setCandidateData(response.data.payload.applicants);
        setCandidateCount(response.data.payload.totalApplicants);
        console.log(CandidateCount);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getCandidates();
  }, []);
  const navigate = useNavigate();
  const Download = (data) => {
    fileDownload(data, "filename.pdf");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center md:p-[5rem] p-[1rem] ">
        <div className="p-[2rem]">
          <h1 className="text-3xl text-1xl font-bold border-b-1 border-black">Applied Candidates</h1>
        </div>
        {CandidateCount > 0 ? (
          <>
            {CandidateData.map((data, i) => (
              <div className=" w-full">
                <Accordion selectionMode="multiple" variant="splitted" showDivider="true">
                  <AccordionItem
                    key={i}
                    aria-label="Chung Miller"
                    subtitle={<Space exp={data.experience_years} expected={data.expected_ctc} contact={data.contact} />}
                    title={data.full_name}
                    className="font-semibold my-[0.5rem]"
                    showDivider="true"
                  >
                    <Divider />
                    <div className="flex flex-wrap  gap-x-[2rem] gap-y-[0.2rem] text-gray-600 my-[1rem] text-sm">
                      <h1>
                        <span className="font-semibold text-gray-600">Applicant ID: </span>
                        {data.applicant_id}
                      </h1>
                      <h1>
                        <span className="font-semibold text-gray-600 ">Email : </span>
                        {data.email}
                      </h1>
                      <h1>
                        <span className="font-semibold text-gray-600 ">Graduation Year : </span>
                        {data.graduation_year}
                      </h1>
                      <h1>
                        <span className="font-semibold text-gray-600">Current Employer: </span>
                        {data.current_employer}
                      </h1>
                      <h1>
                        <span className="font-semibold text-gray-600">Current CTC (in LPA): </span>
                        {data.current_ctc}
                      </h1>
                      <h1>
                        <span className="font-semibold text-gray-600">Notice Period (in months): </span>
                        {data.notice_period}
                      </h1>
                      <h1>
                        <span className="font-semibold text-gray-600">Current Location: </span>
                        {data.current_location}
                      </h1>
                    </div>
                    <a href={`${apiUrl}/applicant/applicantResumes/${data.applicant_id}.pdf`} target="_blank">
                      <Button className=" text-black" size="sm">
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
          </>
        ) : (
          <div className="min-h-[20rem] flex justify-center items-center font-bold text-2xl text-default-500">
            <p>No Applicants Available</p>
          </div>
        )}

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
