import React from "react";
import "./eventCard.css";

import { TfiTimer } from "react-icons/tfi";

export const EventCardComponent: React.FC = () => {
  const imageUri =
    "https://developers.google.com/community/images/gdsc-solution-challenge/solutionchallenge-homepage.png";
  return (
    <div className="event__card">
      <img src={imageUri} alt="event image" className="event__card__image" />

      <p className="event__card__title">Google Solution Challenge </p>
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
        <span className="event__card__mode">online</span>
        <span className="event__card__type">hackathon</span>
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
