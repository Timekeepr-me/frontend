import React, { createContext, useState } from "react";
import { DateTime } from "luxon";

const DateContext = createContext();
const date = DateTime.local();

const DateProvider = ({ children }) => {
  const [defaultDate, setDefaultDate] = useState(date);
  const [day, setDay] = useState(defaultDate.day);
  const [month, setMonth] = useState(defaultDate.month);
  const [monthName, setMonthName] = useState(defaultDate.monthLong);
  const [year, setYear] = useState(defaultDate.year);
  const [range, setRange] = useState("month");

  const weekdayToday = defaultDate.weekday;
  const daysInMonth = defaultDate.daysInMonth;
  const monthNum = defaultDate.month;
  const firstOfMonth = DateTime.local(year, monthNum, 1, 0).weekday;
  const lastOfMonth = DateTime.local(year, monthNum, daysInMonth).weekday;

  const value = {
    defaultDate,
    setDefaultDate,
    day,
    setDay,
    monthName,
    month,
    monthNum,
    setMonth,
    daysInMonth,
    year,
    setYear,
    weekdayToday,
    firstOfMonth,
    lastOfMonth,
    range,
    setRange,
  };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
