// Dependencies
import { useState, useRef } from "react";
import axios from "axios";
import { Button, Input } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { setCookie } from "../../../utils/cookies";

// Local Files
import "./UserAuth.css";
import EyeFilledIcon from "./EyeFilledIcon";
import EyeSlashFilled from "./EyeSlashFilled";
import {
  emailRe,
  passwordRe,
  passwordSpclChar,
  passwordDigit,
  passwordHighCase,
  passwordLowCase,
} from "../../../utils/authRegex";

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const errorToast = (message) => {
  toast.error(message);
};

const UserAuth = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const email = useRef("");
  const password = useRef("");

  const [invalidPasswordMessage, setInvalidPasswordMessage] = useState("");

  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [handleLoginButton, setHandleLoginButton] = useState(false);

  const checkEmail = (event) => {
    email.current = event.target.value;
    const validity = email.current.match(emailRe);

    if (validity) {
      setEmailState(false);
    } else {
      setEmailState(true);
    }
  };

  const checkPassword = (event) => {
    password.current = event.target.value;

    if (password.current.length < 8) {
      setPasswordState(true);
      setInvalidPasswordMessage("Password should have a minimum length of 8 characters");
    } else if (password.current.match(passwordSpclChar) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one special character (!@#$&*^%_-+)");
    } else if (password.current.match(passwordLowCase) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one lowercase letter");
    } else if (password.current.match(passwordHighCase) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one uppercase letter");
    } else if (password.current.match(passwordDigit) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one digit in your password");
    } else if (password.current.match(passwordRe) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Password includes invalid character(s)");
    } else {
      setPasswordState(false);
      setInvalidPasswordMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailState || passwordState || email.current.length === 0 || password.current.length === 0) {
      errorToast("Please The Form Correctly");
      return;
    }
    try {
      setHandleLoginButton(true);
      const response = await axios.post(`${apiUrl}/users/login`, {
        email: email.current,
        password: password.current,
      });

      if (response.data.success) {
        const cookieOptions = { expires: response.data.payload.expires };

        setCookie("token", response.data.payload.token, cookieOptions);
        setCookie("admin", true, cookieOptions);
        navigate("/Career");
      } else {
        errorToast(response.data.payload.message);
        setHandleLoginButton(false);
      }
    } catch (error) {
      errorToast(error.response.data.payload.message);
      setHandleLoginButton(false);
    }
  };

  return (
    <form className="flex flex-col justify-center sm:min-w-[27rem] p-12 gap-3 Auth " onSubmit={handleSubmit}>
      <Link to="../" className="mb-[2rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE]">
        <FaArrowRightLong />
        <p>Home</p>
      </Link>
      <div className="flex gap-2 font-semibold welcomeText">
        <h1>Welcome to TMIS</h1>
        <p>👋</p>
      </div>
      <p className="text-xs mb-2">Please Login and start the adventure !</p>
      <Input
        type="email"
        label="Email"
        maxLength={100}
        labelPlacement="outside"
        placeholder="Enter your email"
        onKeyDown={handleKeyPress}
        isInvalid={emailState}
        errorMessage={emailState ? "Please enter a valid Email" : ""}
        onChange={checkEmail}
        radius="none"
        variant="bordered"
      />
      <Input
        variant="bordered"
        radius="none"
        label="Password"
        labelPlacement="outside"
        placeholder="Enter your password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilled className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyPress}
        isInvalid={passwordState}
        errorMessage={passwordState ? invalidPasswordMessage : ""}
        onChange={checkPassword}
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
      />
      <Button
        className="mt-2 mb-2"
        color="primary"
        variant="shadow"
        type="submit"
        radius="none"
        isLoading={handleLoginButton}
      >
        Login
      </Button>
      <Toaster />
    </form>
  );
};

export default UserAuth;
