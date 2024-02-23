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

// Local Files
import "./Pricing.css";
import { useNavigate } from "react-router-dom";

const emailRe = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting = { position: "top-center" };

const successToast = (message) => {
  toast.success(message, toastSetting);
};
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

const services = [
  {
    label: "Website Development",
    value: "Website Development",
    description: "Empower your online presence",
  },
  { label: "SEO Services", value: "SEO Services", description: "Boost your visibility" },
  { label: "Promotional Booking Service", value: "Promotional Booking Service", description: "Maximize your reach" },
];
const plans = [
  {
    label: "Basic",
    value: "basic",
    description: "Our 15% clients use basic plan",
  },
  { label: "Standard", value: "Standard", description: "Our 30% clients use standard plan" },
  { label: "Premium", value: "Premium", description: "Our 55% clients use Premium plan" },
];

const Rates = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const email = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const companyNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const addressRef = useRef(null);
  const serviceOneRef = useRef(null);
  const planOneRef = useRef(null);
  const serviceTwoRef = useRef(null);
  const planTwoRef = useRef(null);
  const serviceThreeRef = useRef(null);
  const planThreeRef = useRef(null);

  const [emailValidity, setEmailValidity] = useState(false);

  const [emailState, setEmailState] = useState(-1);
  const [userNameState, setUserNameState] = useState(-1);
  const [companyNameState, setCompanyNameState] = useState(-1);
  const [phoneState, setPhoneState] = useState(-1);

  const handleClose = () => {
    userNameRef.current.value = "";
    emailRef.current.value = "";
    companyNameRef.current.value = "";
    phoneNumberRef.current.value = "";
    addressRef.current.value = "";
    serviceOneRef.current.value = "";
    planOneRef.current.value = "";
    serviceTwoRef.current.value = "";
    planTwoRef.current.value = "";
    serviceThreeRef.current.value = "";
    planThreeRef.current.value = "";
    onOpenChange(false);
  };

  const checkEmail = (event) => {
    email.current = event.target.value;
    setEmailState(event.target.value.length);

    const validity = email.current.match(emailRe);

    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  const handleProceed = () => {
    console.log("here");
    if (!emailValidity && userNameState > 0 && companyNameState > 0 && phoneState > 0 && emailState > 0) {
      const userData = {
        userName: userNameRef.current.value,
        email: emailRef.current.value,
        companyName: companyNameRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        address: addressRef.current.value,
        serviceOne: serviceOneRef.current.value,
        planOne: planOneRef.current.value,
        serviceTwo: serviceTwoRef.current.value,
        planTwo: planTwoRef.current.value,
        serviceThree: serviceThreeRef.current.value,
        planThree: planThreeRef.current.value,
      };

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
          <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[2rem]" key={index}>
            <div className="text-white max-w-[25rem] bg-[#18181B] flex flex-col justify-center gap-2 p-[2rem] rounded-2xl">
              <h1 className="text-2xl font-bold">{data.name}</h1>
              <p className="text-default-400">{data.desc}</p>
            </div>
            <Table className="dark max-w-[42rem]">
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} size="5xl" scrollBehavior="inside">
        <ModalContent>
          <ModalHeader className="justify-center">Please provide us with your details</ModalHeader>
          <ModalBody className="items-center p-[2rem] text-center">
            <div className="grid grid-cols-2 gap-[2rem] min-w-full">
              <Input
                type="text"
                className="min-w-full"
                label="Full Name"
                name="user_name"
                ref={userNameRef}
                onChange={(event) => setUserNameState(event.target.value.length)}
                errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
                isInvalid={userNameState === 0}
              />
              <Input
                type="email"
                className="min-w-full"
                label="Email Address"
                name="email"
                ref={emailRef}
                onChange={checkEmail}
                isInvalid={emailValidity}
                errorMessage={emailValidity ? "Please enter a valid Email" : ""}
              />
              <Input
                type="text"
                className="min-w-full"
                label="Company Name"
                name="user_company_name"
                ref={companyNameRef}
                onChange={(event) => setCompanyNameState(event.target.value.length)}
                errorMessage={companyNameState === 0 ? "Please enter a valid Company Name" : ""}
                isInvalid={companyNameState === 0}
              />
              <Input
                type="tel"
                className="min-w-full"
                label="Phone Number"
                name="user_number"
                ref={phoneNumberRef}
                onChange={(event) => setPhoneState(event.target.value.length)}
                errorMessage={phoneState === 0 ? "Please enter a valid Phone Number" : ""}
                isInvalid={phoneState === 0}
              />
            </div>
            <Textarea
              label="Address"
              placeholder="Address"
              classNames={{
                base: "min-w-full",
                input: "min-h-[50px]",
              }}
              ref={addressRef}
            />
            <Divider />
            <h1 className="font-bold text-xl">Select Services & Plans </h1>
            <div className="grid grid-cols-2 gap-[2rem] min-w-full">
              <Select
                isRequired
                startContent={<span>1.</span>}
                label="Service"
                placeholder="Select a service"
                className="min-w-full"
                ref={serviceOneRef}
              >
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </Select>
              <Select label="Plans" placeholder="Select a plan" className="min-w-full" ref={planOneRef}>
                {plans.map((plan) => (
                  <SelectItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                isRequired
                startContent={<span>1.</span>}
                label="Service"
                placeholder="Select a service"
                className="min-w-full"
                ref={serviceTwoRef}
              >
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </Select>
              <Select label="Plans" placeholder="Select a plan" className="min-w-full" ref={planTwoRef}>
                {plans.map((plan) => (
                  <SelectItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                isRequired
                startContent={<span>1.</span>}
                label="Service"
                placeholder="Select a service"
                className="min-w-full"
                ref={serviceThreeRef}
              >
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </Select>
              <Select label="Plans" placeholder="Select a plan" className="min-w-full" ref={planThreeRef}>
                {plans.map((plan) => (
                  <SelectItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </ModalBody>
          <ModalFooter className="justify-center">
            <Button color="danger" variant="shadow" onPress={handleClose}>
              Cancel
            </Button>
            <Button color="success" className="text-white" onClick={handleProceed}>
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
