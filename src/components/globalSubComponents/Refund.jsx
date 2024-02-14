// Dependencies
import { useDispatch } from "react-redux";
import { Divider } from "@nextui-org/react";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/methods";
import "./Refund.css";

const refund = [
  {
    heading: "General Refund Guidelines : ",
    content: [
      "TMIS follows a fair and transparent refund policy applicable to all our services, including but not limited to Website Development, SEO Services, Promotional Booking Service, and Software Solutions.",
      "Our refund policy is designed to protect both our customers and TMIS, ensuring a mutually beneficial and satisfactory experience.",
      "Requests for refunds will be considered based on the specific circumstances of each case and in accordance with the terms outlined below.",
    ],
  },
  {
    heading: "Eligibility for Refunds : ",
    content: [
      "Refunds may be granted under certain circumstances, such as: Failure to deliver the agreed-upon services within the specified timeframe, Services provided do not meet the quality standards agreed upon, Unforeseen technical or operational issues prevent the completion of services",
      "Refund eligibility will be determined solely by TMIS based on the nature of the request and adherence to our refund policy.",
    ],
  },
  {
    heading: "Refund Process : ",
    content: [
      "To request a refund, you must contact TMIS customer support through the designated channels provided on our website or through direct communication with your assigned representative.",
      "Your refund request will be reviewed promptly by our team, and we may require additional information or documentation to process your request effectively.",
      "TMIS reserves the right to investigate the circumstances surrounding the refund request to ensure validity and prevent abuse of our refund policy.",
      "Once your refund request is approved, we will process the refund within a reasonable timeframe using the original payment method used for the purchase.",
    ],
  },
  {
    heading: "Non-Refundable Items : ",
    content: [
      "Certain services or products may be non-refundable unless explicitly stated otherwise in the terms of service or agreement.",
      "Customized or personalized services that have been completed according to your specifications may not be eligible for refunds.",
      "Any third-party fees or expenses incurred during the provision of services may not be eligible for refunds.",
    ],
  },
  {
    heading: "Cancellation Policy : ",
    content: [
      "If you wish to cancel your order or service subscription, please refer to our cancellation policy for specific guidelines and procedures.",
      "Cancellation requests may be subject to certain conditions and fees depending on the stage of the service delivery process.",
    ],
  },
  {
    heading: "Changes to Refund Policy : ",
    content: [
      "TMIS reserves the right to modify or update this refund policy at any time without prior notice. Any changes will be effective immediately upon posting on our website.",
      "It is your responsibility to review our refund policy periodically to stay informed about any updates or revisions.",
    ],
  },
  {
    heading: "Contact Us : ",
    content: [
      "If you have any questions or concerns regarding our refund policy or need assistance with a refund request, please contact TMIS customer support for assistance.",
    ],
  },
];

const Refund = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Refund"));
  scrollTop();

  return (
    <div className="h-auto flex flex-col bg-[#e9ecef] m-0 p-0 md:m-[2rem] md:p-[4rem] gap-4 rounded-lg">
      <div className="bg-gray-900 grid xl:grid-cols-2">
        <div className="px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] flex flex-col gap-[3rem]">
          <span className=" text-white text-4xl md:text-6xl font-bold">Refund & Cancellation Policy</span>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-white">
              This Refund & Cancellation Policy outlines our guidelines and procedures regarding refunds for purchases
              made through our Service. It informs you about your rights concerning refunds and how we handle refund
              requests. We aim to ensure transparency and fairness in our refund processes. By engaging with our Service
              and making purchases, you agree to abide by the terms outlined in this Refund Policy.
            </p>
          </div>
        </div>
        <div className="refund"></div>
      </div>

      <Divider className="my-[1rem]" />

      <div className="text-lg bg-white rounded-md p-[2rem] py-[1rem] flex flex-col gap-[1rem]">
        <p className="text-sm p-[1rem] ">
          Thank you for choosing TMIS (TravelMagnet Infotech Private Limited) for your digital services needs. We strive
          to provide high-quality services tailored to your requirements. However, we understand that there may be
          instances where you might need to request a refund. Please read our refund policy carefully to understand your
          rights and obligations regarding refunds.
        </p>

        {refund.map((data, index) => (
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
          By engaging with TMIS and utilizing our services, you acknowledge that you have read, understood, and agreed
          to abide by the terms and conditions of this refund policy. Your satisfaction is important to us, and we are
          committed to addressing any concerns or issues you may encounter promptly and fairly.
        </p>
      </div>
    </div>
  );
};

export default Refund;
