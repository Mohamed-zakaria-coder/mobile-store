import React from "react";
import "../styles/cart.css";
import { ImBin2 } from "react-icons/im";

export default function MyCart(props) {
  // let getData = JSON.parse(localStorage.getItem('cart-data')) || []
  // let cartDataLocalS = [...getData.reduce((map,obj) => map.set(obj.id, obj), new Map()).values()]
  let cartData = [
    ...props.cartData
      .reduce((map, obj) => map.set(obj.id, obj), new Map())
      .values(),
  ];
  return (
    <div className="cart" id="cart">
      {props.cartData.length > 0 ? (
        <h2>Your Cart</h2>
      ) : (
        <h2>Your Cart Is Empty</h2>
      )}
      <div className="info-parent">
        {props.cartData.length > 0 &&
          cartData.map((product) => {
            return (
              product.quantity > 0 && (
                <div className="prod" key={product.id}>
                  <div className="img-parent">
                    {window.innerWidth > 600 && <h3>Products</h3>}
                    <img src={product.img} alt="" />
                  </div>
                  <div className="flex">
                    <h3>Price</h3>
                    <p className="el-top">{product.price}</p>
                  </div>
                  <div className="flex">
                    <h3>Type</h3>
                    <p className="el-top">{product.type}</p>
                  </div>
                  <div className="flex">
                    <div>
                      <h3>Quantity</h3>
                    </div>
                    <div className="quantity flex">
                      <button
                        className="plus sp"
                        onClick={() => props.Increment(product.id)}
                      >
                        +
                      </button>
                      <div>{product.quantity}</div>
                      <button
                        className="minus sp"
                        onClick={() => {
                          props.Decrement(product.id);
                          props.QuantityZero();
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <h3>Remove</h3>
                    <ImBin2
                      onClick={() => props.delete(product.id)}
                      className="el-top"
                    />
                  </div>
                  <div className="flex">
                    <h3>Total</h3>
                    <h4 className="el-top">
                      {product.quantity * product.price > 0 &&
                        product.quantity * product.price}
                    </h4>
                  </div>
                </div>
              )
            );
          })}
      </div>
      {props.cartData.length > 0 && (
        <h4 className="total">
          <div>Total:</div>
          <div>
            {props.cartData.reduce((prev, curr) => {
              return prev + Number(curr.quantity) * Number(curr.price);
            }, 0)}
          </div>
        </h4>
      )}
      <div className="clear-parent">
        {props.cartData.length > 0 && (
          <button onClick={props.Clear} className="clear">
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}
