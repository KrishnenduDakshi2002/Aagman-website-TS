import React from 'react'

import './agenda.css'

export const Agenda = () => {
  return (
    <RenderAgenda/>
  )
}


const RenderAgenda = () => {
  return (
    <div className="agenda-wrapper">
        <header>
            <p>14 November 2022</p>
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
