import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const toastSetting = { position: "top-center" };

const successToast = (message) => {
  toast.success(message, toastSetting);
};
const errorToast = (message) => {
  toast.error(message, toastSetting);
};
const services = ["Website Development", "SEO Services", "Promotional Booking Service"];
const plans = ["Basic", "Standard", "Premium"];
const rupeesCost = [36500, 54750, 72729];
const dollarCost = [500, 750, 999];

const Checkout = () => {
  const location = useLocation();
  const pdfRef = useRef();
  const userData = location.state;

  useEffect(() => {
    const handlePrint = (e) => {
      e.preventDefault();
      generateReceipt();
    };

    window.print = handlePrint;

    return () => {
      window.print = window.__originalPrint;
    };
  }, []);

  if (!userData) {
    return <div>No data available</div>;
  }

  const countCost = (service, plan) => {
    const serviceIndex = services.indexOf(service);
    const planIndex = plans.indexOf(plan);

    if (serviceIndex === -1 || planIndex === -1) {
      return 0;
    }

    const rupeesPrice = rupeesCost[serviceIndex];

    return rupeesPrice;
  };

  const purchaseOne = countCost(userData.serviceOne, userData.planOne);
  const purchaseTwo = countCost(userData.serviceTwo, userData.planTwo);
  const purchaseThree = countCost(userData.serviceThree, userData.planThree);

  let total = purchaseOne + purchaseTwo + purchaseThree;

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

  const genReceiptId = (counter) => {
    // Timestamp component (YYYYMMDDHHMMSS)
    const currentDate = new Date();
    const timestampComponent = currentDate.toISOString().slice(0, 19).replace(/[-:T]/g, "");

    // Random component (5 digits)
    const randomComponent = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");

    // Counter Component - Resets every Day
    const counterComponent = counter.toString().padStart(5, "0");

    // UserId
    const userId = "tmis_receipt_" + timestampComponent + randomComponent + counterComponent;

    return userId;
  };

  const displayRazorpay = async () => {
    const receiptId = genReceiptId(6);
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      errorToast("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:5000/api/payment/orders", { total, receiptId });
    if (!result) {
      errorToast("Server error. Are you online?");
      return;
    }
    const { id: orderId, currency, amount, status, notes, attempts } = result.data.payload.order;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount,
      currency: currency,
      name: "TMIS PVT LTD",
      description: "Test Transaction",
      // image: { logo },
      orderId: orderId,
      handler: async function (response) {
        const data = {
          orderCreationId: orderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        const result = await axios.post("http://localhost:5000/api/payment/success", data);
        if (result) {
          generateReceipt();
        }
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
    paymentObject.open();
  };

  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#receipt-table" });
    doc.save("receipt.pdf");
  };

  const serviceNotFound = "Service Not Found";
  const planNotFound = "Plan Not Found";
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
        </TableBody>
      </Table>
      <Table id="receipt-table" className=" max-w-full p-[1rem]">
        <TableHeader>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Service</TableColumn>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Plan</TableColumn>
          <TableColumn className="text-center font-bold text-xl p-2 text-black border-2">Cost</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow className="">
            <TableCell className=" border-2 text-start font-mono font-bold text-md ">
              {userData.serviceOne || serviceNotFound}
            </TableCell>
            <TableCell className="border-2 ">{userData.planOne || planNotFound}</TableCell>
            <TableCell className="border-2 ">{purchaseOne.toString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">
              {userData.serviceTwo || serviceNotFound}
            </TableCell>
            <TableCell className="border-2 ">{userData.planTwo || planNotFound}</TableCell>
            <TableCell className="border-2 ">{purchaseTwo.toString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-2 text-start font-mono font-bold text-md">
              {userData.serviceThree || serviceNotFound}
            </TableCell>
            <TableCell className="border-2 ">{userData.planThree || planNotFound}</TableCell>
            <TableCell className="border-2 ">{purchaseThree.toString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className=""></TableCell>
            <TableCell className="text-xl ">Total : </TableCell>
            <TableCell className="border-2 font-bold">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button className="" variant="shadow" color="primary" radius="none" onClick={displayRazorpay}>
        Pay Now
      </Button>
      <Button className="" variant="shadow" color="success" radius="none" onClick={() => window.print()}>
        Download Receipt
      </Button>
    </div>
  );
};

export default Checkout;
