import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="lds-ripple">
        <div className="lds-pos"></div>
        <div className="lds-pos"></div>
      </div>
    </div>
  );
};

export default Preloader;
