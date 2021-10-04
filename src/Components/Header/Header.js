import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="overlay">
      <div className="header">
      <h1>LEARN PROGRAMMING</h1>
        <div className="link">
          <NavLink
            to="/home"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
            className="headerLink"
          >
            Home
          </NavLink>
          <NavLink
            to="/course"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
            className="headerLink"
          >
            Course
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
            className="headerLink"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
            className="headerLink"
          >
            Contact
          </NavLink>
        </div>

        <h1>Become the Programmer that gets the job offer!</h1>
        <h3>
          Life is too short to risk outdated or obsolete training
          <br />
          Learn the right way to program that will maximize your future career
          options
        </h3>
      </div>
    </div>
  );
};

export default Header;
