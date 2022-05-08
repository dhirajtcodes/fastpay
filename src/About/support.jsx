import React, { useState } from "react";
import supportapi from "../API/supportapi";

const Support = () => {
  const [support] = useState(supportapi);

  return (
    <>
      <section className="commen-section our-services">
        <div className="container mb-5">
          <div className="row">
            <h1 className="main-heading mt-3 text-center text-lg-start support-class">
              World Class Support is Available 24/7
            </h1>
            <div className="col-12 col-lg-7 text-center text-lg-start our-services-list order-2 order-lg-1">
              {support.map((items, index) => {
                const { id, title, Description } = items;
                return (
                  <div key={index} className="row our-services-info">
                    <div className="col-12 col-lg-1 create-circle text-center mt-2">
                      <span className="circles">{id}</span>
                    </div>
                    <div className="col-12 col-lg-10 mt-5 mt-lg-0 our-service-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para px-4 px-lg-0">
                        {Description}
                      </p>
                    </div>
                  </div>
                );
              })}
              <button className="buttonData">Learn More</button>
            </div>
            <div className="col-12 col-lg-5 text-center order-1 order-lg-2">
              <img
                src={require("../assets/img/callcenter.jpg")}
                alt="callcenter"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
