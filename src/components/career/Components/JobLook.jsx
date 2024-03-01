import React, { useMemo, useState } from "react";
import JobCards from "./JobCards";
import data from "./data";
import { useDispatch } from "react-redux";
import { updateTab } from "../../../store/curTabSlice";
import { Pagination } from "@nextui-org/react";

const JobLook = () => {
   const [page , setPage] = useState(1)
   const rowsPerPage = 9;

   const pages = Math.ceil(data.length/rowsPerPage)

   const items = useMemo(() => {
    const start = (page-1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start,end);
   },[page, data])
  
  
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center md:p-[4rem] p-[1rem]">
        {items.map((job, ind) => (
          <JobCards
            title={job.title}
            location={job.location}
            type={job.type}
            experience={job.experience}
            skill={job.skills}
            i={job.ind}
          />
        ))}
        <div className="py-[2rem]">
          <Pagination
            loop
            showControls
            color="warning"
            variant="flat"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      </div>
      {/* <Pagination
        loop
        showControls
        color="warning"
        variant="flat"
        page={page}
        total={pages}
        onChange={(page) => setPage(page)}
      /> */}
    </>
  );
};

export default JobLook;
