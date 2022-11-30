import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Agenda } from "../components/Agenda/agenda";
import { Calendar } from "../components/calendar/calendar.component";
import { HeaderComponent } from "../components/header/header.component";
import { SearchBar } from "../components/searchBar/searchBar.component";
import { SideBar } from "../components/sideBar/sideBar";
import { BiSlider } from "react-icons/bi";
import "./homePage.css";
import { EventCardComponent } from "./components/eventsCard.component";
import { EventCardLoading } from "./components/EventCardLoading";

const CollapsableFilter: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div
      className={
        !isVisible
          ? "eventpage-filter-collapsable"
          : "eventpage-filter-collapsable-inactive"
      }
    >
      <div className="eventpage-filter-container">
        <p>Mode of Event</p>
        <ul>
          <li>
            <button>online</button>
          </li>
          <li>
            <button>offline</button>
          </li>
        </ul>
      </div>
      <div className="eventpage-filter-container">
        <p>Status of Event</p>
        <ul>
          <li>
            <button>ongoing</button>
          </li>
          <li>
            <button>upcoming</button>
          </li>
          <li>
            <button>finished</button>
          </li>
        </ul>
      </div>
      <div className="eventpage-filter-container">
        <p>Mode of Event</p>
        <ul>
          <li>
            <button>Hackathon</button>
          </li>
          <li>
            <button>Devfest</button>
          </li>
          <li>
            <button>Seminar</button>
          </li>
          <li>
            <button>Induction</button>
          </li>
          <li>
            <button>Recuitment</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const EventPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedDate, setSelectedDate] = useState(dayjs().format());

  return (
    <div className="eventPage-body">
      <div className="eventPage__header__events__wrapper">
        <div className="eventPage-filters">
          <div className="eventPage-header">
            <button
              id="eventPage-filter-btn"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <BiSlider size={25} />
            </button>
            <div className="eventPage-searchBar">
              <SearchBar placeholder="Search events" onChange={()=>{}}/>
            </div>
          </div>
        </div>
        <div className="eventPage-events-header-container">
        <CollapsableFilter isVisible={isCollapsed} />
          <div className="eventPage-events-container">
            <EventCardComponent/>
            <EventCardComponent/>
            <EventCardComponent/>
            <EventCardComponent/>
            <EventCardComponent/>
            <EventCardComponent/>
            <EventCardComponent/>
            <EventCardComponent/>
          </div>
        </div>
      </div>
      <div className="eventPage__calendar_wrapper">
        <div className="eventPage__calendar_agenda__container">
          <Calendar setDate={(val : string)=> setSelectedDate(val)}/>
          <Agenda currentDate = {selectedDate}/>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
