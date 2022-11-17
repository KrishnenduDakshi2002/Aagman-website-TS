import React from 'react'
import './agenda.css'

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
  

interface Props{
    currentDate : string;
}

export const Agenda:React.FC<Props> = ({currentDate}) => {
  return (
    <RenderAgenda currentDate={currentDate}/>
  )
}

interface RenderAgendaProps {
    currentDate : string;
}

const RenderAgenda:React.FC<RenderAgendaProps> = ({currentDate}) => {
    const date = new Date(currentDate),
    day = date.getDate(),
    month =date.getMonth(),
    year = date.getFullYear();


  return (
    <div className="agenda-wrapper">
        <header>
            <p>{`${day} ${MONTHS[month]} ${year}`}</p>
        </header>
        <div className="agenda-container">
            <div className="agenda-tiles">
                <div className="agenda-eventName">
                    <p>Event name</p>
                </div>
                <div className="agenda-eventTime">
                    <p>7:00 AM</p>
                    <p>9:00 AM</p>
                </div>
            </div>
            <div className="agenda-tiles">
                <div className="agenda-eventName">
                    <p>Event name</p>
                </div>
                <div className="agenda-eventTime">
                    <p>7:00 AM</p>
                    <p>9:00 AM</p>
                </div>
            </div>
            <div className="agenda-tiles">
                <div className="agenda-eventName">
                    <p>Event name</p>
                </div>
                <div className="agenda-eventTime">
                    <p>7:00 AM</p>
                    <p>9:00 AM</p>
                </div>
            </div>
            <div className="agenda-tiles">
                <div className="agenda-eventName">
                    <p>Event name</p>
                </div>
                <div className="agenda-eventTime">
                    <p>7:00 AM</p>
                    <p>9:00 AM</p>
                </div>
            </div>
        </div>
    </div>
  )
}
