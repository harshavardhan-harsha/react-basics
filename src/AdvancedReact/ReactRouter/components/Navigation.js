import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/User/harsha">User Harsha</NavLink>
        </li>
        <li>
          <NavLink to="/User/aarush">User Aarush</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
