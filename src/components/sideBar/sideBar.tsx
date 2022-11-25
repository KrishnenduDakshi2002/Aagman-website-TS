import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { FaHome, FaTelegramPlane } from "react-icons/fa";
import { RiDiscussFill } from "react-icons/Ri";
import { HiUserGroup } from "react-icons/Hi";
import { IoCalendarNumber } from "react-icons/io5";

import "./sideBar.css";

export const SideBar = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1];
  const [activeClassName, _] = useState(
    "sideBar-link-btn sideBar-btn-active"
  );
  const [inactiveClassName, setInactiveClassName] =
    useState("sideBar-link-btn");
  
  return (
    <div className="sideBar">
      <Link
        to="/events"
        className={currentRoute === "events" ? activeClassName : inactiveClassName}
      >
        <FaHome size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Events</div>
      </Link>
      <Link
        to="/eventCalendar"
        className={currentRoute === "eventCalendar" ? activeClassName : inactiveClassName}
      >
        <IoCalendarNumber size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Calendar</div>
      </Link>
      <Link
        to="/discussion"
        className={
          currentRoute === "discussion" ? activeClassName : inactiveClassName
        }
      >
        <RiDiscussFill size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Discussion</div>
      </Link>
      <Link
        to="/blogs"
        className={currentRoute === "blogs" ? activeClassName : inactiveClassName}
      >
        <FaTelegramPlane size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Blogs</div>
      </Link>
      <Link
        to="/collaborate"
        className={
          currentRoute === "collaborate" ? activeClassName : inactiveClassName
        }
      >
        <HiUserGroup size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Collab</div>
      </Link>
    </div>
  );
};
