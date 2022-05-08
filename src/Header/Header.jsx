import React from "react";

const Header = () => {
  return (
    <>
      <section className="banner_wrapper">
        <div className="container">
          <div className="row align-items-center m-5">
            <div className="col-md-6 my-md-0 text-center text-md-start d-flex justify-content-center align-items-center align-items-lg-start flex-column main-hero-container">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Create payment links online. Easy to use. Supports 100+ payment
                modes in 100 currencies. Accept Cards, Netbanking, Wallets, UPI
                & EMI with Razorpay Payment Links.
              </p>
              <div className="emailbar-center">
                <h3>Get early access for you</h3>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="rounded-pill me-3 p-4 form-control-text"
                    placeholder="Enter Your Email"
                  />
                  <button type="button">Get it now</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 header-right-side d-flex justify-content-center align-items-center">
              <img
                src={require("../assets/img/mainHero.png")}
                alt="heroImage"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
