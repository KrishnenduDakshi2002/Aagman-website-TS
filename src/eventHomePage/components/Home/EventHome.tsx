import axios from "axios";
import React, { useEffect, useState } from "react";
import "./EventHome.css";
import { BiSlider } from "react-icons/bi";
import { HOST } from "../../../../config/default";
import { SearchBar } from "../../../components/searchBar/searchBar.component";
import { EventCardComponent, EventInterface } from "../eventsCard.component";

export const EventHome = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const events = useGetEvents();
  return (
    <>
      <div className="eventPage-filters">
        <div className="eventPage-header">
          <div>
            <button
              id="eventPage-filter-btn"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <BiSlider size={25} />
            </button>
            <div className="eventPage-searchBar">
              <SearchBar placeholder="Search events" onChange={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="eventPage-events-header-container">
        <CollapsableFilter isVisible={isCollapsed} />
        <EventsList events={events} />
      </div>
    </>
  );
};

/*
After use of memo, this component will not re-render else the events props is different(different reference)
meaning, re-render of event page by changing of state in event page component while not re-render 
Event list until props changes
*/
const EventsList: React.FC<{ events: Array<EventInterface> }> = React.memo(
  ({ events }) => {
    console.log("rendering event list ");
    return (
      <div className="eventPage-events-container">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventCardComponent key={index} event={event} />
          ))
        ) : (
          <div>Loading events ...</div>
        )}
      </div>
    );
  }
);

// always create custom hook whenever using useeffect, it makes main code much cleaner
const useGetEvents = () => {
  const [events, setEvents] = useState<Array<EventInterface>>([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${HOST}/api/v1/event/getAllEvents`,
    }).then((res) => setEvents(res.data));
  }, []);

  return events;
};

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
