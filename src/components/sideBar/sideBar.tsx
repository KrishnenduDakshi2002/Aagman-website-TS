import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTelegramPlane } from "react-icons/fa";
import { RiDiscussFill } from "react-icons/Ri";
import { HiUserGroup } from "react-icons/Hi";
import { IoCalendarNumber } from "react-icons/io5";

import "./sideBar.css";

export const SideBar = () => {
  const [isActive, setIsActive] = useState("home");
  const [activeClassName, setActiveClassName] = useState(
    "sideBar-link-btn sideBar-btn-active"
  );
  const [inactiveClassName, setInactiveClassName] =
    useState("sideBar-link-btn");

  const toggleHandler = (page: string) => {
    setIsActive(page);
  };

  return (
    <div className="sideBar">
      <Link
        to="/"
        className={isActive === "home" ? activeClassName : inactiveClassName}
        onClick={() => toggleHandler("home")}
      >
        <FaHome size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Events</div>
      </Link>
      <Link
        to="/eventCalendar"
        className={isActive === "event-calendar" ? activeClassName : inactiveClassName}
        onClick={() => toggleHandler("event-calendar")}
      >
        <IoCalendarNumber size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Calendar</div>
      </Link>
      <Link
        to="/discussion"
        className={
          isActive === "discussion" ? activeClassName : inactiveClassName
        }
        onClick={() => toggleHandler("discussion")}
      >
        <RiDiscussFill size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Discussion</div>
      </Link>
      <Link
        to="/blogs"
        className={isActive === "blog" ? activeClassName : inactiveClassName}
        onClick={() => toggleHandler("blog")}
      >
        <FaTelegramPlane size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Blogs</div>
      </Link>
      <Link
        to="/collaborate"
        className={
          isActive === "collaborate" ? activeClassName : inactiveClassName
        }
        onClick={() => toggleHandler("collaborate")}
      >
        <HiUserGroup size={30} className="sideBar-icons"/>
        <div className="sideBar-link-text">Collab</div>
      </Link>
    </div>
  );
};
