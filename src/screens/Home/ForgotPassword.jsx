import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../Home/style.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReverificationPopup from '../Pop-Ups/ReverificationPopup';
import CheckEmailPopup from '../Pop-Ups/CheckEmailErrorPopup';
import Navbar from './Navbar';
import { BASE_AUTH_URL } from '../../api/config';
import { Footer } from '../../components/Footer';


const ForgotPassword = () => {
  const [showPopup,setShowPopup] = useState(false);
  const [reverificationPopup, setReverificationPopup] = useState(false);
  const [RequestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const navigate = useNavigate();
    const initialValues = {
        email: ""
    };
        const onSubmit = (values) => {
      //console.log(values);
      axios
      .post(BASE_AUTH_URL+"/api/v1/users/forgot-password", values)  // if else wali conditions lagani h     
      .then(
        (response) => {
          if(response.status === 200) {
            localStorage.setItem('emailVerificationRequired', 'true');
          setRequestResponse({
            textMessage: "Login successful",
            alertClass: "alert alert-success",
          });
          setShowPopup(true);
          navigate("/");
        }
        else{
          setRequestResponse({
            textMessage: 'Something went wrong. Please reverify your email.',
            alertClass: 'alert alert-danger',
          });
          setReverificationPopup(true);
        }
        
          
        },
  
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          })
        }
      )
      .catch((error) => console.log(error));  // Store token and password in local storage
    
  


  };
      const validationSchema = Yup.object({
        email: Yup.string()
          .required("Email Address is required")
          .email("Email Address must be a valid email address")
      });
      
     return(
        <div className='flex flex-col space-y-6'>
              <Navbar />
            <div className="mx-auto my-auto">
                <div className="wrapper" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h1 className='text-center'>Forgot Password?</h1>
                    <h6 className='text-center'>Reset Password in two quick steps</h6>
                    <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    >{(formik)=>(
                        <Form>
                             <div className="form-group my-3">
                    <Field
                      type="text"
                      name="email"
                                            placeholder="Enter your Email address"
                      style={{ marginTop: '40px', marginBottom: '40px' }}
                      className={
                        formik.touched.Email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <ErrorMessage name="Email">
                      {(errorMessage) => (
                        <small className="text-danger">{errorMessage}</small>
                      )}
                    </ErrorMessage>
                  </div>
                  <CheckEmailPopup/>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100 circular-button"
                    style={{
                      padding: '12px', 
                      fontSize: '16px',
                      fontFamily:'inherit',
                      letterSpacing: '1px', 
                      textTransform: 'uppercase',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  }}
                  >
                    Send Link
                  </button>
                            
                        </Form>
                    )}</Formik>
                    <Link className="text-center back-link" to={"/login"} > Back </Link>
                </div>
            </div>
            {showPopup && <CheckEmailPopup onClose={() => setShowPopup(false)} />}
            {reverificationPopup && <ReverificationPopup onClose={() => setReverificationPopup(false)} />}
            <Footer/>
        </div>
     )
}
export default ForgotPassword
