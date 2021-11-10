import React from "react";
import Lending from "../components/Lending/Lending";
import Dashboard from "../components/Dashboard/Dashboard";
import Borrowboard from "../components/Dashboard/Borrowboard";

const Lenders = () => {
  const userType = localStorage.getItem("type");

  if (!userType) {
    return <Lending />;
  }

  if (userType === "lender") {
    return <Dashboard />;
  }

  return <Borrowboard />;
};

export default Lenders;
