import React, { useState } from "react";
import workAPI from "../API/workAPI";

const HowitsWork = () => {
  const [data] = useState(workAPI);

  return (
    <>
      <div className="container mains-container" style={{ marginTop: "-9rem" }}>
        <h1 className="main-heading text-center">How Does it's Works</h1>
        <div className="row">
          <div className="container service-container d-md-flex">
            {data.map((items, index) => (
              <div
                key={index}
                className="col-12 my-1 col-md-4 text-center work-container-subdiv mt-1 mb-5 ml-1"
              >
                <i className="fas fa-download"></i>
                <h2 className="sub-heading">{items.title}</h2>
                <p className="main-hero-para w-100">{items.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitsWork;
