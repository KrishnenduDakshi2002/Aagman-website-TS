import React, { useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom";
import "./header.css";

import { FaUserCircle, FaAlignJustify } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useLoggedInContext } from "../../contexts/LoginContext";
export const HeaderComponent: React.FC = () => {
  const {LoginState,setLoginState} = useLoggedInContext();
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.removeItem("authToken");
    setLoginState(!LoginState);
  };

  return (
    <div>
      <nav className="header">
        <label className="label">Aagman</label>
        <div className="header-icons">
          <div className="header-notification header-btn">
            <IoIosNotifications size={28} />
          </div>
          {LoginState ? (
            <button
              className="header-userprofile header-btn"
              onClick={HandleLogout}
            >
              <CiLogout size={28} />
              <span>Logout</span>
            </button>
          ) : (
            <div className="header-btn">
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signup")}>SignUp</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
