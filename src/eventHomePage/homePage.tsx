import React, { useState } from "react";
import dayjs from "dayjs";
import { Agenda } from "../components/Agenda/agenda";
import { Calendar } from "../components/calendar/calendar.component";
import "./homePage.css";
import { Link, useLocation } from "react-router-dom";

const EventPage: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format());
  const [activeClass, setActiveClass] = useState(
    "eventPage__header__btn eventPage__header__btn__active"
  );
  const [inactiveClass, setInactiveClass] = useState("eventPage__header__btn");

  // this callback will stop re-rendering of calendar component whenever selected date changed
  const HandleSetDate = React.useCallback((val: string) => {
    setSelectedDate(val);
  }, []);

  const currentPath = useLocation().pathname;

  return (
    <div className="eventPage-body">
      <div className="eventPage__header__events__wrapper">
        <div className="eventPage__events__nav">
          <Link to={"/create-event"}>
            <div
              className={
                currentPath == "/create-event" ? activeClass : inactiveClass
              }
            >
              Create Event
            </div>
          </Link>
          <Link to={"/registered-events"}>
            <div
              className={
                currentPath == "/registered-events"
                  ? activeClass
                  : inactiveClass
              }
            >
              Registered events
            </div>
          </Link>
          <Link to={"/hosted-events"}>
            <div
              className={
                currentPath == "/hosted-events" ? activeClass : inactiveClass
              }
            >
              Hosted events
            </div>
          </Link>
        </div>
        {/* children */}
        {children}
      </div>
      <div className="eventPage__calendar_wrapper">
        <div className="eventPage__calendar_agenda__container">
          <Calendar setDate={HandleSetDate} />
          <Agenda currentDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
