import { Button, Input, Textarea, Chip, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { getCookie } from "../../../utils/cookies";

const CreateJob = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const token = getCookie("token");

  const departments = ["IT", "Sales", "Marketing", "HR"];
  const employmentType = ["Part-time", "Full-time", "Contractual"];
  const location = ["Remote", "Hybrid", "In-office"];
  const experience = ["Entry-level", "Mid-level", "Senior"];

  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [education, SetEducation] = useState("");
  const [educationList, SetEducationList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    position: "",
    jobdes: "",
    role: "",
    department: "IT",
    industryType: "",
    employmentType: "Full-time",
    loc: "In-office",
    exp: "Entry-level",
    category: "Not Applicable",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const AddEducation = (e) => {
    e.preventDefault();

    SetEducationList((educationList) => {
      const update = [...educationList, education];
      console.log(update);
      return update;
    });
    SetEducation("");
  };

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

  const removeEducation = (i) => {
    const update = educationList.filter((elem, idx) => {
      return i != idx;
    });
    SetEducationList(update);
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

  const handleEducation = (event, i) => {
    event.preventDefault();
    removeEducation(i);
  };

  async function handleSubmitForm(e) {
    e.preventDefault();
    setLoading(true);

    if (
      !input.department ||
      !input.employmentType ||
      !input.exp ||
      !input.industryType ||
      skillList.length === 0 ||
      educationList.length === 0 ||
      list.length === 0
    ) {
      setLoading(false);
      toast.error("Please Fill the Form Completely");
      return;
    }

    const data = {
      ...input,
      skills: { skills: skillList },
      education: { education: educationList },
      profile: { profile: list },
    };

    try {
      const response = await axios.post(`${apiUrl}/careers/createjob`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data.success) {
        setLoading(false);
        return toast.error("Job Creation Failed");
      }

      toast.success("Job Creation Successful");
      setInput({
        position: "",
        jobdes: "",
        role: "",
        department: "IT",
        industryType: "",
        employmentType: "Full-time",
        loc: "In-office",
        exp: "Entry-level",
        category: "",
      });
      setSkillList([]);
      SetEducationList([]);
      setList([]);
    } catch (error) {
      console.log(error);
      toast.error("Application Creation Failed");
    }

    setLoading(false);
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

      <form
        noValidate
        onSubmit={handleSubmitForm}
        action=""
        className="flex flex-col gap-[1rem] md:w-[45rem] w-[20rem]"
      >
        <div>
          <label htmlFor="">
            Job Position <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            name="position"
            id="position"
            size="sm"
            variant="bordered"
            color="primary"
            value={input.position}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <label htmlFor="">
            Job Description <span className="text-red-700">*</span>
          </label>
          <Textarea
            variant="bordered"
            name="jobdes"
            id="jobdes"
            color="primary"
            size="sm"
            value={input.jobdes}
            onChange={handleUserInput}
          />
        </div>

        <div>
          <label htmlFor="">
            Required Candidate Profile <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Input
              type="text"
              variant="bordered"
              color="primary"
              name="Profile"
              id="Profile"
              size="sm"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              onKeyDown={handleKeyPress}
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
          <Input
            type="text"
            name="role"
            id="role"
            value={input.role}
            onChange={handleUserInput}
            size="sm"
            variant="bordered"
            color="primary"
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <label htmlFor="">
            Department <span className="text-red-500">*</span>
          </label>

          <Select
            defaultSelectedKeys={["IT"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="department"
            id="department"
            value={input.department}
            onChange={handleUserInput}
          >
            {departments.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">
            Industry Type <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            name="industryType"
            id="industryType"
            size="sm"
            variant="bordered"
            color="primary"
            value={input.industryType}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <label htmlFor="">
            Education <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Input
              type="text"
              variant="bordered"
              color="primary"
              name="Education"
              id="Education"
              size="sm"
              value={education}
              onChange={(e) => SetEducation(e.target.value)}
              onKeyDown={handleKeyPress}
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
          <Select
            defaultSelectedKeys={["Full-time"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="employmentType"
            id="employmentType"
            value={input.employmentType}
            onChange={handleUserInput}
          >
            {employmentType.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">
            Location <span className="text-red-500">*</span>
          </label>
          <Select
            defaultSelectedKeys={["In-office"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="loc"
            id="loc"
            value={input.loc}
            onChange={handleUserInput}
          >
            {location.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">
            Experience <span className="text-red-500">*</span>
          </label>
          <Select
            defaultSelectedKeys={["Entry-level"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="exp"
            id="exp"
            value={input.exp}
            onChange={handleUserInput}
          >
            {experience.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">
            Key Skills <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2">
            <Input
              type="text"
              name="skill"
              id="skill"
              size="sm"
              variant="bordered"
              color="primary"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
              onKeyDown={handleKeyPress}
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
          <Button
            variant="shadow"
            className="w-[10rem] py-[1rem] px-[2rem] text-white bg-blue-500"
            type="submit"
            isLoading={loading}
          >
            Submit
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default CreateJob;
