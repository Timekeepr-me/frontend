import React, { createContext, useState } from "react";
import { DateTime } from "luxon";

const DateContext = createContext();
const date = DateTime.local();

const DateProvider = ({ children }) => {
  const [defaultDate, setDefaultDate] = useState(date);
  const [dateFormat, setDateFormat] = useState();
  const [day, setDay] = useState(defaultDate.day);
  const [monthName, setMonth] = useState(defaultDate.monthLong);
  const [year, setYear] = useState(defaultDate.year);
  const daysInMonth = defaultDate.daysInMonth;
  const monthNum = defaultDate.month;
  const firstOfMonth = DateTime.local(year, monthNum, 1, 0).weekday;
  const lastOfMonth = DateTime.local(year, monthNum, daysInMonth).weekday;

  console.log(lastOfMonth);

  const formattedDate = (dateFormat) => {
    const month = defaultDate.monthLong;
    const day = defaultDate.day;
    const year = defaultDate.year;

    switch (dateFormat) {
      case "y-m-d":
        return `${year}, ${monthName}, ${day}`;
        break;
      case "m-d-y":
        return `${monthName} ${day}, ${year}`;
        break;
      case "d-m-y":
        return `${day}, ${monthName}, ${year}`;
        break;
      default:
        return `${day} ${monthName} ${year}`;
    }
  };

  const value = {
    day,
    setDay,
    monthName,
    setMonth,
    year,
    setYear,
    formattedDate,
    daysInMonth,
    firstOfMonth,
    lastOfMonth,
  };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
