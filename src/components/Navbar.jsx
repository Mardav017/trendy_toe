import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Kids from "../pages/Kids";
import Cart from "./Cart";

const Navbar = () => {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  
  
  return (
    <>
      <Router>
        <div className="flex p-4 border shadow-md sticky top-0 bg-white w-full justify-between">
          {/* <span class="material-icons">polymer</span> */}
          <img className="w-24" src="/logo3.png" alt="" />
          <section className="flex gap-6 font-semibold text-sm font-sans text-gray-700">
            <Link to="/">HOME</Link>
            <Link to="/Mens">MEN</Link>
            <Link to="/Women">WOMEN</Link>
            <Link to="/Kid">KIDS</Link>
            

         
            <span class="material-icons cursor-pointer">person</span>
            <Link to="/Cart"><span class="material-icons cursor-pointer">shopping_bag</span></Link>
            
          </section>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mens" element={<Mens handleAddToCart={handleAddToCart}/>} />
          <Route path="/Women" element={<Womens handleAddToCart={handleAddToCart}/>} />
          <Route path="/Kid" element={<Kids handleAddToCart={handleAddToCart}/>} />
          <Route path="/Cart" element={<Cart cart={cart} />} />

        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
