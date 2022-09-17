import React, { useState } from "react";
import DateDisplay from "./DateDisplay";
// import { date, month } from "../constants/date";

const Month = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const datesArray = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  const dateBlocks = () => {
    let dates = datesArray();
    return dates.map((day) => {
      return (
        <div
          key={day}
          className="flex items-start justify-end border-[5px] border-black rounded-lg px-2 bg-secondary"
        >
          {day}
        </div>
      );
    });
  };

  // const dayNum = () => {
  //   const dates = datesArray();
  //   return dates.map((day) => {
  //     return <option value={day}>{day}</option>;
  //   });
  // };

  const handleSetMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleSelectYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <>
      <DateDisplay />

      <div className="grid grid-cols-7 border-black border-t-2 rounded-t-xl bg-black text-white text-xl pt-2">
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
      <div className="grid grid-cols-7 h-[85%] border-black border-8 border-t-0 rounded-b-xl bg-black text-white text-xl">
        {dateBlocks()}
      </div>
      <div className="flex flex-row justify-end mt-2">
        <form className="flex">
          <label>
            Month:{" "}
            <select value={month} onChange={handleSetMonth} className="mr-3">
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </label>
          <label>
            Year:{" "}
            <input
              type="number"
              id="year"
              value={year}
              onChange={handleSelectYear}
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default Month;
