import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtdSwbHtd55FNoCDCywMF-ojizqXZB-3Q",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          navigate("/", { replace: true });
        } else {
          return res.json().then((data) => {
            let errorsMessage = "Authentication Failed !!";
            if (data && data.error && data.error.message) {
              errorsMessage = data.error.message;
            }
            alert(errorsMessage);
          });
        }
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row main-row">
          <div className="col-12 col-lg-6 mx-auto d-flex justify-content-center align-items-center">
            <form className="form-start" onSubmit={submitHandler}>
              <h1 className="text-center pb-3">
                {isLogin ? "Login" : "SignUp"}
              </h1>
              <div>
                <label htmlFor="Email" className="label-control">
                  Email
                </label>
                <input
                  className="input-control"
                  type="email"
                  placeholder="Enter Your Email.."
                  ref={emailInputRef}
                />
              </div>
              <div>
                <label htmlFor="Password" className="label-control">
                  Password
                </label>
                <input
                  className="input-control"
                  type="password"
                  placeholder="Enter Your Password.."
                  ref={passwordInputRef}
                />
              </div>
              <div>
                <button type="Submit" className="btn btn-style w-100">
                  {!isLogin ? "Login" : "Sign Up"}
                </button>
              </div>
              <div className="toggle-div">
                <button
                  type="button"
                  className="toggle text-center"
                  onClick={switchAuthModeHandler}
                >
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
