// Dependencies
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Select,
  SelectItem,
  Checkbox,
} from "@nextui-org/react";
import { scrollTop } from "../../../utils/methods";

const toastSetting = { position: "top-center" };

const successToast = (message) => {
  toast.success(message, toastSetting);
};

const errorToast = (message) => {
  toast.error(message, toastSetting);
};

const currency = ["INR", "USD"];

const Checkout = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const location = useLocation();
  const userData = location.state;

  let total = 0;
  const [transCur, setTransCur] = useState("INR");
  const [transSuccess, setTransSuccess] = useState(false);
  const [concent, setConcent] = useState(false);
  const [successOrderId, setSuccessorderId] = useState("");
  const [successReceiptId, setSuccessreceiptId] = useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (totalAmt, cur) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      errorToast("Razorpay failed to load. Are you online?");
      return;
    }

    const result = await axios.post(`${apiUrl}/payment/orders`, { totalAmt, cur });
    if (!result.data.success) {
      errorToast("Unable to process Order.Try Again");
      return;
    }

    const { id: orderId, amount } = result.data.payload.order;
    if (orderId === undefined || amount === undefined) {
      errorToast("Order Creating Failed. Try Again");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount,
      currency: cur,
      name: "TRAVELMAGNET INFOTECH PRIVATE LIMITED",
      description: "Service Purchase",
      order_id: orderId,
      handler: async function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        const result = await axios.post(`${apiUrl}/payment/verify`, data);
        if (!result.data.success) {
          errorToast("Payment Varification Failed. Try Again");
          return;
        }
        setSuccessorderId(response.razorpay_order_id);
        setSuccessreceiptId(response.razorpay_payment_id);
        successToast("Payment Successful!!");
        setTransSuccess(true);
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const getPrice = (plan) => {
    let serviceCost = 0;
    if (plan === "Basic") {
      serviceCost = transCur === "USD" ? 500 : 36500;
    } else if (plan === "Standard") {
      serviceCost = transCur === "USD" ? 750 : 54750;
    } else {
      serviceCost = transCur === "USD" ? 999 : 72729;
    }

    total += serviceCost;

    return `${serviceCost} ${transCur}`;
  };

  return (
    <div className="flex flex-col gap-y-[1rem]  p-[2rem] justify-center items-center">
      <h1 className="text-2xl font-bold">BILLING DETAILS</h1>
      <Table hideHeader className="max-w-full p-[1rem]">
        <TableHeader>
          <TableColumn className="text-center font-['DM_Serif_Display'] text-lg sm:text-[1.5rem] py-[1.5rem] text-default-800">
            Field
          </TableColumn>
          <TableColumn className="py-[1.5rem]">Value</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=" border-2 text-start font-mono font-bold text-md">Full Name</TableCell>
            <TableCell className="border-2 ">{userData.userName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">Email Address</TableCell>
            <TableCell className="border-2 ">{userData.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">Company Name</TableCell>
            <TableCell className="border-2 ">{userData.companyName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">Phone Number</TableCell>
            <TableCell className="border-2 ">{userData.phoneNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">Address</TableCell>
            <TableCell className="border-2 ">{userData.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">Order Id</TableCell>
            <TableCell className="border-2 ">{successOrderId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">Receipt Id</TableCell>
            <TableCell className="border-2 ">{successReceiptId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">Transaction Currency</TableCell>
            <TableCell className="border-2 ">
              <Select
                className="max-w-[8rem]"
                defaultSelectedKeys={[currency[0]]}
                onChange={(e) => setTransCur(e.target.value)}
                aria-label="Currency"
                required
                disallowEmptySelection
              >
                {currency.map((data, index) => (
                  <SelectItem key={data} value={data}>
                    {data}
                  </SelectItem>
                ))}
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table id="receipt-table" className=" max-w-full p-[1rem]">
        <TableHeader>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Service</TableColumn>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Plan</TableColumn>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Cost</TableColumn>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((data, index) => {
            if (userData.service[index] && userData.plan[index]) {
              return (
                <TableRow className="">
                  <TableCell className=" border-2 text-start font-mono font-bold text-md ">
                    {userData.service[index]}
                  </TableCell>
                  <TableCell className="border-2 ">{userData.plan[index]}</TableCell>
                  <TableCell className="border-2 ">{getPrice(userData.plan[index])}</TableCell>
                </TableRow>
              );
            } else {
              return null;
            }
          })}
          <TableRow className="" colSpan={2}>
            <TableCell className=" border-2 text-start font-mono font-bold text-md ">Total</TableCell>
            <TableCell className=" border-2 text-start font-mono font-bold text-md "></TableCell>
            <TableCell className="border-2 ">
              {total} {transCur}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {transSuccess ? (
        <Button
          className="text-white"
          color="success"
          onClick={() => {
            scrollTop();
            setTimeout(() => {
              window.print();
            }, 500);
          }}
        >
          Download Receipt
        </Button>
      ) : (
        <>
          <Checkbox size="sm" onChange={() => setConcent((prev) => !prev)}>
            I Agree.
          </Checkbox>
          <p className="max-w-[80%] text-justify">
            By clicking "I Agree" you acknowledge that you have read, understood, and agree to be bound by the documents
            which constitute the terms and conditions governing your use of our services. The Terms & Conditions,
            Privacy and Refund Policy can be found in our website. Please Do read the documents in its entirety before
            proceeding. By clicking "I Agree," you confirm that you have read and understood the terms and policies
            outlined above and agree to abide by them.
          </p>
          <Button
            isDisabled={!concent}
            color="primary"
            className="mt-[2rem]"
            onClick={() => displayRazorpay(total, transCur)}
          >
            Pay Now
          </Button>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default Checkout;
