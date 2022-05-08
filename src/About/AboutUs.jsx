import React, { useState } from "react";
import service from "../API/service";

const AboutUs = () => {
  const [workService] = useState(service);

  return (
    <>
      <section className="commen-section our-services">
        <div className="container mb-5">
          <h1 className="main-heading text-center mt-3">How to use the App?</h1>

          <div className="row">
            <div className="col-12 col-lg-5 text-center">
              <img src={require("../assets/img/hero3.jpg")} alt="hero3" />
            </div>
            <div
              className="col-12 col-lg-7 text-center text-lg-start"
              id="aboutapi"
            >
              {workService.map((items, index) => (
                <div key={index} className="row our-services-info">
                  <div className="col-12 col-lg-1 create-circle text-center mt-2">
                    <span className="circles">{items.id}</span>
                  </div>
                  <div className="col-12 col-lg-10 mt-5 mt-lg-0 our-service-data">
                    <h2>{items.title}</h2>
                    <p className="main-hero-para px-4 px-lg-0">
                      {items.Description}
                    </p>
                  </div>
                </div>
              ))}
              <button className="buttonData">Learn More</button>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
};

export default AboutUs;
