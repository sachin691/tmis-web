import { useNavigate, useParams } from "react-router-dom";
import Intro from "./Intro";
import { Input, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import { scrollTop } from "../../../utils/methods";
import { useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ApplyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  if (id === undefined) {
    navigate("/Careers");
  }

  const toastSetting = { position: "top-center" };

  const errorToast = (message) => {
    toast.error(message, toastSetting);
  };

  const successToast = (message) => {
    toast.success(message, toastSetting);
  };

  useEffect(() => scrollTop(), []);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const graduationYearRef = useRef(null);
  const curEmployerRef = useRef(null);
  const experienceRef = useRef(null);
  const curCTCRef = useRef(0);
  const expectedCTCRef = useRef(null);
  const noticePeriodRef = useRef(null);
  const locationRef = useRef(null);

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      fullNameRef.current.value.length > 0 &&
      emailRef.current.value.length > 0 &&
      contactRef.current.value.length > 0 &&
      graduationYearRef.current.value.length > 0 &&
      experienceRef.current.value.length > 0 &&
      expectedCTCRef.current.value.length > 0 &&
      locationRef.current.value.length > 0 &&
      resume !== null
    ) {
      if (resume.size > 1572864) {
        return errorToast("Resume is Bigger Than 1.5 MB");
      }

      setLoading(true);

      const resumeData = new FormData();
      resumeData.append("resume", resume);

      const data = {
        full_name: fullNameRef.current.value,
        email: emailRef.current.value,
        contact: contactRef.current.value,
        graduation_year: graduationYearRef.current.value,
        experience_years: parseInt(experienceRef.current.value) ? parseInt(experienceRef.current.value) : 0,
        current_employer: curEmployerRef.current.value,
        current_ctc: parseInt(curCTCRef.current.value) ? parseInt(curCTCRef.current.value) : 0,
        expected_ctc: parseInt(expectedCTCRef.current.value) ? parseInt(expectedCTCRef.current.value) : 0,
        notice_period: parseInt(noticePeriodRef.current.value) ? parseInt(noticePeriodRef.current.value) : 0,
        current_location: locationRef.current.value,
        id,
      };

      try {
        const response = await axios.post(`${apiUrl}/applicant/apply`, data);
        console.log(response);
        if (!response.data.success) {
          errorToast("Application Submission Failed");
          setLoading(false);
          return;
        }
        successToast("Application Submission Successful");
      } catch (error) {
        console.log(error);
        errorToast("Application Submission Failed");
      }
    } else {
      errorToast("Please Fill The Form Appropriately");
    }
    setLoading(false);
  };

  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/paper-style-wavy-background_23-2149116133.jpg?w=996&t=st=1709490657~exp=1709491257~hmac=12bb40978de0c4c56b8832b669f4449829ef8a9e4c62cdc48ab6ada116438b72')",
      }}
    >
      <Intro />
      <div className="flex items-center justify-center p-[2rem] mt-[4rem]">
        <h1 className="text-3xl font-bold">Kindly Fill The Details</h1>
      </div>

      <form action="" className="flex flex-col  gap-[2rem] items-center grow" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start bg-white p-[3rem] rounded-lg">
          <label htmlFor="" className="py-[0.5rem]">
            Full Name <span className="text-red-800">*</span>
          </label>
          <div className=" sm:w-[30rem] md:w-[45rem] w-[19rem] ">
            <Input
              type="text"
              name="fullName"
              size="xs"
              color="primary"
              radius="none"
              variant="bordered"
              ref={fullNameRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Email <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="email"
              name="email"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={emailRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Contact Number <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="tel"
              name="phone"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={contactRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Year of Graduation <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Date"
              name="graduation"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={graduationYearRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Experience In Years <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              name="experience"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={experienceRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Current Employer
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="text"
              name="curEmployer"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={curEmployerRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Current CTC (In Lakh per Annum)
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              name="curCTC"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={curCTCRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Expected CTC (In Lakh per Annum) <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              name="expectedCTC"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={expectedCTCRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Notice Period (In Month)
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              name="noticePeriod"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={noticePeriodRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Current Location <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="text"
              name="location"
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
              ref={locationRef}
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Upload Your Resume <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
              isLoading={loading}
            />
          </div>
        </div>

        <Button
          className="w-[10rem] py-[1rem] px-[2rem] text-white bg-blue-500 mb-[3rem] mt-[2rem]"
          endContent={<IoSend className="mt-[0.2rem]" />}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default ApplyForm;
