import React from "react";
import { date } from "../constants/date";

const Month = () => {
  let month = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const dateBlocks = month.map((day) => {
    return (
      <div className="flex items-start justify-end border-[5px] border-black rounded-lg px-2 bg-secondary">
        {day}
      </div>
    );
  });

  return (
    <>
      <div className="grid grid-cols-7 border-black border-t-8 rounded-t-xl bg-black text-white text-xl mt-4 pt-2">
        <div className="flex align-center justify-center bg-black text-white h-fit">
          Mon
        </div>
        <div className="flex align-center justify-center mt-1">Tue</div>
        <div className="flex align-center justify-center mt-1">Wed</div>
        <div className="flex align-center justify-center mt-1">Thu</div>
        <div className="flex align-center justify-center mt-1">Fri</div>
        <div className="flex align-center justify-center mt-1">Sat</div>
        <div className="flex align-center justify-center mt-1">Sun</div>
      </div>
      <div className="grid grid-cols-7 h-[90%] border-black border-8 border-t-0 rounded-b-xl bg-black text-white text-xl">
        {dateBlocks}
      </div>
    </>
  );
};

export default Month;
