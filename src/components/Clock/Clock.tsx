import React, { useState } from "react";
import "./Clock.css";

export const Clock: React.FC<{
  value: Date;
  onChange: (val: Date) => void;
}> = ({ value, onChange }) => {
  console.log(value.getHours(), value.getMinutes());

  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(43);
  const [median, setMedian] = useState("AM");
  const [isHourSelected, setIsHourSelected] = useState(false);

  const HandleSubmit = () => {
    if (median == "AM") {
      const date = new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate(),
        hour,
        minute
      );
      console.log(date);
    } else if (median == "PM") {
      const date = new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate(),
        hour + 12,
        minute
      );
      console.log(date);
    }
  };

  return (
    <div className="clock__wrapper">
      <div className="clock__display">
        <input
          onClick={() => {
            setIsHourSelected(false);
          }}
          value={`${hour}`.padStart(2, "0")}
          onChange={(char) => setHour(+char.target.value)}
          />
        <p>:</p>
        <input
          onClick={()=>setIsHourSelected(true)}
          value={`${minute}`.padStart(2, "0")}
          onChange={(char) => setMinute(+char.target.value)}
        />
        <div className="clock__display__median">
            <div style={{opacity : median == "AM" ? 1 : 0.6}} onClick={()=>setMedian("AM")}>am</div>
            <div style={{opacity : median == "PM" ? 1 : 0.6}} onClick={()=>setMedian("PM")}>pm</div>
        </div>
      </div>
      <div className="clock__dialer">
        {!isHourSelected ? (
          <HourDialer
            hour={hour}
            setHour={(val) => setHour(val)}
            setIsHourSelected={(val) => setIsHourSelected(val)}
          />
        ) : (
          <MinuteDialer minute={minute} setMinute={(val) => setMinute(val)} />
        )}
      </div>
      <div className="clock__cancel__btn">
        <button>cancel</button>
      </div>
      <div className="clock__submit__btn">
        <button onClick={HandleSubmit}>Submit</button>
      </div>
    </div>
  );
};

const HourDialer: React.FC<{
  hour: number;
  setHour: (val: number) => void;
  setIsHourSelected: (val: boolean) => void;
}> = React.memo(({ hour, setHour, setIsHourSelected }) => {
  return (
    <div className="clock__dialer__hour">
      {Array.from({ length: 12 }, (_, i) => {
        const deg = -60 + 30 * i;
        return (
          <span style={{ transform: `translate(50%) rotate(${deg}deg)` }}>
            <button
              style={{ transform: `rotate(${-deg}deg)` }}
              onClick={() => {
                setHour(i + 1);
                setTimeout(() => {
                  setIsHourSelected(true);
                }, 200);
              }}
            >
              <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{i + 1}</p>
            </button>
          </span>
        );
      })}
      {hour ? (
        <Needle deg={hour} mode="HOUR" />
      ) : (
        <Needle deg={12} mode="HOUR" />
      )}
    </div>
  );
});

const MinuteDialer: React.FC<{
  minute: number;
  setMinute: (val: number) => void;
}> = React.memo(({ minute, setMinute }) => {
  return (
    <div className="clock__dialer__minute">
      {Array.from({ length: 60 }, (_, i) => {
        const deg = -90 + 6 * i;
        return (
          <span style={{ transform: `translate(50%) rotate(${deg}deg)` }}>
            <button
              style={{ transform: `rotate(${-deg}deg)` }}
              onClick={() => {
                setMinute(i + 1);
              }}
            >
              <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                {(i + 1) % 5 == 0 ? (i == 59 ? "00" : i + 1) : ""}
              </p>
            </button>
          </span>
        );
      })}
      {minute ? (
        <Needle deg={minute / 5} mode="MINUTE" />
      ) : (
        <Needle deg={12} mode="MINUTE" />
      )}
    </div>
  );
});

const Needle: React.FC<{ deg: number; mode: string }> = ({ deg, mode }) => {
  const degree = -90 + 30 * deg;
  return (
    <div
      draggable={true}
      className="clock__needle"
      style={{ transform: `rotate(${degree}deg)` }}
    >
      <div className="clock__dialer__needle"></div>
      <div
        className="clock__dialer__needle__circle"
        style={{ transform: `translate(180%) rotate(${-degree}deg)` }}
      >
        {mode == "HOUR" ? deg : deg * 5}
      </div>
    </div>
  );
};
