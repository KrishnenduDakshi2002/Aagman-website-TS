import React from 'react'
import './LargeCalendar.css'
import dayjs from 'dayjs';

const WEEKS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  interface RenderLargeCalendarProps{
    value? : Date;
  }

export const LargeCalendar:React.FC<RenderLargeCalendarProps> = ({value = new Date()}) => {
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


  return (
    <div className="largeCalendar__wrapper">
        <div className="largeCalendar__week__container">
            {
                WEEKS.map(w=> <li key={w}>{w}</li>)
            }
        </div>
        <div className="largerCalendar__day__container">
            {
                PrefixDates.map((d,i) => <div key={i}>{d}</div>)
            }
            {Array.from({ length: lastDateOfMonth }).map((_, i) => {
            const date = i + 1;
            const isToday = dayjs().isSame(`${currYear}-${currMonth+1}-${date}`,'date')
            const monthString = `${currMonth+1}`,
            paddedMonthString = monthString.padStart(2,'0');

            const dateString = `${currYear}-${paddedMonthString}-${date}`;
            if (isToday)
              return (
                <div
                  key={i}
                  className="largeCalendar__active"
                  onDoubleClick={()=> console.log('pressed -> ',dateString)}
                >
                  {date}
                </div>
              );
              else return <div key={i}
              >{date}</div>;
            })}
            {
                PostfixDates.map((d,i)=><div key={i}>{d}</div>)
            }
        </div>
    </div>
  )
}
