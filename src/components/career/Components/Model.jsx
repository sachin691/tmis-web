import React, { useRef } from "react";

const Model = ({onClose}) => {
   const modalRef = useRef();

   const closeModal =(e)=>{
     if(modalRef.current === e.target){
      onClose()
     }
   }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col w-[30rem] h-auto bg-[#475569] items-center justify-center border-2 rounded-xl">
        <div className="p-[3rem]">
          <p className="text-white font-semibold text-2xl"> Are You Sure Want to Delete job?</p>
        </div>

        <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
          <button
            onClick={onClose}
            className="py-[0.6rem] px-[1rem] bg-yellow-600 text-white rounded-xl hover:text-yellow-600 hover:bg-white"
          >
            Close
          </button>
          <button className="py-[0.6rem] px-[1rem] bg-[#F31260] text-white rounded-xl hover:text-[#F31260] hover:bg-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Model;
