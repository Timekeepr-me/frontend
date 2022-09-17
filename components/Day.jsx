import React, { useContext } from "react";
import { DateContext } from "../context/DateContext";

const Day = () => {
  const dateContext = useContext(DateContext);

  const hoursArray = () => {
    const hours = [];
    for (let i = 0; i <= 23; i++) {
      hours.push(i);
    }
    return hours;
  };

  const renderTimes = () => {
    let hours = hoursArray();
    return hours.map((hour) => {
      if (hour < 10) {
        return (
          <div className="border-r-2 border-b-2 border-black">0{hour}:00</div>
        );
      } else {
        return (
          <div className="border-r-2 border-b-2 border-black">{hour}:00</div>
        );
      }
    });
  };

  const dayNum = () => {
    const dates = datesArray();
    return dates.map((day) => {
      return <option value={day}>{day}</option>;
    });
  };

  return (
    <div className="grid grid-cols-12 grid-rows-2 border-black border-8 rounded-xl h-full bg-secondary text-white text-xl text-center mt-4">
      {renderTimes()}
    </div>
  );
};

export default Day;
