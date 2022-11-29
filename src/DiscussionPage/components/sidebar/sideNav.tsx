import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./sideNav.css";
export const DiscussionSideNav = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];
  const [activeClass, setactiveClass] = useState(
    "discussion__sideBar__btn discussion__sideBar__btn__active"
  );
  const [inactiveClass, setInactiveClass] = useState(
    "discussion__sideBar__btn"
  );
  return (
    <div className="discussion__sideNav">
      <Link
        className={currentPath == "create" ? activeClass : inactiveClass}
        to="/discussion/create"
      >
        <AiOutlinePlusCircle size={27} />
        <p>Create</p>
      </Link>
      <Link
        className={currentPath == "" ? activeClass : inactiveClass}
        to="/discussion/"
      >
        <p>All Queries</p>
      </Link>
      <Link
        className={currentPath == "myQuestions" ? activeClass : inactiveClass}
        to="/discussion/myQuestions"
      >
        <p>My Queries</p>
      </Link>
    </div>
  );
};
