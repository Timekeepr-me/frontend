import React, { createContext, useState } from "react";

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [day, setDay] = useState(new Date().getDay());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const today = new Date();

  console.log(today);

  const value = {
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
