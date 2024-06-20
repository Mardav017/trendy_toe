import React, { useState } from "react";

import HorFilter from "../components/HorFilter";
import VerFilter from "../components/VerFilter";
import Men from "../components/Men";
import Footer from "../components/Footer";

const Mens = ({handleAddToCart}) => {

  const [selectedGender, setSelectedGender] = useState("Men"); 

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value); 

    if (event.target.value === "Men") {
        window.location.href = "/Mens";
      }
    if (event.target.value === "Women") {
        window.location.href = "/Women";
      }
    if (event.target.value === "Kids") {
        window.location.href = "/Kids";
      }
  };


  return (
    <>
      <HorFilter />
      <section className="flex">
      <VerFilter gen={selectedGender} handleGenderChange={handleGenderChange} />
        <Men handleAddToCart={handleAddToCart}/>
      </section>
      <Footer/>
    </>
  );
};

export default Mens;
