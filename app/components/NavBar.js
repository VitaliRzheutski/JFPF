import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <Link to="/">
        <p className="section-title">Home page</p>
      </Link>
      <Link to="/students">
        <p className="section-title">Go to Students</p>
      </Link>
      <Link to="/campuses">
        <p className="section-title">Go to Campuses</p>
      </Link>
      
    </div>
  );
};

export default Navbar;
