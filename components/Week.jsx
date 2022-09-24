import React, { useContext } from "react";
import DateDisplay from "./DateDisplay";
import { DateContext } from "../context/DateContext";

const Week = () => {
  const context = useContext(DateContext);

  const weekdays = (day) => {
    switch (day) {
      case 1:
        return "Mon";
        break;
      case 2:
        return "Tue";
        beak;
      case 3:
        return "Wed";
        break;
      case 4:
        return "Thu";
        break;
      case 5:
        return "Fri";
        break;
      case 6:
        return "Sat";
        break;
      case 7:
        return "Sun";
        break;
    }
  };

  const renderWeekdays = () => {
    let days = context.defaultDate.weekday;
    const first = context.defaultDate.minus({ days: days - 1 });
    let weekArray = [];
    for (let i = 0; i < 7; i++) {
      weekArray.push(first.plus({ days: `${i}` }));
    }

    return weekArray.map((day) => {
      return (
        <div
          className="flex flex-col text-center border-r-2 border-black text-xl pt-1 hover:bg-ternary hover:text-black"
          key={day}
        >
          <p>{weekdays(day.weekday)}</p>
          <p>{day.day}</p>
        </div>
      );
    });
  };

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-7 border-black border-8 rounded-xl h-[90%] bg-secondary text-white mr-4 mt-4 text-xl">
        {renderWeekdays()}
      </div>
    </>
  );
};

export default Week;
