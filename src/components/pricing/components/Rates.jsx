// Dependencies
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
  Select,
  SelectItem,
  Divider,
} from "@nextui-org/react";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Local Files
import "./Pricing.css";
import { updateCheckoutPermit } from "../../../store/checkoutPermitSlice";

const emailRe = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting = { position: "top-center" };

const errorToast = (message) => {
  toast.error(message, toastSetting);
};

const cardData = [
  {
    name: "Website Development",
    desc: "Empower your online presence with our custom website development services. From sleek, user-friendly designs to robust functionality, we create websites that leave a lasting impression.",
    services: [
      {
        name: "Website",
        basic: "Responsive Website Design",
        standard: "Custom Design and Development",
        premium: "Bespoke Design and Functionality",
      },
      {
        name: "Pages",
        basic: "Up to 5 Pages",
        standard: "Up to 10 Pages",
        premium: "Unlimited Pages",
      },
      {
        name: "SEO",
        basic: "Basic SEO Optimization",
        standard: "Enhanced SEO Features",
        premium: "Advanced SEO Strategies",
      },
      {
        name: "Functionality",
        basic: "Contact Form Integration",
        standard: "CMS Integration",
        premium: "E-commerce Functionality",
      },
    ],
  },
  {
    name: "SEO Services",
    desc: "Boost your visibility and outrank the competition with our SEO services. We optimize your online content to ensure it's not just seen but also prominently placed on search engine results.  ",
    services: [
      {
        name: "Strategy",
        basic: "Website Audit",
        standard: "Comprehensive SEO Strategy",
        premium: "Advanced Analytics and Reporting",
      },
      {
        name: "Feature",
        basic: "Keyword Research",
        standard: "Backlink Building",
        premium: "Local SEO Optimization",
      },
      {
        name: "Support",
        basic: "On-Page Optimization",
        standard: "Monthly Analytics Report",
        premium: "Social Media Integration",
      },
    ],
  },
  {
    name: "Promotional Booking Service",
    desc: "Maximize your reach and engagement with our promotional booking service. We connect your brand with the right audience, ensuring your message reaches its full potential.",
    services: [
      {
        name: "Social Media",
        basic: "Social Media Promotion",
        standard: "Extended Social Media Coverage",
        premium: "Comprehensive Campaign Strategy",
      },
      {
        name: "Content",
        basic: "Basic Content Creation",
        standard: "Engaging Content Creation",
        premium: "Influencer Collaborations",
      },
      {
        name: "Campaign",
        basic: "One-time Promotional Campaign",
        standard: "Continuous Promotion Across Platforms",
        premium: "Extended Promotion Period",
      },
    ],
  },
  {
    name: "Software Solutions",
    desc: "Empower your business with tailor-made software solutions. From efficient workflow management to innovative applications, we provide software that meets your unique needs.",
    services: [
      {
        name: "Customization",
        basic: "Tailored Software Development",
        standard: "Customized Software Solutions",
        premium: "Scalable and Robust Software",
      },
      {
        name: "Functionality",
        basic: "Basic Features and Functionality",
        standard: "Advanced Features and Integrations",
        premium: "Dedicated Support and Maintenance",
      },
    ],
  },
];

const services = ["Website Development", "SEO Services", "Promotional Booking Service", "Software Solutions"];
const plans = ["Basic", "Standard", "Premium"];

