import { Button, Input, Textarea, Chip } from "@nextui-org/react";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const CreateJob = () => {
  // const form = useRef < HTMLFormElement > null;

  // const [nameValidity, setNameValidity] = useState < boolean > false;
  // const [subjectValidity, setSubjectValidity] = useState < boolean > false;
  // const [messageValidity, setMessageValidity] = useState < boolean > false;

  // const [userNameState, setUserNameState] = useState < number > -1;
  // const [subjectState, setSubjectState] = useState < number > -1;
  // const [messageState, setMessageState] = useState < number > -1;
  // const [state, setState] = useState(false);

  const [input, setInput] = useState({
    Firstname: "",
    Lastname: "",
    contact: "",
    email: "",
    jobDescription: "",
    role: "",
    industry: "",
    department: "",
    EmploymentType: "",
    category: "",
  });

  //  const checkUserName = (event) => {
  //    input.name = event.currentTarget.value;
  //    setUserNameState(event.currentTarget.value.length);

  //    const validity = input.name.length > 2;
  //    if (validity) {
  //      setNameValidity(false);
  //    } else {
  //      setNameValidity(true);
  //    }
  //  };

  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [education, SetEducation] = useState("")
  const [educationList, SetEducationList] = useState([])

  const AddEducation = (e) => {
    e.preventDefault();

    SetEducationList((educationList) => {
      const update = [...educationList, education];
      console.log(update)
      return update
    })
    SetEducation("")
  }

  const AddActivity = (e) => {
    e.preventDefault();

    setList((list) => {
      const updatedList = [...list, activity];
      console.log(updatedList);
      return updatedList;
    });
    setActivity("");
  };

  const addSkill = (e) => {
    e.preventDefault();
    setSkillList((skillList) => {
      const updatedListSkill = [...skillList, skill];
      console.log(updatedListSkill);
      return updatedListSkill;
    });
    setSkill("");
  };

  const removeData = (i) => {
    const updatedList = list.filter((elem, idx) => {
      return i != idx;
    });
    setList(updatedList);
  };

  const removeSkill = (i) => {
    const updatedSkilllist = skillList.filter((elem, idx) => {
      return i != idx;
    });
    setSkillList(updatedSkilllist);
    console.log(updatedSkilllist);
  };

  const removeEducation =(i) => {
    const update = educationList.filter((elem,idx) =>{
       return i != idx;
    })
    SetEducationList(update)
  }
  const handleClick = (event, i) => {
    event.preventDefault(); // Prevents the default behavior (e.g., page refresh)

    // Call your removeData function with the index
    removeData(i);
  };
  const handleNextClick = (event, i) => {
    event.preventDefault(); // Prevents the default behavior (e.g., page refresh)

    // Call your removeData function with the index
    removeSkill(i);
  };

  const handleEducation = (event, i) =>{
    event.preventDefault();
     removeEducation(i)
  }

  return (
    <div
      className="flex flex-col items-center justify-between bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/neumorphic-round-shape-design-empty-white-banner_1017-43171.jpg?w=1060&t=st=1709490418~exp=1709491018~hmac=7f1af8e14c5572bdc8df6e7a3a14fe9c36b667149308db14c659ea7fa2856355')",
      }}
    >
      <div className="flex items-center justify-center p-[2rem]">
        <h1 className="text-3xl font-bold">Post Your Job</h1>
      </div>

      <form action="" className="flex flex-col gap-[1rem] md:w-[45rem] w-[20rem]">
        <div>
          <label htmlFor="">
            Job Position <span className="text-red-500">*</span>
          </label>
          <Input type="text" label="" name="First Name" id="First Name" size="sm" variant="bordered" color="primary" />
        </div>
        <div>
          <label htmlFor="">
            Job Description <span className="text-red-700">*</span>
          </label>
          <Textarea label="" placeholder="" variant="bordered" color="primary" size="sm" />
        </div>

        <div>
          <label htmlFor="">
            Required Candidate Profile <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Input
              type="text"
              label=""
              variant="bordered"
              color="primary"
              name="First Name"
              id="First Name"
              size="sm"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <button className="text-white bg-blue-500 py-[0.7rem] px-[1rem] rounded-xl" onClick={AddActivity}>
              Add
            </button>
          </div>
          <div className="flex gap-x-[0.5rem] gap-y-[0.8rem] flex-wrap mt-[1rem]">
            {list.map((data, i) => (
              <div className="flex">
                <Chip variant="shadow" size="lg" key={i}>
                  {data}
                </Chip>
                <IoIosCloseCircle
                  className="text-red-500 text-xl cursor-pointer translate-x-[-0.7rem] translate-y-[-0.2rem] bg-white rounded-full"
                  onClick={(event) => handleClick(event, i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="">
            Role <span className="text-red-500">*</span>
          </label>
          <Input type="text" label="" name="First Name" id="First Name" size="sm" variant="bordered" color="primary" />
        </div>
        <div>
          <label htmlFor="">
            Industry Type <span className="text-red-500">*</span>
          </label>
          <Input type="text" label="" name="First Name" id="First Name" size="sm" variant="bordered" color="primary" />
        </div>
        <div>
          <label htmlFor="">
            Department <span className="text-red-500">*</span>
          </label>
          <Input type="text" label="" name="First Name" id="First Name" size="sm" variant="bordered" color="primary" />
        </div>
        <div>
          <label htmlFor="">
            Education <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Input
              type="text"
              label=""
              variant="bordered"
              color="primary"
              name="First Name"
              id="First Name"
              size="sm"
              value={education}
              onChange={(e) => SetEducation(e.target.value)}
            />
            <button className="text-white bg-blue-500 py-[0.7rem] px-[1rem] rounded-xl" onClick={AddEducation}>
              Add
            </button>
          </div>
          <div className="flex gap-x-[0.5rem] gap-y-[0.8rem] flex-wrap mt-[1rem]">
            {educationList.map((data, i) => (
              <div className="flex">
                <Chip variant="shadow" size="lg" key={i}>
                  {data}
                </Chip>
                <IoIosCloseCircle
                  className="text-red-500 text-xl cursor-pointer translate-x-[-0.7rem] translate-y-[-0.2rem] bg-white rounded-full"
                  onClick={(event) => handleEducation(event, i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="">
            Employment Type <span className="text-red-500">*</span>
          </label>
          <Input type="text" label="" name="First Name" id="First Name" size="sm" variant="bordered" color="primary" />
        </div>
        <div>
          <label htmlFor="">
            Role Category <span className="text-red-500">*</span>
          </label>
          <Input type="text" label="" name="First Name" id="First Name" size="sm" variant="bordered" color="primary" />
        </div>
        <div>
          <label htmlFor="">
            Key Skills <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2">
            <Input
              type="text"
              label=""
              name="skill"
              id="skill"
              size="sm"
              variant="bordered"
              color="primary"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
            />
            <button className="text-white bg-blue-500 py-[0.8rem] px-[1rem] rounded-xl" onClick={addSkill}>
              Add
            </button>
          </div>
          <div className="flex gap-x-[0.5rem] gap-y-[0.8rem] flex-wrap mt-[1rem]">
            {skillList?.map((data, i) => (
              <div className="flex">
                <Chip variant="shadow" size="lg" key={i}>
                  {data}
                </Chip>
                <IoIosCloseCircle
                  className="text-red-500 text-xl cursor-pointer translate-x-[-0.7rem] translate-y-[-0.2rem] bg-white rounded-full"
                  onClick={(event) => handleNextClick(event, i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between p-[2rem]">
          <Button variant="shadow" className="w-[10rem] py-[1rem] px-[2rem] text-white bg-blue-500" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
