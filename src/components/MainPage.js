import React from "react";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Container from "./Container";

const MainPage = () => {
  return (
    <div>
      <div className="page-wrapper">
        <Dashboard />
        <Container/>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
