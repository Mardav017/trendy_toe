import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 3000, 
};

const Home = () => {
  const images = [
    "/landing/F1.jpg",
    "/landing/F2.jpg",
    "/landing/F3.jpg",
    "/landing/F4.jpg",
    "/landing/F5.jpg",
  ];

  const [new_arr, setNew_arr] = useState({
    "Jordan Stadium 90": { brand: "Nike" },
    "INDIA 2023 WORLD CUP LIMITED EDITION SHOE MEN": { brand: "ADIDAS" },
    "Nike Air Max Solo": { brand: "Nike" },
    "WALKWAGON SHOES": { brand: "ADIDAS" },
  });
  const [reccom, setReccom] = useState({
    "Paris Saint-Germain Jumpman MVP": { brand: "Nike" },
    "Forum 84 Low Shoes": { brand: "ADIDAS" },
    "Nike Dunk Low": { brand: "Nike" },
    "FLAZE MODE M": { brand: "ADIDAS" },
  });

  return (
    <div>
      {/* Slider */}
      <div className="m-px">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-semibold my-10 mx-32">
        Elevate your fashion game with our exceptional footwear.
      </h1>

      {/* New Arrivals */}
      <div align="center" className="p-2">
        <h1 className="text-2xl">
          <u>New Arrivals</u>
        </h1>
        <div className="grid grid-cols-4 ml-20 my-5">
          {Object.keys(new_arr).map((New_arr) => (
            <div
              className="border h-80 w-52 rounded-lg shadow-lg"
              key={New_arr}
            >
              <div
                className="bg-gray-500 h-52 rounded-lg"
                style={{
                  backgroundImage: `url('/landing/${New_arr}.jpg')`,
                  backgroundSize: "contain",
                  width: "100%",
                  height: "80%",
                  // backgroundSize:"contain"
                }}
              ></div>
              <h1 className="px-1 font-semibold text-sm">
                {new_arr[New_arr].brand}
              </h1>
              <h2 className="px-1 text-sm">{New_arr}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div align="center" className="p-2">
        <h1 className="text-2xl">
          <u>Recommended</u>
        </h1>
        <div className="grid grid-cols-4 ml-20 my-5">
          {Object.keys(reccom).map((Reccom) => (
            <div className="border h-80 w-52 rounded-lg shadow-lg" key={Reccom}>
              <div
                className="bg-gray-500 h-52 rounded-lg"
                style={{
                  backgroundImage: `url('/landing/${Reccom}.jpg')`,
                  backgroundSize: "contain",
                  width: "100%",
                  height: "80%",
                }}
              ></div>
              <h1 className="px-1 font-semibold text-sm">
                {reccom[Reccom].brand}
              </h1>
              <h2 className="px-1 text-sm">{Reccom}</h2>
            </div>
          ))}
        </div>
      </div>



      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
