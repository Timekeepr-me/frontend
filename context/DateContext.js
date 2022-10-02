import React, { createContext, useState } from "react";
import { DateTime } from "luxon";

const DateContext = createContext();
const today = DateTime.local();

const DateProvider = ({ children }) => {
  const [defaultDate, setDefaultDate] = useState(today);
  const [month, setMonth] = useState(defaultDate.month);
  const [year, setYear] = useState(defaultDate.year);
  const [range, setRange] = useState("month");
  const daysInMonth = defaultDate.daysInMonth;
  const monthNum = defaultDate.month;
  const dayNum = defaultDate.day;
  const yearNum = defaultDate.year;

  const makeDate = (year, day, month) => {
    const date = DateTime.local({ year: year, day: day, month: month });
    return date;
  };

  const value = {
    today,
    defaultDate,
    setDefaultDate,
    month,
    monthNum,
    daysInMonth,
    range,
    setRange,
    yearNum,
    makeDate,
  };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
