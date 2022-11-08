import React from "react";
import "../styles/modal.css";
import { NavLink } from "react-router-dom";
export default function Modal(props) {
  return (
    <div className="modal-parent">
      <div className="modal">
        {props.data.map((el) => {
          return (
            <div className="prod" key={el.id}>
              <h4>Item Added To Cart</h4>
              <div className="img-parent">
                <img src={el.img} alt="" />
              </div>
              <p>Price: {el.price}</p>
              <button onClick={props.handleModal} className="continue">
                Continue
              </button>
              <NavLink to="cart">
                <button className="back" onClick={props.handleChangeModal}>
                  Go To Cart
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
