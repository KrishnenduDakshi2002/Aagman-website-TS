import React,{useState} from 'react'
import {BsArrowLeftCircle,BsArrowRightCircle,BsSearch} from 'react-icons/bs'
import { Calendar } from '../components/calendar/calendar.component'
import { SearchBar } from '../components/searchBar/searchBar.component'
import { LargeCalendar } from './components/LargeCalendar'
import './eventCalendar.css'

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


export const EventCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="evnentCalendar__wrapper">
      <div className="eventCalendar__side_wrapper">

        {/* create event button */}

        {/* filters */}
      </div>
      <div className="eventCalendar__calendar__wrapper">
        {/* header with naviagtion and search bar */}
          <div className="eventCalendar__calendar__header">
            <div className="eventCalendar__calendar__header__navigation">
              <button onClick={()=> setSelectedDate(new Date())}>Today</button>
              <button onClick={()=> setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()-1,1))}><BsArrowLeftCircle size={25}/></button>
              <button  onClick={()=> setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,1))}><BsArrowRightCircle size={25}/></button>
              <p>{`${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}</p>
            </div>
            <div className="eventCalend__calendar__header__search">
              <SearchBar placeholder='Search events'/>
            </div>
          </div>
        {/* main event calendar */}
          <div className="eventCalendar__calender__container">
            <LargeCalendar value={selectedDate}/>
          </div>
        {/* evnent card popup --> hide + unhide */}
      </div>
      <div className="eventCalendar__calendar__tools">
      </div>
    </div>
  )
}
