import React, { useState } from "react";

import HorFilter from "../components/HorFilter";
import VerFilter from "../components/VerFilter";
import Kid from "../components/Kid";
import Footer from "../components/Footer";

const Kids = ({handleAddToCart}) => {

  const [selectedGender, setSelectedGender] = useState("Kids"); // State to track selected gender

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
        <Kid handleAddToCart={handleAddToCart}/>
      </section>
      <Footer/>
    </>
  );
};

export default Kids;
