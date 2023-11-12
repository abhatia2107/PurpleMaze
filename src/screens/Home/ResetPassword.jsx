import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../Home/style.css";
import axios from 'axios';
import LogInHeader from '../Search/LogInHeader';
import { BASE_AUTH_URL } from '../../api/config';

const ResetPassword = () => {
    const [forgotError, setForgotError] = useState("");
    const [responseColor, setResponseColor] = useState("");

    const initialValues = {
        OldPassword: "",
        NewPassword: "",
        ConfirmPassword: "",
    };

    const onSubmit = (values, { resetForm }) => { 
        console.log(values);
        const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));

        const dataToSend = {
            oldPassword: values.OldPassword,
            newPassword: values.NewPassword,
        };

        axios
            .post(
                BASE_AUTH_URL+"/api/v1/users/reset-password",
                dataToSend,
                {
                    headers: {
                        'Authorization': accessAuth?.accessToken,
                        'Content-Type': 'application/json'
                    },
                }
            )
            .then((response) => {
                setForgotError(response.data.msg);
                setResponseColor("green");
                resetForm();
            })
            .catch((error) => {
                console.error("Password change failed:", error.response.data.msg);
                setForgotError(error.response.data.msg);
                setResponseColor("red");
            });
    };

    const validationSchema = Yup.object({
        OldPassword: Yup.string()
            .required("Old Password is required"),
        NewPassword: Yup.string()
            .notOneOf([Yup.ref('OldPassword')], 'New Password must be different from Old Password')
            .required("New Password is required")
            .min(6, "New Password must be at least 6 characters long"),
        ConfirmPassword: Yup.string()
            .oneOf([Yup.ref('NewPassword')], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    return (
        <div>
        <LogInHeader />
        <div className="outer-container padding-top-10">
            <div className="container">
                <div className="centered-container">
                    <div className="wrapper">
                        <h2 className="text-center">Reset Password</h2>
                        <div style={{ color: responseColor }}>{forgotError}</div>
                        <Formik
                            onSubmit={onSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            {(formik) => (
                                <Form>
                                    <div className="form-group my-3">
                                        <label>Old Password</label>
                                        <Field
                                            type="password"
                                            name="OldPassword"
                                            className={
                                                formik.touched.OldPassword && formik.errors.OldPassword
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        />
                                        <ErrorMessage name="OldPassword">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group my-3">
                                        <label>New Password</label>
                                        <Field
                                            type="password"
                                            name="NewPassword"
                                            className={
                                                formik.touched.NewPassword && formik.errors.NewPassword
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        />
                                        <ErrorMessage name="NewPassword">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>

                                    <div className="form-group my-3">
                                        <label>Confirm New Password</label>
                                        <Field
                                            type="password"
                                            name="ConfirmPassword"
                                            className={
                                                formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        />
                                        <ErrorMessage name="ConfirmPassword">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block w-100 circular-button"
                                    >
                                        Reset Password
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ResetPassword;
