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
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/T&C" element={<Terms />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
