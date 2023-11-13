import React, { useState, useEffect } from "react";
import "./PopupMessage.css";

const VerifiedEmailPopup = () => {
  const [showEmailVerificationMessage, setShowEmailVerificationMessage] =
    useState(false);

  useEffect(() => {
    const isEmailVerified = localStorage.getItem("isEmailVerified");

    if (isEmailVerified === "true") {
      setShowEmailVerificationMessage(true);
      localStorage.removeItem("isEmailVerified");
    }
  }, []);

  const closeMessage = () => {
    setShowEmailVerificationMessage(false);
  };

  return (
    <div
      className={`popup-container ${
        showEmailVerificationMessage ? "show" : ""
      }`}
    >
      <div className="popup-message">
        <p>Email is verified, please log-in now.</p>
        <button onClick={closeMessage}>Close</button>
      </div>
    </div>
  );
};

export default VerifiedEmailPopup;
