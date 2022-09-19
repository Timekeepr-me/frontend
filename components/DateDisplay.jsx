import React, { useContext } from "react";
import { DateContext } from "../context/DateContext";
import { AiFillLeftSquare } from "react-icons/fa";

const DateDisplay = () => {
  const context = useContext(DateContext);

  const formattedDate = (defaultDate) => {
    const month = defaultDate.monthLong;
    const day = defaultDate.day;
    const year = defaultDate.year;
    return `${day}, ${month} ${year}`;
  };

  const handleBack = () => {
    if (context.range === "month") {
      context.setMonth((month) => month - 1);
      console.log("month:", context.month);
    } else if (context.range === "week") {
      context.setDay((day) => day - 7);
    } else {
      if (context.day > 1) {
        context.setDay((day) => day - 1);
        console.log("day", context.day);
      } else {
        context.setMonth((month) => month - 1);
        context.setDay((day) => context.daysInMonth);
      }
    }
    // pass
  };

  return (
    <div className="flex flex-row justify-between mt-2">
      <h1 className="flex text-white text-3xl font-bold mx-2">
        {formattedDate(context.defaultDate)}
      </h1>
      <div>
        <button
          className="bg-white rounded-l-xl px-1 border-4 border-black mb-2 active:translate-y-1"
          onClick={handleBack}
        >
          Back
        </button>
        <button className="bg-white mx-2 px-1 border-4 border-black mb-2 active:translate-y-1">
          Today
        </button>
        <button className="bg-white rounded-r-xl px-1 border-4 border-black mb-2 active:translate-y-1">
          Next
        </button>
      </div>
    </div>
  );
};

export default DateDisplay;
