import React, { useState, useContext, useEffect } from "react";
import DateDisplay from "./DateDisplay";
import Modal from "./Modal";
import PersonalEventDisplay from "./PersonalEventDisplay";
import { DateContext } from "../context/DateContext";
import { CalendarContext } from "../context/CalendarContext";
import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";

const Month = () => {
  const calendarContext = useContext(CalendarContext);
  const dateContext = useContext(DateContext);

  // Create weekdays array
  const renderWeekdays = () => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return weekdays.map((weekday) => {
      return (
        <div key={uuidv4()} className="flex align-center justify-center my-1">
          {weekday}
        </div>
      );
    });
  };

  // build array of dats from data taken from Luxon library
  const buildBlocksArray = () => {
    const blocksArray = [];
    const first = DateTime.fromObject({
      year: dateContext.year,
      month: dateContext.monthNum,
      day: 1,
    }).toLocal();
    const last = DateTime.fromObject({
      year: dateContext.year,
      month: dateContext.monthNum,
      day: dateContext.daysInMonth,
    }).toLocal();
    const firstWeekday = first.weekday;
    const lastWeekday = last.weekday;
    // fill in trailing blocks with empty dates
    for (let i = firstWeekday; i > 1; i--) {
      blocksArray.push("");
    }
    for (let i = 0; i < dateContext.daysInMonth; i++) {
      // blocksArray.push(first.plus({ days: i }));
      if (i % 4 === 0) {
        blocksArray.push({ date: first.plus({ days: i }), events: 2 });
      } else {
        blocksArray.push({ date: first.plus({ days: i }), events: 0 });
      }
    }
    // fill in trailing blocks with empty dates
    for (let i = lastWeekday; i < 7; i++) {
      blocksArray.push("");
    }
    // console.log(blocksArray);
    return blocksArray;
  };

  const renderBlocks = () => {
    const blocksArray = buildBlocksArray();
    return blocksArray.map((block) => {
      // if (typeof block.day === "number") {
      if (block !== "") {
        return (
          <div
            key={block.date.toLocal()}
            className="flex flex-col  border-2 border-black rounded-lg px-2 bg-secondary hover:bg-ternary hover:text-black"
          >
            <div className="flex items-end justify-end">{block.date.day}</div>
            {/* start rendering of events, if any */}
            {block.events > 0 ? (
              <div className="flex justify-center align-center text-left text-xs">
                <ul>
                  <li>
                    <Modal
                      title="meeting 1"
                      body={<PersonalEventDisplay />}
                      btnText="meeting 1"
                    />
                  </li>
                  <li>
                    <Modal
                      title="Meeting Julia 5pm"
                      body={<PersonalEventDisplay />}
                      btnText="Meeting Julia 5pm"
                    />
                  </li>
                  <li className="bg-[#2a2a2a] text-ternary px-1 rounded-xl mb-0.5 border border-black text-center">
                    +2 more
                  </li>
                </ul>
              </div>
            ) : null}
            {/* end rendering of events */}
          </div>
        );
      } else {
        return (
          <div
            key={uuidv4()}
            className="flex items-start justify-end border-2 border-black rounded-lg px-2 bg-[#2f2f2f]"
          ></div>
        );
      }
    });
  };

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-7 border-black border-t-2 rounded-t-xl bg-black text-white text-xl mt-4">
        {renderWeekdays()}
      </div>
      <div className="grid grid-cols-7 h-[85%] border-black border-[6px] border-t-0 rounded-b-xl bg-black text-white text-xl">
        {renderBlocks()}
      </div>
      <div className="flex flex-row justify-end mt-2"></div>
    </>
  );
};

export default Month;
