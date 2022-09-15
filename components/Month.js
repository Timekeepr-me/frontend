import React from "react";
import { date } from "../constants/date";

const Month = () => {
  let month = [1, 2, 3, 4];
  const dateBlocks = month.map((day) => {
    return (
      <div className="flex items-start justify-end border-4 border-black rounded-lg px-2">
        {day}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-7 grid-rows-6 border-black border-8 rounded-lg h-full ">
      <div className="flex align-center justify-center bg-black text-white">
        Mon
      </div>
      <div className="flex align-center justify-center">Tue</div>
      <div className="flex align-center justify-center">Wed</div>
      <div className="flex align-center justify-center">Thu</div>
      <div className="flex align-center justify-center">Fri</div>
      <div className="flex align-center justify-center">Sat</div>
      <div className="flex align-center justify-center">Sun</div>
      <div className="flex items-start justify-end border-4 border-black rounded-lg px-2">
        1
      </div>
      {dateBlocks}
    </div>
  );
};

export default Month;
