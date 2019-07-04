import React from "react";
import { Link } from "react-router-dom";

const NavOptions = props => {
  return (
    <div className="options">
      <Link to="/customers">All Customers</Link>
      <Link to="/profile">Profile</Link>
      <button>Sign out</button>
    </div>
  );
};

export default NavOptions;
