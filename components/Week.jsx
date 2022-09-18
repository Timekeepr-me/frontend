import React from "react";

const Week = () => {
  const renderWeekdays = () => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return weekdays.map((weekday) => {
      return (
        <div
          key={weekday}
          className="flex align-center justify-center border-r-4 border-black p-2 pt-1 hover:bg-ternary hover:text-black"
        >
          <h3>{weekday}</h3>
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-7 border-black border-8 rounded-xl h-full bg-secondary text-white mr-4 mt-4 text-xl">
      {renderWeekdays()}
    </div>
  );
};

export default Week;
