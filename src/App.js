import "./App.css";
// import Home from "./components/Home";
// import Men from "./components/Men";
// import VerFilter from "./components/VerFilter";
// import HorFilter from "./components/HorFilter";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {

  


  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  

  return (
    <div className="App ">
      <Navbar toggleCart={toggleCart} />
    </div>
  );
}

export default App;
