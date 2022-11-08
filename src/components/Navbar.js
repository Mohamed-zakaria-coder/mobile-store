import React from "react";
import { BsCart3 } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h4>
          <GoDeviceMobile className="mobile-icon" /> Products{" "}
        </h4>
      </NavLink>
      <NavLink
        to="cart"
        className="cart-parent"
        style={{ textDecoration: "none" }}
      >
        <div className="icon-parent">
          <h4 onClick={props.handleShow}>
            <BsCart3 className="cart-icon" /> My Cart
          </h4>
        </div>
      </NavLink>
    </div>
  );
}
