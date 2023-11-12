import React, { useState, useEffect } from "react";
import { ROLES_LIST } from "../../api/config";
import { Link, useNavigate } from "react-router-dom";

import "./loginHeader.css";
import useLogout from "../../hooks/useLogout";

import "./profileDropdown.css";

const Dropdown = ({ onLogout, resetPassword, upgradeProfile }) => {
  const navigate = useNavigate();
  const logout = useLogout();
  const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
  const [freeRole, setFreeRole] = useState(true);
  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {}, [isDropdownOpen]);

  useEffect(() => {
    if (
      accessAuth?.roles === ROLES_LIST.Admin ||
      accessAuth?.roles === ROLES_LIST.PaidUser
    ) {
      setFreeRole(false);
    }
  }, []);

  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li onClick={resetPassword}>Reset Password</li>
        <li onClick={onLogout}>Logout</li>
        {freeRole ? (
          <li className="sm:hidden py-2" onClick={upgradeProfile}>
            Upgrade Profile
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
