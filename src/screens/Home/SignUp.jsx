import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { BASE_AUTH_URL } from "../../api/config";
import { Footer } from "../../components/Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const [RequestResponse, setRequestResponse] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };

  const googleAuth = () => {
    window.open(`${BASE_AUTH_URL}/api/v1/google/login`, "_self");
  };

  const onSubmit = (values) => {
    axios
      .post(BASE_AUTH_URL + "/api/v1/users/register", values)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("emailVerificationRequired", "true");
          navigate("/");
        } else {
          navigate("/something-went-wrong");
        }
      })
      .catch((error) => {
        console.log(error?.response?.data?.msg);
        setRequestResponse(error?.response?.data?.msg);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email Address is required")
      .email(
        "email Address must be a valid email address with the correct format"
      ),

    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters long"),
  });

  return (
    // <div className="outer-container">
    <>
      <Navbar />
      {/* <div className="centered-container"> */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div
              className="wrapper"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}
            >
              <h1 className="text-center">Sign Up</h1>
              <div style={{ color: "red" }}>{RequestResponse}</div>
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
                          formik.touched.email && formik.errors.email
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
                          formik.touched.password && formik.errors.password
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
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100 circular-button"
                    >
                      Sign up
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
            <div className="text-center mt-3 ">
              <p className="text-center new-user">
                Already Sign in?{" "}
                <Link className="joinNow" to="/login">
                  {" "}
                  Log in{" "}
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
};

export default SignUp;
