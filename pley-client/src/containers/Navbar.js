import React from "react";
import NavOptions from "../components/NavOptions";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/home">
          <img
            className="logo"
            src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1438879385/lyaw1ovbiivsax419fbw.png"
            alt="logo"
          />
        </Link>
        <NavOptions setCurrentPage={this.props.setCurrentPage} />
      </div>
    );
  }
}

export default Navbar;
