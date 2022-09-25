import React, { useState, useEffect, useContext } from "react";
import DateDisplay from "./DateDisplay";
import { DateContext } from "../context/DateContext";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";

const Day = () => {
  // const [availability, setAvailability] = [];
  const context = useContext(DateContext);

  console.log(context.defaultDate.toLocal());

  const renderTimes = () => {
    // call function that gets data from solidity
    // Build array with hours 1 - 24
    const hours = [];
    for (let i = 0; i <= 23; i++) {
      hours.push(i);
    }
    // Loop over array and build divs with 15 min time intervals
    return hours.map((hour) => {
      // hour.availability is a boolean
      const textColorLogic = !hour && hour !== 0 ? "black" : "white";
      const bgColorLogic = !hour && hour !== 0 ? "ternary" : null;
      const timeIntervals = ["00", "15", "30", "45"];
      const intervals = timeIntervals.map((interval) => {
        const borderB = interval === "45" ? "none" : 2;
        return (
          <div
            className={`bg-${bgColorLogic} text-${textColorLogic} border-b-${borderB} border-black hover:bg-ternary hover:text-black`}
            key={uuidv4()}
          >
            {hour < 10 ? `0${hour}:${interval}` : `${hour}:${interval}`}
            <Modal />
          </div>
        );
      });
      // render divs with 15 min intervals into grid
      return (
        <div
          className="border-r-4 border-b-4 border-black pt-1"
          key={(context.defaultDate.toLocal(), uuidv4())}
        >
          <div className="grid grid-flow-row">{intervals}</div>
        </div>
      );
    });
  };

  // 1. useEffect hook that uses ethers.js to return data about a user's availability
  // 2. Take that data and save it into `availability` state
  // 3. Loop over array, if user has availability for a given time range, add it into `hours` array in renderTimes() function
  // 4. when renderTimes returns a mapping of the hours array, if a given time has availability, add conditional rendering into the return statement nof hours.map

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-12 md:grid-rows-2 border-black border-8 rounded-xl h-[90%] bg-secondary text-white text-xl text-center mt-4">
        {renderTimes()}
      </div>
    </>
  );
};

export default Day;
