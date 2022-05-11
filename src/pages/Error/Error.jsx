import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container">
        <Link className="btn btn-secondary" to="/login">Log in</Link>
      </div>
    </>
  );
};

export default Error;
