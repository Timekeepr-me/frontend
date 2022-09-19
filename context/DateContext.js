import React, { createContext, useState, useEffect } from "react";
import { DateTime } from "luxon";

const DateContext = createContext();
const date = DateTime.local();

const DateProvider = ({ children }) => {
  const [defaultDate, setDefaultDate] = useState(date);
  const [dateFormat, setDateFormat] = useState();
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

  const handleDisplayDate = (day, month, year) => {
    setDefaultDate(DateTime.local(String(year), String(month), String(day)));
    console.log(defaultDate);
  };

  console.log(DateTime.local(year, month, day).weekNumber);

  const value = {
    defaultDate,
    day,
    setDay,
    monthName,
    month,
    setMonth,
    year,
    setYear,
    weekdayToday,
    daysInMonth,
    firstOfMonth,
    lastOfMonth,
    handleDisplayDate,
    range,
    setRange,
  };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
