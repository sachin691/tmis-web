// Dependencies
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
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
} from "@nextui-org/react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

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

  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#receipt-table" });
    doc.save("receipt.pdf");
  };

  const displayRazorpay = async (totalAmt, cur) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      errorToast("Razorpay failed to load. Are you online?");
      return;
    }

    const result = await axios.post(`${apiUrl}/payment/orders`, { totalAmt, cur });
    if (!result.success) {
      errorToast("Unable to process Order.Try Again");
      return;
    }

    const { orderId } = result.data.payload.order;
    if (orderId === undefined) {
      errorToast("Order Creating Failed. Try Again");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: totalAmt,
      currency: cur,
      name: "TRAVELMAGNET INFOTECH PRIVATE LIMITED",
      description: "Service Purchase",
      orderId: orderId,
      handler: async function (response) {
        const data = {
          orderCreationId: orderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(`${apiUrl}/payment/varify`, data);
        if (!result.success) {
          errorToast("Payment Varification Failed. Try Again");
          return;
        }

        generateReceipt();
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
        <Button className="" variant="shadow" color="success" radius="none" onClick={() => window.print()}>
          Download Receipt
        </Button>
      ) : (
        <Button className="" variant="shadow" color="primary" onClick={() => displayRazorpay(total, transCur)}>
          Pay Now
        </Button>
      )}
    </div>
  );
};

export default Checkout;
