import NavBar from "./components/globalComponents/navbar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/globalComponents/footer/Footer";
import ContactUs from "./components/contact/ContactUs";
import Privacy from "./components/privacy/Privacy";
import Refund from "./components/globalSubComponents/Refund";
import Terms from "./components/globalSubComponents/Terms";
import ApplyForm from "./components/career/Components/ApplyForm"
import Career from "./components/career/Career"
import JobDescription from "./components/career/Components/JobDescription"
import Create from "./components/career/Create"
import Auth from "./components/Auth/Auth";

import Checkout from "./components/pricing/components/Checkout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services/*" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Privacy&Policy" element={<Privacy />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/T&C" element={<Terms />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Career/:name" element={<JobDescription />} />
        <Route path="/Career/Applyjob" element={<ApplyForm />} />
        <Route path="/Career/Create" element={<Create />} />
        <Route path="/Auth" element={<Auth />} />

        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
