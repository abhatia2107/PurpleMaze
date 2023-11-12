import React, { useState, useEffect } from "react";
import "./PopupMessage.css";
import { Link } from "react-router-dom";

const PasswordChangePopup = () => {
  const [showPasswordChangeMessage, setShowPasswordChangeMessage] =
    useState(false);

  useEffect(() => {
    const passwordChangeRequired = localStorage.getItem(
      "passwordChangeRequired"
    );
    if (passwordChangeRequired === "true") {
      setShowPasswordChangeMessage(true);
      localStorage.removeItem("passwordChangeRequired");
    }
  }, []);

  const closeMessage = () => {
    setShowPasswordChangeMessage(false);
  };

  return (
    <div
      className={`popup-container ${showPasswordChangeMessage ? "show" : ""}`}
    >
      <div className="popup-message">
        <p>Password Changed Please log in again.</p>
        <Link to="/login" className="no-underline hover:no-underline">
          <button onClick={closeMessage}>Login</button>
        </Link>
        <button onClick={closeMessage}>Close</button>
      </div>
    </div>
  );
};

export default PasswordChangePopup;
