import React, { useContext, useEffect } from "react";
import { DateContext } from "../context/DateContext";
import { DateTime } from "luxon";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const DateDisplay = () => {
  const context = useContext(DateContext);

  const handleMonthBack = () => {
    if (context.month === 1) {
      context.setMonth(() => 12);
      context.setYear((year) => year - 1);
    } else {
      return context.setMonth((month) => month - 1);
    }
  };

  const handleMonthForward = () => {
    if (context.month === 12) {
      context.setMonth(() => 1);
      context.setYear((year) => year + 1);
    } else {
      return context.setMonth((month) => month + 1);
    }
  };

  const handleBack = () => {
    if (context.range === "month") {
      handleMonthBack();
      console.log(context.month, context.day, context.year);
    } else if (context.range === "week") {
      // context.setDay((day) => day - 7);
    } else {
      if (context.day > 1) {
        // context.setDay((day) => day - 1);
        // console.log("day", context.day);
      } else {
        // context.setMonth((month) => month - 1);
        // context.setDay((day) => context.daysInMonth);
      }
    }
  };

  const handleForward = () => {
    if (context.range === "month") {
      handleMonthForward();
      console.log(context.month, context.day, context.year);
    } else if (context.range === "week") {
      // context.setDay((day) => day - 7);
    } else {
      if (context.day > 1) {
        // context.setDay((day) => day - 1);
        // console.log("day", context.day);
      } else {
        // context.setMonth((month) => month - 1);
        // context.setDay((day) => context.daysInMonth);
      }
    }
  };

  return (
    <div className="flex flex-row justify-between mt-2 ">
      <h1 className="flex text-white text-3xl font-bold mx-2">
        {context.defaultDate.toLocaleString(DateTime.DATE_FULL)}
      </h1>
      <div className="flex">
        <button
          className="bg-white rounded-l-xl px-1 border-4 border-black mb-2 active:translate-y-1 py-auto"
          onClick={handleBack}
        >
          <AiOutlineLeft style={{ height: "20px" }} />
        </button>
        <button className="bg-white mx-2 px-1 border-4 border-black mb-2 active:translate-y-1">
          Today
        </button>
        <button
          className="bg-white rounded-r-xl px-1 border-4 border-black mb-2 active:translate-y-1"
          onClick={handleForward}
        >
          <AiOutlineRight style={{ height: "20px" }} />
        </button>
      </div>
    </div>
  );
};

export default DateDisplay;