const Rates = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const companyNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const addressRef = useRef(null);

  const serviceRef1 = useRef(null);
  const serviceRef2 = useRef(null);
  const serviceRef3 = useRef(null);
  const serviceRef4 = useRef(null);
  const planRef1 = useRef(null);
  const planRef2 = useRef(null);
  const planRef3 = useRef(null);
  const planRef4 = useRef(null);

  const selectedServices = [serviceRef1, serviceRef2, serviceRef3, serviceRef4];
  const selectedPlans = [planRef1, planRef2, planRef3, planRef4];

  const [emailValidity, setEmailValidity] = useState(false);

  const [userNameState, setUserNameState] = useState(-1);
  const [companyNameState, setCompanyNameState] = useState(-1);
  const [phoneState, setPhoneState] = useState(-1);
  const [addressState, setAddressState] = useState(-1);

  const checkEmail = (event) => {
    const validity = event.target.value.match(emailRe);
    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  const handleProceed = () => {
    if (
      !emailValidity &&
      userNameState > 3 &&
      companyNameState > 2 &&
      phoneState > 10 &&
      addressState > 3 &&
      serviceRef1.current.value !== "" &&
      planRef1.current.value !== ""
    ) {
      const userData = {
        userName: userNameRef.current.value,
        email: emailRef.current.value,
        companyName: companyNameRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        address: addressRef.current.value,
        service: selectedServices.map((data) => data.current.value),
        plan: selectedPlans.map((data) => data.current.value),
      };

      dispatch(updateCheckoutPermit(true));

      navigate("/Checkout", { state: userData });
    } else {
      errorToast("Please fill form correctly");
    }
  };

  return (
    <div className="rates py-[5rem] flex flex-col gap-[4rem] items-center px-[1rem]">
      <div className="flex justify-center">
        <p className="text-white text-2xl md:text-4xl font-bold text-center md:text-left">
          Rates Starting As Low As . . .
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[3rem] ">
        {cardData.map((data, index) => (
          <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[2rem]" key={index} aria-label={index}>
            <div className="text-white max-w-[25rem] bg-[#18181B] flex flex-col justify-center gap-2 p-[2rem] rounded-2xl">
              <h1 className="text-2xl font-bold">{data.name}</h1>
              <p className="text-default-400">{data.desc}</p>
            </div>
            <Table className="dark max-w-[42rem]" aria-label={index}>
              <TableHeader>
                <TableColumn className="text-center font-['DM_Serif_Display'] text-lg sm:text-[1.5rem] py-[1.5rem] text-default-800">
                  Services
                </TableColumn>
                <TableColumn className="py-[1.5rem]">
                  <div className="flex flex-col text-center sm:gap-[0.25rem]">
                    <h1 className="font-['DM_Serif_Display'] text-[#7EE7FC] text-lg sm:text-[1.5rem]">Basic</h1>
                    <div>
                      <p>$500 USD / ₹36,500 INR</p>
                      <p>* Per Month *</p>
                    </div>
                  </div>
                </TableColumn>
                <TableColumn className="py-[1.5rem]">
                  <div className="flex flex-col text-center sm:gap-[0.25rem]">
                    <h1 className="font-['DM_Serif_Display'] text-[#17C964] text-lg sm:text-[1.5rem]">Standard</h1>
                    <div>
                      <p>$750 USD / ₹54,750 INR</p>
                      <p>* Per Month *</p>
                    </div>
                  </div>
                </TableColumn>
                <TableColumn className="py-[1.5rem]">
                  <div className="flex flex-col text-center sm:gap-[0.25rem]">
                    <h1 className="font-['DM_Serif_Display'] text-[#F31260] text-lg sm:text-[1.5rem]">Premium</h1>
                    <div>
                      <p>$999 USD / ₹72,729 INR</p>
                      <p>* Per Month *</p>
                    </div>
                  </div>
                </TableColumn>
              </TableHeader>
              <TableBody>
                {data.services.map((service, index) => (
                  <TableRow key={index} className="text-white font-mono">
                    <TableCell className="text-center text-xs sm:text-sm text-white font-mono">
                      {service.name}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center max-w-[10rem] font-sans text-default-500 text-xs">
                        {service.basic}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center max-w-[10rem] font-sans text-default-500 text-xs">
                        {service.standard}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center max-w-[10rem] font-sans text-default-500 text-xs">
                        {service.premium}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
      <Button onPress={onOpen} size="lg" variant="solid" color="warning">
        Buy
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        size="5xl"
        scrollBehavior="inside"
        placement="center"
      >
        <ModalContent>
          <ModalHeader className="font-bold text-xl justify-center">Please provide us with your details</ModalHeader>
          <ModalBody className="items-center p-[2rem] text-center">
            <div className="grid grid-cols-2 gap-[0.7rem] min-w-full">
              <Input
                type="text"
                required
                className="min-w-full"
                label="Full Name"
                name="user_name"
                ref={userNameRef}
                onChange={(event) => setUserNameState(event.target.value.length)}
                errorMessage={userNameState < 3 && userNameState >= 0 ? "Please enter a valid Name" : ""}
                isInvalid={userNameState < 3 && userNameState >= 0}
                aria-label="Full Name"
              />
              <Input
                type="email"
                required
                className="min-w-full"
                label="Email Address"
                aria-label="Email Address"
                name="email"
                ref={emailRef}
                onChange={checkEmail}
                isInvalid={emailValidity}
                errorMessage={emailValidity ? "Please enter a valid Email" : ""}
              />
              <Input
                type="text"
                required
                className="min-w-full"
                label="Company Name"
                aria-label="Company Name"
                name="user_company_name"
                ref={companyNameRef}
                onChange={(event) => setCompanyNameState(event.target.value.length)}
                errorMessage={companyNameState < 2 && companyNameState >= 0 ? "Please enter a valid Company Name" : ""}
                isInvalid={companyNameState < 2 && companyNameState >= 0}
              />
              <Input
                type="tel"
                required
                className="min-w-full"
                label="Phone Number"
                aria-label="Phone Number"
                name="user_number"
                ref={phoneNumberRef}
                onChange={(event) => setPhoneState(event.target.value.length)}
                errorMessage={phoneState < 10 && phoneState >= 0 ? "Please enter a valid Phone Number" : ""}
                isInvalid={phoneState < 10 && phoneState >= 0}
              />
            </div>
            <Textarea
              label="Address"
              aria-label="Address"
              required
              classNames={{
                base: "min-w-full",
                input: "min-h-[50px]",
              }}
              ref={addressRef}
              onChange={(event) => setAddressState(event.target.value.length)}
              isInvalid={addressState < 3 && addressState >= 0}
              errorMessage={addressState < 3 && addressState >= 0 ? "Please enter a valid Address" : ""}
            />
            <Divider />
            <h1 className="font-bold text-xl my-[1rem]">Select Services & Plans </h1>
            <div className="grid grid-cols-2 gap-[0.7rem] min-w-full">
              <Select
                label="Service"
                placeholder="Select a service"
                className="min-w-full"
                ref={selectedServices[0]}
                isRequired
              >
                {services.map((data, index) => (
                  <SelectItem key={data} value={data}>
                    {data}
                  </SelectItem>
                ))}
              </Select>
              <Select
                isRequired
                label="Plans"
                placeholder="Select a plan"
                className="min-w-full"
                ref={selectedPlans[0]}
              >
                {plans.map((data, index) => (
                  <SelectItem key={data} value={data}>
                    {data}
                  </SelectItem>
                ))}
              </Select>
              {[1, 2, 3].map((data) => (
                <>
                  <Select
                    label="Service"
                    placeholder="Select a service"
                    className="min-w-full"
                    ref={selectedServices[data]}
                  >
                    {services.map((data, index) => (
                      <SelectItem key={data} value={data}>
                        {data}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select label="Plans" placeholder="Select a plan" className="min-w-full" ref={selectedPlans[data]}>
                    {plans.map((data, index) => (
                      <SelectItem key={data} value={data}>
                        {data}
                      </SelectItem>
                    ))}
                  </Select>
                </>
              ))}
            </div>
          </ModalBody>
          <ModalFooter className="justify-center">
            <Button color="danger" variant="shadow" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button color="success" variant="shadow" className="text-white" onClick={handleProceed}>
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Toaster />
    </div>
  );
};

export default Rates;
