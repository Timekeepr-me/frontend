import React, { useContext } from "react";
import DateDisplay from "./DateDisplay";
import { DateContext } from "../context/DateContext";
import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";

const Month = () => {
  const context = useContext(DateContext);

  const renderWeekdays = () => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return weekdays.map((weekday) => {
      return (
        <div key={uuidv4()} className="flex align-center justify-center my-1">
          {weekday}
        </div>
      );
    });
  };

  const datesArray = () => {
    const dates = [];
    let i = context.firstOfMonth;
    while (i > 1) {
      dates.push("");
      i--;
    }
    for (let i = 1; i <= context.daysInMonth; i++) {
      dates.push(i);
    }
    i = context.lastOfMonth;
    while (i < 7) {
      dates.push("");
      i++;
    }
    return dates;
  };

  const dateBlocks = () => {
    let dates = datesArray();
    return dates.map((day) => {
      if (typeof day === "number") {
        return (
          <div
            key={uuidv4()}
            className={`flex items-start justify-end border-2 border-black rounded-lg px-2 bg-secondary`}
          >
            {day}
          </div>
        );
      } else {
        return (
          <div
            key={DateTime.local(context.year, context.monthNum, day)}
            className={`flex items-start justify-end border-2 border-black rounded-lg px-2 bg-[#2f2f2f]`}
          >
            {day}
          </div>
        );
      }
    });
  };

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-7 border-black border-t-2 rounded-t-xl bg-black text-white text-xl">
        {renderWeekdays()}
      </div>
      <div className="grid grid-cols-7 h-[85%] border-black border-[6px] border-t-0 rounded-b-xl bg-black text-white text-xl">
        {dateBlocks()}
      </div>
      <div className="flex flex-row justify-end mt-2"></div>
    </>
  );
};

export default Month;
