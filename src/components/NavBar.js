import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#C9A227",

  textDecoration: "none",
  color: "white",
  borderRadius: "8px",
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "center",
  marginLeft: "50px",
  marginRight: "50px",
};

function NavBar() {
  return (
    <div className="navBar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#a17f1a",
          borderStyle: "dotted",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Players"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#a17f1a",
          borderStyle: "dotted",
        }}
      >
        Index
      </NavLink>
    </div>
  );
}

export default NavBar;
