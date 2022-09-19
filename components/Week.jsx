import React, { useContext } from "react";
import DateDisplay from "./DateDisplay";
import { v4 as uuidv4 } from "uuid";
import { DateContext } from "../context/DateContext";

const Week = () => {
  const context = useContext(DateContext);

  const weekdayArray = () => {
    let datesArray = [
      { Mon: 0 },
      { Tue: 0 },
      { Wed: 0 },
      { Thu: 0 },
      { Fri: 0 },
      { Sat: 0 },
      { Sun: 0 },
    ];
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let weekdayCounter = context.weekdayToday;
    let date = context.day;

    while (weekdayCounter > 1) {
      date--;
      weekdayCounter--;
    }

    while (weekdayCounter <= 7) {
      for (let dates of datesArray) {
        dates[Object.keys(dates)] = date;
        date++;
        weekdayCounter++;
      }
    }
    return datesArray;
  };

  const renderWeekdays = () => {
    let dates = weekdayArray();
    return dates.map((date) => {
      const values = Object.values(date)[0];
      const keys = Object.keys(date)[0];
      return (
        <div
          key={uuidv4()}
          className={`flex flex-col text-center border-r-4 border-black p-2 pt-1`}
        >
          <p>{keys}</p>
          <p>{values}</p>
        </div>
      );
    });
  };

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-7 border-black border-8 rounded-xl h-[85%] bg-secondary text-white mr-4 mt-4 text-xl">
        {renderWeekdays()}
      </div>
    </>
  );
};

export default Week;
