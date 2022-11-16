import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import { FaUserCircle, FaAlignJustify } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
export const HeaderComponent: React.FC = (props: any) => {
  return (
    <div>
      <nav className="header">
        <label className="label">Aagman</label>
        <div className="header-icons">
          <div className="header-notification header-btn">
            <IoIosNotifications size={28}/>
          </div>
          <div className="header-userprofile header-btn">
            <FaUserCircle size={28}/>
          </div>
        </div>
      </nav>
    </div>
  );
};
