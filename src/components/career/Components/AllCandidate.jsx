import { useEffect, useLayoutEffect } from "react";
import { scrollTop } from "../../../utils/methods";
import { useState } from "react";
import { Accordion, AccordionItem, Button, Pagination, Divider, Skeleton } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import Model from "./Model";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import Space from "./Space";
import { getCookie } from "../../../utils/cookies";

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
  const [jobExist, setJobExist] = useState(false);

  const [showModel, setShowModel] = useState(false);
  useEffect(() => scrollTop(), []);

  useLayoutEffect(() => {
    const getCandidates = async () => {
      try {
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
        setCandidateCount(response.data.payload.totalApplicants.result[0][0].totalApplicants);
        setJobExist(true);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getCandidates();
  }, [apiUrl, currentPage]);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center md:p-[5rem] p-[1rem] ">
        <div className="p-[2rem]">
          <h1 className="text-3xl text-1xl font-bold border-b-1 border-black">Applied Candidates</h1>
        </div>
        {jobExist ? (
          CandidateData.length > 0 ? (
            <>
              {CandidateData.map((data, i) => (
                <div className=" w-full">
                  <Accordion selectionMode="multiple" variant="splitted" showDivider="true">
                    <AccordionItem
                      key={i}
                      aria-label="Chung Miller"
                      subtitle={
                        <Space exp={data.experience_years} expected={data.expected_ctc} contact={data.contact} />
                      }
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
                          {new Date(data.graduation_year).getFullYear()}
                        </h1>
                        {data.current_employer ? (
                          <h1>
                            <span className="font-semibold text-gray-600">Current Employer: </span>
                            {data.current_employer}
                          </h1>
                        ) : null}
                        {data.current_ctc ? (
                          <h1>
                            <span className="font-semibold text-gray-600">Current CTC : </span>
                            {data.current_ctc} LPA
                          </h1>
                        ) : null}
                        {data.notice_period ? (
                          <h1>
                            <span className="font-semibold text-gray-600">Notice Period: </span>
                            {data.notice_period} months
                          </h1>
                        ) : null}
                        <h1>
                          <span className="font-semibold text-gray-600">Address: </span>
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
          )
        ) : (
          <div className="my-[1rem] flex flex-col gap-[1rem] w-[80%]">
            {[1, 2, 3, 4].map(() => (
              <Skeleton className="rounded-lg ">
                <div className="h-[7rem] rounded-lg bg-default-300"></div>
              </Skeleton>
            ))}
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
