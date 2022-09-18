import React, { useState, useContext } from "react";
import DateDisplay from "./DateDisplay";
import { DateContext } from "../context/DateContext";
// import { date, month } from "../constants/date";

const Month = () => {
  const dateContext = useContext(DateContext);

  const renderWeekdays = () => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return weekdays.map((weekday) => {
      return (
        <div key={weekday} className="flex align-center justify-center mt-1">
          {weekday}
        </div>
      );
    });
  };

  const datesArray = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  const dateBlocks = () => {
    let dates = datesArray();
    return dates.map((day) => {
      return (
        <div
          key={day}
          className="flex items-start justify-end border-[5px] border-black rounded-lg px-2 bg-secondary"
        >
          {day}
        </div>
      );
    });
  };

  const monthDropdown = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.map((month) => {
      return (
        <option key={month} value="01">
          {month}
        </option>
      );
    });
  };

  const handleSetMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleSelectYear = (e) => {
    setYear(e.target.value);
  };

  const handleSetDate = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-7 border-black border-t-2 rounded-t-xl bg-black text-white text-xl pt-2">
        {renderWeekdays()}
      </div>
      <div className="grid grid-cols-7 h-[85%] border-black border-8 border-t-0 rounded-b-xl bg-black text-white text-xl">
        {dateBlocks()}
      </div>
      <div className="flex flex-row justify-end mt-2">
        <form onSubmit={handleSetDate} className="flex">
          <label>
            <select
              value={dateContext.month}
              onChange={handleSetMonth}
              className="mr-3"
            >
              {monthDropdown()}
            </select>
          </label>
          <label>
            <input
              type="number"
              id="year"
              value={dateContext.year}
              onChange={handleSelectYear}
            />
          </label>
          <input type="submit" value="select" className="bg-black" />
        </form>
      </div>
    </>
  );
};

export default Month;
