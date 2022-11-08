import React from "react";
import { BsCart3 } from "react-icons/bs";
import "../styles/ourproduct.css";
import { NavLink } from "react-router-dom";

export default function SoloProduct(props) {
  return (
    <div className="our-products">
      <div className="card">
        <NavLink to="product">
          <div className="img-parent">
            <img
              src={props.img}
              alt={props.type}
              onClick={() => props.handleShow(props.id)}
            />
          </div>
        </NavLink>
        <div className="info">
          <p className="type">{props.type}</p>
          <BsCart3
            className="bscart"
            onClick={() => {
              props.handleModal(props.id);
              props.myCart(props.id);
            }}
          />
          <h5 className="price">{props.price}$</h5>
        </div>
      </div>
    </div>
  );
}
