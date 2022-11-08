import React from "react";
import "../styles/product.css";
import { NavLink } from "react-router-dom";
const Product = (props) => {
  let data = localStorage.getItem("data");
  return (
    <div className="product">
      {JSON.parse(data).map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.type}</h1>
            <div className="prod">
              <div className="img-parent">
                <img src={el.img} alt="" />
              </div>
              <div className="description">
                <h2>Model: {el.type}</h2>
                <p>Price: {el.price}</p>
                <p className="prod-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  inventore autem nemo impedit enim, doloremque commodi ut,
                  dolore beatae perferendis possimus
                </p>
                <NavLink to="home">
                  <button className="back">Back To products</button>
                </NavLink>
                <button className="add" onClick={() => props.myCart(el.id)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
