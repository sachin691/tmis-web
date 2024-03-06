import fileDownload from "js-file-download";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useEffect } from "react";
import { scrollTop } from "../../../utils/methods";

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
  const Download = (data) => {
    fileDownload(data, "filename.pdf");
  };

  useEffect(() => scrollTop(), []);

  return (
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
