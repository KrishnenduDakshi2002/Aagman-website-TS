import React from "react";
import "./eventCard.css";

import { TfiTimer } from "react-icons/tfi";


export interface EventInterface {
  _id: string;
  eventName: string;
  description: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  mode: string;
  type: string;
  organizers: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export const EventCardComponent: React.FC<{event : EventInterface}> = ({event}) => {
  const imageUri =
    "https://developers.google.com/community/images/gdsc-solution-challenge/solutionchallenge-homepage.png";
  return (
    <div className="event__card">
      <img src={imageUri} alt="event image" className="event__card__image" />

      <p className="event__card__title">{event.eventName}</p>
      <div className="event__card__countdown">
        <span>
          <TfiTimer />
        </span>
        10 days left
      </div>
      <div className="event__card__date">
        <p>28 Nov</p>
        <p>30 Nov</p>
      </div>
      <div className="event__card__time">
        <p>10:00 AM</p>
        <p>11:30 AM</p>
      </div>
      <div className="event__card__tags">
        <span className="event__card__status">ongoing</span>
        <span className="event__card__mode">{event.mode}</span>
        <span className="event__card__type">{event.type}</span>
      </div>
      <a
        href="https://developers.google.com/community/gdsc-solution-challenge"
        target="_blank"
        className="event__card__register_btn"
      >
        Register
      </a>
    </div>
  );
};
