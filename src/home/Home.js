import React from "react";
import Products from "../components/Products";
import Data from "../Data.json";
import "../styles/home.css";

export default function Home(props) {
  const elements = Data.map((element) => {
    return (
      <Products
        key={element.id}
        img={element.img} 
        price={element.price}
        id={element.id}
        type={element.type}
        handleShow={props.handleShow}
        handleModal={props.handleModal}
      />
    );
  });
  return (
    <div className="home">
      <h1>Products</h1>
      <div className="elements-parent">{elements}</div>
    </div>
  );
}
