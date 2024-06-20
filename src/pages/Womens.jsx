import React, { useState } from "react";

import HorFilter from "../components/HorFilter";
import VerFilter from "../components/VerFilter";
import Women from "../components/Women";
import Footer from "../components/Footer";

const Womens = ({handleAddToCart}) => {

  const [selectedGender, setSelectedGender] = useState("Women"); // State to track selected gender

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value); // Update the selected gender

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
        <Women handleAddToCart={handleAddToCart}/>
      </section>
      <Footer/>
    </>
  );
};

export default Womens;
