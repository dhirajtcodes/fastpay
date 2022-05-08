import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row mb-5" style={{ margin: "3rem" }}>
              <div className="col-12 col-lg-4 contact-leftside">
                <h1 className="main-heading fw-bold text-center text-lg-start">
                  Connect With our <br /> Sales Team
                </h1>
                <p className="main-hero-para text-center text-lg-start">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  quaerat nostrum, dolor numquam cumque commodi reiciendis odio.
                </p>
                <br />
                <figure className="text-center text-lg-start">
                  <img
                    src={require("../assets/img/hero1.jpg")}
                    alt="hero1"
                    // width="100px"
                    // height="200px"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-12 col-lg-7 mx-auto">
                <form method="POST">
                  <div className="row p-1 p-lg-0">
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-12 contact-input-field">
                      <input
                        type="address"
                        className="form-control"
                        placeholder="Add Address"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Message"
                      />
                    </div>
                    <div className="form-check form-checkbox-style mx-3 mx-lg-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label-3"
                        htmlFor="flexCheckChecked"
                      >
                        I agree that the insert all the information is correct.
                        You can contact me with above info.
                      </label>
                    </div>
                    <div className="col-12">
                      <button type="Submit" className="btn btn-style w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
