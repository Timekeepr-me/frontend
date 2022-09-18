import React, { useContext } from "react";
import DateDisplay from "./DateDisplay";
import { DateContext } from "../context/DateContext";
import { v4 as uuidv4 } from "uuid";

const Day = () => {
  const dateContext = useContext(DateContext);

  const renderTimes = () => {
    const hours = [];
    for (let i = 0; i <= 23; i++) {
      hours.push(i);
    }
    return hours.map((hour) => {
      if (hour < 10) {
        return (
          <div
            key={uuidv4()}
            className="border-r-4 border-b-4 border-black pt-1"
          >
            {hour < 10 ? `0${hour}:00` : `${hour}:00`}
          </div>
        );
      } else {
        return (
          <div
            key={uuidv4()}
            className="border-r-4 border-b-2 border-black pt-1"
          >
            {hour}:00
          </div>
        );
      }
    });
  };

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-2 md:grid-cols-12 border-black border-8 rounded-xl h-[85%] bg-secondary text-white text-xl text-center mt-4">
        {renderTimes()}
      </div>
    </>
  );
};

export default Day;
