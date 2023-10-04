import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./Home/style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Navbar from "./Home/Navbar";
import { BASE_AUTH_URL } from "../api/config";
import { Footer } from "../components/Footer";
const Login = () => {
  const googleAuth = () => {
    window.open(`${BASE_AUTH_URL}/api/v1/google/login`, "_self");
  };

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        BASE_AUTH_URL + "/api/v1/users/login",
        values
      );
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        const roles = response.data.roles;
        const expiresIn = response.data.expiresIn;
        const expires = moment().add(expiresIn);

        // Store data in local storage
        localStorage.setItem(
          "accessAuth",
          JSON.stringify({ accessToken, roles, expires })
        );

        navigate("/SearchPage", { replace: true });
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
      setLoginError(error.response.data.msg);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email Address is required")
      .email("Email Address must be a valid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  return (
    // <div className="outer-container">
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className="container my-4">
        <div className="row">
          {/* <div className="centered-container"> */}
          {/* <div className="wrapper"> */}
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="wrapper">
              <h1 className="text-center">Login</h1>
              <div style={{ color: "red" }}>{loginError}</div>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(formik) => (
                  <Form>
                    <div className="form-group my-3">
                      <label>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.touched.Email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group my-3">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.Password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <p className="forgot-password-link text-center">
                      <Link to="/forgot-password">Forgot password?</Link>
                    </p>
                    <p className="forgot-password-link text-center">
                      <Link to="/Reverification-Email">
                        Get email verify link
                      </Link>
                    </p>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100 circular-button"
                    >
                      Sign in
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="separator text-center">
                <span>or</span>
              </div>
              <button className="btn btn-google btn-block" onClick={googleAuth}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="google-icon circular-button"
                >
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
          <div className="text-center ">
            <p className="text-center my-4 ">
              New to PurpleMaze ?
              <Link className="joinNow" to="/signup">
                Join Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
      <Footer />
    </>
  );
};

export default Login;
