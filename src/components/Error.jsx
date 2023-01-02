import React from "react";
import "../styles/error.css";
const Error = () => {
  return (
    <div className="PageNotFound">
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span> <br></br>
        <span>page not found</span>
      </div>
    </div>
  );
};

export default Error;
