import React from 'react'
import JobCards from './JobCards'
import data from './data'

const JobLook = () => {
  return (
    
      
      

        <div className="flex flex-col gap-3 items-center justify-center md:p-[4rem] p-[1rem]">
          {data.map((job,ind) => (
            <JobCards
              title={job.title}
              location={job.location}
              type={job.type}
              experience={job.experience}
              skill={job.skills}
              i={job.ind}
            />
          ))}
        </div>
      
  
  );
}

export default JobLook