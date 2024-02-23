import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const toastSetting = { position: "top-center" };

const successToast = (message) => {
  toast.success(message, toastSetting);
};
const errorToast = (message) => {
  toast.error(message, toastSetting);
};
const Checkout = () => {
  const location = useLocation();
  const userData = location.state;

  if (!userData) {
    return <div>No data available</div>;
  }

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

  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      errorToast("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:5000/api/payment/orders");
    if (!result) {
      errorToast("Server error. Are you online?");
      return;
    }
    const { amount, id: order_id, currency } = result.data.payload.order;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // Enter the Key ID generatenpm d from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "TMIS PVT LTD",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        console.log("starting transaction");
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log("data", data);
        const result = await axios.post("http://localhost:5000/payment/success", data);
      },
      prefill: {},
      notes: {
        address: "TMIS Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    console.log("done");
    paymentObject.open();
  };
  return (
    <div className="flex flex-col gap-y-[1rem] bg-gray-300 p-[2rem] justify-center items-center">
      <h1 className="text-2xl font-bold">CHECKOUT RECEIPT</h1>
      <Table hideHeader isStriped className=" max-w-[42rem]">
        <TableHeader>
          <TableColumn className="text-center font-['DM_Serif_Display'] text-lg sm:text-[1.5rem] py-[1.5rem] text-default-800">
            Field
          </TableColumn>
          <TableColumn className="py-[1.5rem]">Value</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=" border-2 text-start font-mono font-bold text-xl">Full Name</TableCell>
            <TableCell className="border-2 ">{userData.userName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-xl">Email Address</TableCell>
            <TableCell className="border-2 ">{userData.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-xl">Company Name</TableCell>
            <TableCell className="border-2 ">{userData.companyName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-xl">Phone Number</TableCell>
            <TableCell className="border-2 ">{userData.phoneNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-xl">Address</TableCell>
            <TableCell className="border-2 ">{userData.address}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table isStriped className=" max-w-[42rem]">
        <TableHeader>
          <TableColumn className=" text-center font-bold text-xl p-2 text-black border-2">Service</TableColumn>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Plan</TableColumn>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Cost</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=" border-2 text-start font-mono font-bold text-md">{userData.serviceOne}</TableCell>
            <TableCell className="border-2 ">{userData.planOne}</TableCell>
            <TableCell className="border-2 ">{userData.userName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">{userData.serviceTwo}</TableCell>
            <TableCell className="border-2 ">{userData.planTwo}</TableCell>
            <TableCell className="border-2 ">{userData.userName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">{userData.serviceThree}</TableCell>
            <TableCell className="border-2 ">{userData.planThree}</TableCell>
            <TableCell className="border-2 ">{userData.userName}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Checkout;
