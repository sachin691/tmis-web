// Dependencies
import { useDispatch } from "react-redux";
import { Divider } from "@nextui-org/react";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/methods";
import "./Terms.css";

const terms = [
  {
    heading: "License to Use : ",
    content: [
      "Unless otherwise stated, TMIS and/or its licensors own the intellectual property rights for all material on our website and services. All intellectual property rights are reserved.",
      "You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions.",
    ],
  },
  {
    heading: "Service Description : ",
    content: [
      "TMIS provides digital services including but not limited to Website Development, SEO Services, Promotional Booking Service, and Software Solutions.",
      "Our services are provided 'as is' without any warranty, expressed or implied. We do not guarantee the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on our website for any particular purpose.",
    ],
  },
  {
    heading: "User Conduct : ",
    content: [
      "You must not use our website or services in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful.",
      "You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent.",
    ],
  },
  {
    heading: "Privacy Policy : ",
    content: [
      "Our Privacy Policy governs the use of personal information collected from or provided by you on our website. By using our website or services, you consent to the terms of our Privacy Policy.",
    ],
  },
  {
    heading: "Limitation of Liability : ",
    content: [
      "In no event shall TMIS, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of our website or services, whether such liability is under contract, tort or otherwise.",
    ],
  },
  {
    heading: "Indemnity : ",
    content: [
      "You hereby indemnify to the fullest extent TMIS from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these terms.",
    ],
  },
  {
    heading: "Variation of Terms : ",
    content: [
      "TMIS is permitted to revise these Terms and Conditions at any time as it sees fit, and by using our website or services you are expected to review such Terms and Conditions on a regular basis to ensure you understand all terms and conditions governing use of this website and services",
    ],
  },
  {
    heading: "Governing Law & Jurisdiction : ",
    content: [
      "These Terms and Conditions will be governed by and construed in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.",
    ],
  },
];

const Terms = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Terms"));
  scrollTop();

  return (
    <div className="h-auto flex flex-col bg-[#e9ecef] m-0 p-0 md:m-[2rem] md:p-[4rem] gap-4 rounded-lg">
      <div className="bg-gray-900 grid xl:grid-cols-2">
        <div className="px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] flex flex-col gap-[3rem]">
          <span className=" text-white text-4xl md:text-6xl font-bold">Terms & Conditions</span>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-white">
              The Terms & Conditions page outlines the rules and guidelines for using our service. It includes
              information about users' rights and responsibilities, as well as the terms under which the service is
              provided. By using the service, you agree to abide by these terms and conditions.
            </p>
          </div>
        </div>
        <div className="refund"></div>
      </div>

      <Divider className="my-[1rem]" />

      <div className="text-lg bg-white rounded-md p-[2rem] py-[1rem] flex flex-col gap-[1rem]">
        <p className="text-sm p-[1rem] ">
          Welcome to TMIS (TravelMagnet Infotech Private Limited)! These Terms and Conditions outline the rules and
          regulations for the use of our services and website. By accessing this website or using our services, we
          assume you accept these Terms and Conditions in full. Do not continue to use TMIS's website or services if you
          do not accept all of the terms and conditions stated on this page.
        </p>

        {terms.map((data, index) => (
          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="font-bold text-2xl ">{data.heading}</h1>
            <ul>
              {data.content.map((cont, ind) => (
                <li className="px-[1rem] text-sm">{cont}</li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-sm p-[1rem] ">
          If you require any more information or have any questions about our Terms and Conditions, please feel free to
          contact us. By using our website or services, you acknowledge that you have read, understood, and agreed to be
          bound by these Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default Terms;
