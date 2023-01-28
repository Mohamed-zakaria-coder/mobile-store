import React from "react";
import "../styles/product.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/createSlice";

const Product = (props) => {
  
  let data = localStorage.getItem("data");
  const dispatch = useDispatch();
  return (
    <div className="product">
      {JSON.parse(data).map((mobile) => {
        return (
          <div key={mobile.id}>
            <h1>{mobile.type}</h1>
            <div className="prod">
              <div className="img-parent">
                <img src={mobile.img} alt="" />
              </div>
              <div className="description">
                <h2>Modmobile: {mobile.type}</h2>
                <p>Price: {mobile.price}</p>
                <p className="prod-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing it. Sed
                  inventore autem nemo impedit enim, doloremque commodi ut,
                  dolore beatae perferendis possimus
                </p>
                <NavLink to="home">
                  <button className="back">Back To products</button>
                </NavLink>
                <button
                  className="add"
                  onClick={() => {
                    
                    props.handleModal(mobile.id);
                    dispatch(addToCart(mobile.id));
                  }}
                >
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
