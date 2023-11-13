import React, { useEffect } from "react";
import "../Home/style.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BASE_AUTH_URL } from "../../api/config";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const verifyTokenString = searchParams.get("verificationToken");

  const onLanding = () => {
    const verifyToken = { verificationCode: verifyTokenString };
    axios
      .post(BASE_AUTH_URL + "/api/v1/users/email-verification", verifyToken)
      .then(
        (response) => {
          if (response.status === 200) {
            localStorage.setItem("isEmailVerified", true);
            navigate("/login");
          } else {
            navigate("/Reverification-Email");
          }
        },

        (error) => {
          console.log("error", error);
        }
      )
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    onLanding();
  }, []);

  return <div className="outer-container"></div>;
};
export default VerifyEmail;
