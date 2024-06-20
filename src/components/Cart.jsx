import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {

let total = 0;

  return (
    <div>
      <div className="w-full h-32 p-10 mb-3 bg-amber-100">
        <h3 className="text-4xl ">Your Cart</h3>
      </div>

      {cart.map((product, index) => (
        <div className="border h-72 mx-10 w-3/4 flex" key={index}>
          <div
            className="bg-gray-500 m-5 h-52"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "18%",
              height: "80%",
            }}
          ></div>
          <div className="m-10">
            <h1 className="px-1 font-semibold text-lg">{product.brand}</h1>
            <h2 className="px-1 text-xl">{product.name}</h2>
            <h2 className="px-1 text-lg mt-10">Rs. {product.price}</h2>
            <div hidden>{total=total+product.price}</div>
            
          </div>
        </div>
      ))}

      <div className="border mt-10 w-full h-14 flex justify-end">
      <h1 className="text-lg mx-16">Total:   {total}</h1>
        <button
          className="bg-slate-500 p-2 mt-2 mr-14"
          onClick={() => alert("Order Placed")}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
