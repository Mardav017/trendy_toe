import React, { useState } from "react";

const Men = () => {
  const [prod, setProd] = useState({
    "Men Restound Running Shoes": { brand: "ADIDAS" },
    "Men Adiglide Running Shoes": { brand: "ADIDAS" },
    "Men Midaso Running Shoes": { brand: "ADIDAS" },
    "Men Evolve Run Shoes": { brand: "ADIDAS" },
    "Men Amalgo Running Shoes": { brand: "ADIDAS" },
    "Men Astor Run Shoes": { brand: "ADIDAS" },
    "Men Crihase 23 Cricket Shoes": { brand: "ADIDAS" },
    "Men Gambito Running Shoes": { brand: "ADIDAS" },
    "Men Runavtaar Running Shoes": { brand: "ADIDAS" },
    "Men Stunicon Running Shoes": { brand: "ADIDAS" },
    "Men Restound Running Shoes Blue": { brand: "ADIDAS" },
    "Women Running Shoes": { brand: "ADIDAS" },
  });

  return (
    <react-fragment>
      <section className="flex flex-wrap gap-10 p-6">
        {Object.keys(prod).map((Prod) => (
          <div className="border h-80 w-52" key={Prod}>
            <div
              className="bg-gray-500 h-52"
              style={{
                backgroundImage: `url('/img/${Prod}.jpg')`,
                backgroundSize: "cover",
                width: "100%",
                height: "80%",
                // backgroundSize:"contain"
              }}
            ></div>
            <h1 className="px-1 font-semibold text-sm">{prod[Prod].brand}</h1>
            <h2 className="px-1 text-sm">{Prod}</h2>
          </div>
        ))}
      </section>
    </react-fragment>
  );
};

export default Men;
