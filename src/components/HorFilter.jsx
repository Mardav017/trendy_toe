import React from "react";

const HorFilter = () => {
    return (
      <react-fragment>
  
      {/* Horizontal */}
        <section className="border p-2 h-40 w-full">
          <label className="text-sm">Home/Shoes</label>
  
          <div className="flex justify-between mx-6 mt-16">
            <h1 className="text-md mt-8">
              <b>FILTERS</b>
            </h1>
            <div className="border p-2 text-sm mt-3 mb-2">
              <b>Sort by:</b>
              <select name="Sort" id="" className="mx-1 p-1 bg-white text-sm font-medium">
                <option value="Recommended" selected>
                  Recommended
                </option>
                <option value="Popularity">Popularity</option>
                <option value="Better Discount">Better Discount</option>
                <option value="Price-High">Price: High to Low</option>
                <option value="Price-Low">Price: Low to High </option>
                <option value="Customer Rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </section>
  
      </react-fragment>
    );
  };
  
  export default HorFilter;
  