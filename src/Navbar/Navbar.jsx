import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="main-container">
      <div className="container">
        <section
          className="navbar-bg"
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
            backgroundColor: "#d0e8fe",
          }}
        >
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <b>FastPay</b>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/service">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex justify-content-center align-items-center">
                  <NavLink className="nav-link" to="/login">
                    <button
                      className="btn  btn-style btn-style-border"
                      type="submit"
                    >
                      Log in
                    </button>
                  </NavLink>
                </form>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
