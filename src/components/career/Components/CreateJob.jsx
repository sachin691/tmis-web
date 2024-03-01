import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

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
      console.log(updatedListSkill)
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
    console.log(updatedSkilllist)
  };
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

 

  return (
    <div className="flex flex-col items-center justify-between h-aut0">
      <div className="flex items-center justify-center p-[2rem]">
        <h1 className="text-3xl font-bold">Post Your Job</h1>
      </div>

      <div>
        <form action="">
          <div className="py-[2rem]">
            <label htmlFor="">
              Job Description <span className="text-red-700">*</span>
            </label>
            <div className=" md:w-[45rem] w-[20rem]">
              <Textarea label="" placeholder="" variant="bordered" color="success" />
            </div>
          </div>

          <div className="py-[2rem] ">
            <label htmlFor="">
              Required Candidate Profile <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-row items-center justify-center gap-2 ">
              <Input
                type="text"
                label=""
                variant="bordered"
                color="success"
                name="First Name"
                id="First Name"
                size="lg"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              />
              <button className="text-white bg-blue-500 py-[0.8rem] px-[1rem] rounded-xl" onClick={AddActivity}>
                Add
              </button>
            </div>
            {list.map((data, i) => (
              <div className="flex items-start justify-start gap-[2rem] py-[1rem]">
                <div className="bg-slate-200 text-black rounded-xl p-[1rem] ">
                  <p key={i}>{data}</p>
                </div>
                <div className="flex items-center justify-center font-bold text-blue-500 text-3xl mt-3">
                  <button onClick={(event) => handleClick(event, i)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="py-[2rem]">
            <label htmlFor="">
              Role <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="lg"
              variant="bordered"
              color="success"
            />
          </div>
          <div className="py-[2rem]">
            <label htmlFor="">
              Industry Type <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="lg"
              variant="bordered"
              color="success"
            />
          </div>
          <div className="py-[2rem]">
            <label htmlFor="">
              Department <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="lg"
              variant="bordered"
              color="success"
            />
          </div>
          <div className="py-[2rem]">
            <label htmlFor="">
              Employment Type Type <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="lg"
              variant="bordered"
              color="success"
            />
          </div>
          <div className="py-[2rem]">
            <label htmlFor="">
              Role Category <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="lg"
              variant="bordered"
              color="success"
            />
          </div>
          <div className="py-[2rem]">
            <label htmlFor="">
              Key Skills <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-row items-center justify-center gap-2">
              <Input
                type="text"
                label=""
                name="skill"
                id="skill"
                size="lg"
                variant="bordered"
                color="success"
                value={skill}
                onChange={(event) => setSkill(event.target.value)}
              />
              <button className="text-white bg-blue-500 py-[0.8rem] px-[1rem] rounded-xl" onClick={addSkill}>
                Add
              </button>
            </div>
            {skillList?.map((data, i) => (
              <div className="flex items-start justify-start gap-[2rem] py-[1rem]">
                <div className="bg-slate-200 text-black rounded-xl p-[1rem] ">
                  <p key={i}>{data}</p>
                </div>
                <div className="flex items-center justify-center font-bold text-blue-500 text-3xl mt-3">
                  <button onClick={(event) => handleNextClick(event, i)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between p-[2rem]">
            <Button
              variant="shadow"
              className="w-[10rem] py-[1rem] px-[2rem] text-white bg-blue-500"
              // endContent={<IoSend className="mt-[0.2rem]" />}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
