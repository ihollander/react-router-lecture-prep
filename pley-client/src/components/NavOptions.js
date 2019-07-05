import React from "react";
import { Link } from "react-router-dom";

const NavOptions = ({ isSignedIn, handleSignIn, handleSignOut }) => {
  return (
    <div className="options">
      <Link to="/customers">All Customers</Link>
      <Link to="/profile">Profile</Link>
      {isSignedIn ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default NavOptions;
