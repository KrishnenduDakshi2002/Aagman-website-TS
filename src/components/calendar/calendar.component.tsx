import React, { useRef, useState, useEffect } from "react";
import "./calendar.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const WEEKS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EVENTS = [
  {
    eventName : "Devfest'22",
    startDate : '2022-11-23',
    endDate : '2022-11-26'
  },
  {
    eventName : "HackOctober'22",
    startDate : '2022-11-03',
    endDate : '2022-11-08'
  },
  {
    eventName : "Hackfest",
    startDate : '2022-11-13',
    endDate : '2022-11-17'
  },
];

interface Props{
  setDate : (val : string) => void;
}

export const Calendar:React.FC<Props> = ({setDate}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const HandleChangeDate = (value: Date) => setCurrentDate(value);
  return <RenderCalendar value={currentDate} onChange={HandleChangeDate} setDate={setDate}/>;
};

interface RenderCalendarProps {
  value?: Date;
  onChange: (value: Date) => void;
  setDate : (val : string) => void;
}

const RenderCalendar: React.FC<RenderCalendarProps> = ({
  value = new Date(),
  onChange,
  setDate,
}) => {
  const currentMonthRef = useRef<HTMLParagraphElement>(null);

  //getting new date
  let date = new Date(value),
    currYear = date.getFullYear(),
    currMonth = date.getMonth(),
    currDate = date.getDate();

  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); // first date of current month
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // last date of current month
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // last date of last month

  let PrefixDates: Array<number> = [];
  let PostfixDates: Array<number> = [];

  for (let i = 0; i < firstDayOfMonth; i++)
    PrefixDates.push(lastDateOfLastMonth - firstDayOfMonth + i + 1);

  for (let i = 1; i <= 42 - (PrefixDates.length + lastDateOfMonth); i++)
    PostfixDates.push(i);

  if (currentMonthRef.current != null) {
    currentMonthRef.current.innerText = `${MONTHS[currMonth]} ${currYear}`;
  }

  return (
    <div className="calendar-wrapper">
      <header>
        <span className="calendar-change-left-arrow">
          <button
            className="calendar-change-btn"
            onClick={() => onChange(new Date(currYear, currMonth - 1, 1))}
          >
            <AiOutlineArrowLeft size={18} />
          </button>
        </span>
        <p ref={currentMonthRef} className="calendar-current-date">
          November 2022
        </p>
        <span className="calendar-change-right-arrow">
          <button
            className="calendar-change-btn"
            onClick={() => onChange(new Date(currYear, currMonth + 1, 1))}
          >
            <AiOutlineArrowRight size={18} />
          </button>
        </span>
      </header>
      <div className="calendar-body">
        <ul className="calendar-weeks">
          {WEEKS.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
        <ul className="calendar-days">
          {/* last days of past month */}
          {PrefixDates.map((date, i) => (
            <li key={i} className="calendar-days-inactive">
              {date}
            </li>
          ))}

          {/* days of current month */}
          {Array.from({ length: lastDateOfMonth }).map((_, i) => {
            const date = i + 1;
            const todayDate = new Date(),
              today = todayDate.getDate(),
              month = todayDate.getMonth(),
              year = todayDate.getFullYear();

            const monthString = `${currMonth+1}`,
            paddedMonthString = monthString.padStart(2,'0');

            const dateString = `${currYear}-${paddedMonthString}-${date}`;
            if (date == today && currMonth == month && currYear == year)
              return (
                <li
                  key={i}
                  className="calendar-days-active"
                  onClick={() => setDate(dateString)}
                >
                  {date}
                </li>
              );
            else return <li key={i}
            onClick={() => setDate(dateString)}
            >{date}</li>;
          })}
          {/* days of next month */}
          {PostfixDates.map((d, i) => (
            <li key={i} className="calendar-days-inactive">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
