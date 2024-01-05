import React from "react";
import "./components/Services.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AllServices from "./components/AllServices";
import IndividualService from "./components/IndividualService";

const Services = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="./All" />} />
      <Route path="/All" element={<AllServices />} />
      <Route path="/Individual" element={<IndividualService />} />
      <Route path="*" element={<Navigate to="./All" />} />
    </Routes>
  );
};

export default Services;
