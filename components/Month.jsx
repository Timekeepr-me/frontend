import React, { useState, useContext, useEffect } from "react";
import DateDisplay from "./DateDisplay";
import Modal from "./Modal";
import PersonalEventDisplay from "./PersonalEventDisplay";
import { DateContext } from "../context/DateContext";
import { CalendarContext } from "../context/CalendarContext";
import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";

const Month = () => {
  const dateContext = useContext(DateContext);
  const calendarContext = useContext(CalendarContext);
  const appointments = calendarContext.appointmentData;
  console.log(appointments);

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
    // loop over appointments array, add appointment to object if dates match
    for (let date = 0; date < dateContext.daysInMonth; date++) {
      // mapping extracts appointments that matches date in dateContext
      const events = appointments.map((appointment) => {
        let apptDate = appointment[2].substr(2, 2);
        let apptMonth = appointment[2].substr(0, 2);
        let apptYear = appointment[2].substr(4, 4);

        if (
          apptMonth == dateContext.monthNum &&
          apptDate == date &&
          apptYear == dateContext.yearNum
        ) {
          return appointment;
        } else {
          return null;
        }
      });

      const filteredEvents = [];
      for (let i = 0; i < events.length; i++) {
        if (events[i]) {
          filteredEvents.push(events[i]);
        }
      }

      blocksArray.push({
        day: date,
        appointments: filteredEvents.length > 0 ? filteredEvents : null,
      });
    }
    // fill in trailing blocks with empty dates
    for (let i = lastWeekday; i < 7; i++) {
      blocksArray.push("");
    }
    console.log(blocksArray);
    return blocksArray;
  };
  buildBlocksArray();

  // map over appointments array if there are appointments

  const renderBlocks = () => {
    const blocksArray = buildBlocksArray();
    return blocksArray.map((block) => {
      // if (typeof block.day === "number") {
      if (block !== "") {
        return (
          <div
            key={uuidv4()}
            className="flex flex-col  border-2 border-black rounded-lg px-2 bg-secondary hover:bg-ternary hover:text-black"
          >
            <div className="flex items-end justify-end">{block.day}</div>
            {/* start rendering of events, if any */}
            {block.appointments
              ? block.appointments.map((appointment) => {
                  return (
                    <div className="flex justify-center align-center text-left text-xs">
                      <ul>
                        <li>
                          <Modal
                            title={appointment[0]}
                            body={
                              <div className="flex flex-col p-2 text-lg">
                                <p>
                                  Address:{" "}
                                  <span className="text-sm">
                                    {appointment[1]}
                                  </span>
                                </p>
                                <p>Date: {appointment[2]}</p>
                                <p>Start Time: {appointment[4]}</p>
                                <p>End Time: {appointment[5]}</p>
                              </div>
                            }
                            btnText={appointment[0]}
                          />
                        </li>
                      </ul>
                    </div>
                  );
                })
              : null}
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
