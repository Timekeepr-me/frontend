import React, { createContext, useState } from "react";

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [range, setRange] = useState("month");
  const [day, setDay] = useState(new Date().getDay());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const value = {
    range,
    setRange,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
  };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
