// Dependencies
import { Input, Button } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { scrollTop } from "../../utils/methods";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
// Local Files
import "./Contact.css";

const emailRe = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting = { position: "top-right" };

const formNotFill = () =>
  toast.error("Please Fill The Form Correctly", toastSetting);
const emailSent = () => toast.success("Email Sent", toastSetting);
const emailNotSent = () => toast.error("Email Not Sent", toastSetting);

const ContactUs = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));
  const form = useRef();
  const email = useRef("");
  const budgetType = useRef("INR");

  const [emailValidity, setEmailValidity] = useState(false);

  const [emailState, setEmailState] = useState(-1);
  const [userNameState, setUserNameState] = useState(-1);
  const [companyNameState, setCompanyNameState] = useState(-1);
  const [phoneState, setPhoneState] = useState(-1);
  const [budgetState, setBudgetState] = useState(-1);

  const sendEmail = () => {
    if (
      userNameState > 0 &&
      companyNameState > 0 &&
      phoneState > 0 &&
      budgetState > 0 &&
      emailState > 0
    ) {
      emailjs
        .sendForm(
          "service_6p4ehwj",
          "tmis_yr6qfud",
          form.current,
          "7YzRkbs9NFMM3jEW5"
        )
        .then(() => emailSent())
        .catch(() => emailNotSent());
    } else {
      formNotFill();
    }
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
  scrollTop();
  return (
    <div className="ContactUs flex py-[6rem] justify-evenly items-center">
      <div className="flex flex-col ">
        <h1 className="py-[1rem] font-['rubik_doodle_shadow']  text-white font-bold text-7xl">
          Contact Us
        </h1>
        <form
          className="w-[30rem] py-[2rem] flex-wrap md:flex-nowrap flex flex-col gap-[1rem]"
          ref={form}
          onSubmit={sendEmail}
        >
          <Input
            type="email"
            label="Email"
            name="user_email"
            onChange={checkEmail}
            isInvalid={emailValidity}
            errorMessage={emailValidity ? "Please enter a valid Email" : ""}
          />
          <Input
            type="text"
            label="Full Name"
            name="user_name"
            onChange={(event) => setUserNameState(event.target.value.length)}
            errorMessage={
              userNameState === 0 ? "Please enter a valid Name" : ""
            }
            isInvalid={userNameState === 0}
          />
          <Input
            type="text"
            label="Company Name"
            name="user_company_name"
            onChange={(event) => setCompanyNameState(event.target.value.length)}
            errorMessage={
              companyNameState === 0 ? "Please enter a valid Company Name" : ""
            }
            isInvalid={companyNameState === 0}
          />
          <Input
            type="tel"
            label="Phone Number"
            name="user_number"
            onChange={(event) => setPhoneState(event.target.value.length)}
            errorMessage={
              phoneState === 0 ? "Please enter a valid Phone Number" : ""
            }
            isInvalid={phoneState === 0}
          />
          <Input
            type="number"
            label="Monthly Budget ( INR / USD )"
            name="user_budget"
            endContent={
              <div className="flex items-center translate-y-[-0.5rem]">
                <label className="sr-only" htmlFor="currency">
                  Currency
                </label>
                <select
                  className="outline-none border-0 bg-transparent text-default-400 text-small"
                  id="currency"
                  name="user_currency"
                  onChange={(event) =>
                    (budgetType.current = event.target.value)
                  }
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            }
            onChange={(event) => setBudgetState(event.target.value.length)}
            errorMessage={
              budgetState === 0 ? "Please enter a valid Budget" : ""
            }
            isInvalid={budgetState === 0}
          />
        </form>
        <Button
          size="lg"
          className="w-[30rem] "
          variant="bordered"
          color="primary"
          radius="none"
          onClick={sendEmail}
        >
          <span>Send Message</span>
        </Button>
        <Toaster />
      </div>
      <div className="text-white max-w-[30rem] flex-col gap-[2rem] hidden lg:flex">
        <h1 className="font-bold text-[3rem] leading-[3rem]">TMIS Solutions</h1>
        <p>
          We're eager to hear from you! Whether you have inquiries about our
          international customer service solutions, are interested in exploring
          partnership opportunities, or simply want to learn more about how TMIS
          can elevate your business, fill out the form below. Our team is ready
          to connect with you and provide tailored solutions to meet your unique
          needs. Let's start a conversation and embark on a journey towards
          unparalleled success together. Your satisfaction is our priority, and
          we look forward to being your trusted partner in international
          customer service excellence.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
