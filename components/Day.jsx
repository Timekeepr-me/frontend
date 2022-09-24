import React, { useState, useEffect, useContext } from "react";
import DateDisplay from "./DateDisplay";
import { DateContext } from "../context/DateContext";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";

const Day = () => {
  const [availability, setAvailability] = [1, 2, 3, 3];
  const context = useContext(DateContext);

  console.log(context.defaultDate.toLocal());

  const renderTimes = () => {
    // call function that gets data from solidity
    const hours = [
      // [hour, availability],
      // [hour, availability],
      // [hour, availability],
      // [hour, availability],
      // [hour, availability],
      // [hour, availability],
    ];
    for (let i = 0; i <= 23; i++) {
      hours.push(i);
    }

    return hours.map((hour) => {
      // hour.availability is a boolean
      return (
        <div
          className="border-r-4 border-b-4 border-black pt-1"
          key={(context.defaultDate.toLocal(), uuidv4())}
        >
          <div className="grid grid-flow-row">
            <div
              className={`border-b-2 border-black bg-${
                hour ? "ternary" : null
              } text-${!hour ? "black" : "white"} text-${
                !hour ? "black" : "white"
              } hover:bg-ternary hover:text-black`}
            >
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </div>
            <div
              className={`border-b-2 border-black bg-${
                !hour ? "ternary" : null
              } text-${
                !hour ? "black" : "white"
              } hover:bg-ternary hover:text-black`}
            >
              {hour < 10 ? `0${hour}:15` : `${hour}:15`}
            </div>
            <div
              className={`border-b-2 border-black bg-${
                !hour ? "ternary" : null
              } text-${
                !hour ? "black" : "white"
              } hover:bg-ternary hover:text-black`}
            >
              {hour < 10 ? `0${hour}:30` : `${hour}:30`}
            </div>
            <div
              className={`bg-${!hour ? "ternary" : null} text-${
                !hour ? "black" : "white"
              } hover:bg-ternary hover:text-black`}
            >
              {hour < 10 ? `0${hour}:45` : `${hour}:45`}
            </div>
          </div>
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
      <div className="grid grid-cols-12 md:grid-rows-2 border-black border-8 rounded-xl h-[85%] bg-secondary text-white text-xl text-center mt-4">
        {renderTimes()}
      </div>
    </>
  );
};

export default Day;
