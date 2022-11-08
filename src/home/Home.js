import React from "react";
import OurProducts from "../components/OurProducts";
import Data from "../Data.json";
import "../styles/home.css";

export default function Home(props) {
  const elements = Data.map((element) => {
    return (
      <OurProducts
        key={element.id}
        img={element.img}
        price={element.price}
        id={element.id}
        type={element.type}
        handleShow={props.handleShow}
        handleModal={props.handleModal}
        myCart={props.myCart}
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
