import React, { useContext } from "react";
import { DateContext } from "../context/DateContext";
import { DateTime } from "luxon";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const DateDisplay = () => {
  const context = useContext(DateContext);

  const renderDate = () => {
    const month = context.defaultDate.monthLong;
    const day = context.defaultDate.day;
    const year = context.defaultDate.year;
    return `${month} ${context.range === "day" ? day : ""}${
      context.range === "day" ? "," : ""
    } ${year}`;
  };

  const handleToday = () => {
    const date = DateTime.local();
    return context.setDefaultDate(date);
  };

  const handleDayBack = () => {
    console.log("handleDayBack");
    const newDate = context.defaultDate.minus({ days: 1 });
    context.setDefaultDate(() => newDate);
    console.log(context.defaultDate);
  };

  const handleDayForward = () => {
    const newDate = context.defaultDate.plus({ days: 1 });
    context.setDefaultDate(() => newDate);
  };

  const handleWeekBack = () => {
    const newDate = context.defaultDate.minus({ weeks: 1 });
    context.setDefaultDate(() => newDate);
  };

  const handleWeekForward = () => {
    const newDate = context.defaultDate.plus({ weeks: 1 });
    context.setDefaultDate(() => newDate);
  };

  const handleMonthBack = () => {
    const newDate = context.defaultDate.minus({ months: 1 });
    context.setDefaultDate((defaultDate) => newDate);
  };

  const handleMonthForward = () => {
    const newDate = context.defaultDate.plus({ months: 1 });
    context.setDefaultDate((defaultDate) => newDate);
  };

  const handleBackNav = () => {
    if (context.range === "month") return handleMonthBack();
    else if (context.range === "week") return handleWeekBack();
    else if (context.range === "day") return handleDayBack();
  };

  const handleForwardNav = () => {
    if (context.range === "month") return handleMonthForward();
    if (context.range === "week") return handleWeekForward();
    if (context.range === "day") return handleDayForward();
  };

  return (
    <div className="flex flex-row justify-between mt-2 ">
      <h2 className="flex text-white text-3xl font-bold ml-2">
        {renderDate()}
      </h2>
      <div className="flex mr-4">
        <button
          className="bg-white rounded-l-xl px-1 border-2 border-black mb-2 active:translate-y-1 py-auto"
          onClick={handleBackNav}
        >
          <AiOutlineLeft style={{ height: "20px" }} />
        </button>
        <button
          className="bg-white mx-1 px-1 border-2 border-black mb-2 active:translate-y-1"
          onClick={handleToday}
        >
          Today
        </button>
        <button
          className="bg-white rounded-r-xl px-1 border-2 border-black mb-2 active:translate-y-1"
          onClick={handleForwardNav}
        >
          <AiOutlineRight style={{ height: "20px" }} />
        </button>
      </div>
    </div>
  );
};

export default DateDisplay;
