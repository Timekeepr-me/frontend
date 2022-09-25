import React, { createContext, useState } from "react";
import { DateTime } from "luxon";

const DateContext = createContext();
const date = DateTime.local();

const DateProvider = ({ children }) => {
  const [defaultDate, setDefaultDate] = useState(date);
  const [month, setMonth] = useState(defaultDate.month);
  const [year, setYear] = useState(defaultDate.year);
  const [range, setRange] = useState("month");
  const daysInMonth = defaultDate.daysInMonth;
  const monthNum = defaultDate.month;

  const value = {
    defaultDate,
    setDefaultDate,
    month,
    monthNum,
    daysInMonth,
    range,
    setRange,
  };
  return (
    <DateContext.Provider value={value}>{children}</DateContext.Provider>
  );
};

export { DateContext, DateProvider };
