import React, { useContext } from "react";
import { DateContext } from "../context/DateContext";

const DateDisplay = () => {
  const dateContext = useContext(DateContext);

  return (
    <div className="text-white text-3xl font-bold mb-2 mx-2">
      {dateContext.formattedDate()}
    </div>
  );
};

export default DateDisplay;
