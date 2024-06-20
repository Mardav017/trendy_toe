import React from "react";

const VerFilter = (props) => {
  return (
    <react-fragment>
      {/* Vertical */}
      <section className="border" style={{ height: 1000, width: 230}}>
        <div className="mx-5 p-2">
          
          <input
            type="radio"
            name="gender"
            value="Men"
            checked={props.gen === "Men"}
            onChange={props.handleGenderChange}
          />
          <label className="ml-2" htmlFor="Men">
            Mens
          </label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Women"
            checked={props.gen === "Women"}
            onChange={props.handleGenderChange}
          />
          <label className="ml-2" htmlFor="Men">
            Womens
          </label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Kids"
            checked={props.gen === "Kids"}
            onChange={props.handleGenderChange}
          />
          <label className="ml-2" htmlFor="Men">
            Kids
          </label>
        </div>
        <hr />
        <div className="mx-5 p-2 gap-2">
          <h5>
            <b>Categories</b>
          </h5>

          <a href="/"><input type="checkbox" name="Sports Shoes" /></a>
          <label className="ml-2" htmlFor="Men">
            Sports Shoes
          </label>
          <br />

          

          <a href="/kid"><input type="checkbox" name="Sports Shoes" /></a>
          <label className="ml-2" htmlFor="Men">
            Sneakers
          </label>
          <br />
        </div>
        <hr />
      </section>
    </react-fragment>
  );
};

export default VerFilter;
