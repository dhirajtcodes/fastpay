import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h3 className="text-white text-center">
                    <span className="footer-top">Company</span>
                  </h3>
                  <ul>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h3 className="text-white text-center">
                    <span className="footer-top">Support</span>
                  </h3>
                  <ul>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h3 className="text-white text-center">
                    <span className="footer-top">Services</span>
                  </h3>
                  <ul>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                    <li className="text-center me-5">
                      <Link to="#">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3 ">
                  <h3 className="text-white text-center">
                    <span className="footer-top">Follow Us</span>
                  </h3>
                  <div className="d-flex justify-content-center">
                    <ul className="me-3">
                      <li className="text-center me-5 mb-5">
                        <Link to="#">
                          <i className="fab fa-instagram fontawesome-style"></i>
                        </Link>
                      </li>
                      <li className="text-center me-5 mb-5">
                        <Link to="#">
                          <i className="fab fa-facebook fontawesome-style"></i>
                        </Link>
                      </li>
                      <li className="text-center me-5 mb-5">
                        <Link to="#">
                          <i className="fab fa-twitter fontawesome-style"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center text-white pt-3 fw-lighter">
          -----Copyright &copy; 2021-----
        </h3>
      </footer>
    </>
  );
};

export default Footer;
