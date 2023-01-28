import Home from "./home/Home";
import Product from "./components/Product";
import { useState, useEffect } from "react";
import Data from "./Data.json";
import Modal from "./components/Modal";
import MyCart from "./components/MyCart";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  
  const { mobileData } = useSelector((state) => state.mobileCart);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  // const [cartData, setCartData] = useState(mobileData);
  
  function handleModal(id) {
    setOpenModal((prev) => !prev);
    setData(() => Data.filter((el) => el.id === id));
  }

  function handleChangeModal() {
    setOpenModal((prev) => !prev);
  }

  function handleShow(id) {
    localStorage.setItem(
      "data",
      JSON.stringify(Data.filter((el) => el.id === id))
    );
  }
  useEffect(() => {
    let add = [
      ...mobileData
        .reduce((map, obj) => map.set(obj.id, obj), new Map())
        .values(),
    ];
    localStorage.setItem("cart-data", JSON.stringify(add));
  }, [mobileData]);

  // function myCart(id) {
  //   setCartData((prev) => [...prev, ...Data.filter((el) => el.id === id)]);
  // }

  // function handleDelete(id) {
  //   setCartData((prev) => prev.filter((el) => el.id !== id));
  // }

  // function Increment(id) {
  //   setCartData((prev) => {
  //     return prev.map((prod) =>
  //       prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
  //     );
  //   });
  // }
  // function Decrement(id) {
  //   setCartData((prev) => {
  //     return prev.map((prod) =>
  //       prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
  //     );
  //   });
  // }
  // function QuantityZero() {
  //   setCartData((prev) => {
  //     return prev.filter((el) => el.quantity !== 0);
  //   });
  // }
  // function Clear() {
  //   setCartData([]);
  // }

  return (
    <div className="App">
      <Navbar handleShow={handleShow} />
      {openModal && (
        <Modal
          data={data}
          handleChangeModal={handleChangeModal}
          handleModal={handleModal}
        />
      )}
      <Routes>
        <Route
          path="cart"
          element={<MyCart />}
        />
        <Route
          path="/"
          element={
            <Home
              handleShow={handleShow}
              handleModal={handleModal}
            />
          }
        />
        <Route
          path="product"
          element={<Product data={data} handleModal={handleModal} handleShow={handleShow}/>}
        />
        <Route
          path="*"
          element={<Home handleShow={handleShow} handleModal={handleModal} />}
        />
      </Routes>
    </div>
  );
}

export default App;
