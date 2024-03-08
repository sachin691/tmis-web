import axios from "axios";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookies";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Model = ({ onClose, jobId }) => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }
  const token = getCookie("token");

  const navigate = useNavigate();
  const modalRef = useRef();

  const [loading, setLoading] = useState(false);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const deleteJob = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${apiUrl}/careers/deleteJob/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      toast.success("Job Delete Successfully");
      navigate("/Career");
    } catch (error) {
      console.log(error);
      toast.error("job Delete Failed");
    }
    setLoading(false);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col w-[30rem] h-auto bg-[#475569] items-center justify-center border-2 rounded-xl">
        <div className="p-[3rem]">
          <p className="text-white font-semibold text-2xl"> Are You Sure Want to Delete job?</p>
        </div>

        <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
          <Button
            onClick={onClose}
            className="py-[0.6rem] px-[1rem] bg-yellow-600 text-white rounded-xl hover:text-yellow-600 hover:bg-white"
            isLoading={loading}
          >
            Close
          </Button>
          <Button
            onClick={deleteJob}
            className="py-[0.6rem] px-[1rem] bg-[#F31260] text-white rounded-xl hover:text-[#F31260] hover:bg-white"
            isLoading={loading}
          >
            Delete
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Model;
