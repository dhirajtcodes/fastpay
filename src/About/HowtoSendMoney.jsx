import React, { useState } from "react";
import sendMoneyApi from "../API/sendMoneyApi";

const HowtoSendMoney = () => {
  const [sendMoney] = useState(sendMoneyApi);
  return (
    <div>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text text-center fw-bold">
            How to Send Money
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="container service-container">
              {sendMoney.map((items, index) => {
                const { id, logo, title, info } = items;
                return (
                  <div
                    key={(index, id)}
                    className="col-12 my-1 col-lg-4 text-center work-container-subdiv mt-1 mb-5 ml-1"
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading text-start fw-bold">{title}</h2>
                    <p className="main-hero-para w-100 text-start">{info}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowtoSendMoney;
