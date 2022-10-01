import React, { useContext } from "react";
import DateDisplay from "./DateDisplay";
import Modal from "./Modal";
import PersonalEventDisplay from "./PersonalEventDisplay";
import { DateContext } from "../context/DateContext";
import { CalendarContext } from "../context/CalendarContext";
import { v4 as uuidv4 } from "uuid";

const Week = () => {
  const dateContext = useContext(DateContext);
  const calendarContext = useContext(CalendarContext);
  const appointments = calendarContext.appointmentData;

  const weekdays = (day) => {
    switch (day) {
      case 0:
        return "Mon";
        break;
      case 1:
        return "Tue";
        beak;
      case 2:
        return "Wed";
        break;
      case 3:
        return "Thu";
        break;
      case 4:
        return "Fri";
        break;
      case 5:
        return "Sat";
        break;
      case 6:
        return "Sun";
        break;
    }
  };

  const buildWeekArray = () => {
    let days = dateContext.defaultDate.weekday;
    const firstWeekday = dateContext.defaultDate.minus({ days: days - 1 });
    const date = (i) => firstWeekday.plus({ days: i });
    let weekArray = [];
    for (let i = 0; i < 7; i++) {
      // mapping extracts appointments that match date in dateContext
      const events = appointments.map((appointment) => {
        // create constants for easier readability
        let apptDate = appointment[2].substr(2, 2);
        let apptMonth = appointment[2].substr(0, 2);
        let apptYear = appointment[2].substr(4, 4);
        // console.log(appointment, date(i).day, date(i).month, date(i).year);
        if (
          apptMonth == date(i).month &&
          apptDate == date(i).day &&
          apptYear == date(i).year
        ) {
          return appointment;
        } else {
          return null;
        }
      });
      // console.log("events", events);

      const filteredEvents = [];
      for (let i = 0; i < events.length; i++) {
        if (events[i]) {
          filteredEvents.push(events[i]);
        }
      }
      // console.log(filteredEvents);

      weekArray.push([
        date(i).day,
        date(i).monthShort,
        date(i).year,
        filteredEvents.length > 0 ? filteredEvents : null,
      ]);
    }
    console.log(weekArray);
    return weekArray;
  };
  // buildWeekArray();

  const renderBlocks = () => {
    const weekArray = buildWeekArray();
    return weekArray.map((day, index) => {
      // map over array of appointments
      const appointments = day[3]
        ? day[3].map((appointment) => {
            return (
              <div className="flex justify-center align-center text-left text-xs">
                <ul className="w-full">
                  <li className="">
                    <Modal
                      title={appointment[0]}
                      body={
                        <PersonalEventDisplay
                          address={appointment[1]}
                          date={`${dateContext.month}-${day.day}-${dateContext.yearNum}`}
                          startTime={appointment[4]}
                          endTime={appointment[5]}
                        />
                      }
                      btnText={appointment[0]}
                    />
                  </li>
                </ul>
              </div>
            );
          })
        : null;

      // logic to match dates
      const dateLogic =
        day[0] === dateContext.today.day &&
        day[1] === dateContext.today.monthShort &&
        day[2] === dateContext.today.year;
      // logic for Tailwind classes
      const bgColor = dateLogic ? "ternary" : "secondary";
      const textColor = dateLogic ? "black" : "white";
      console.log(dateLogic);
      console.log(day[1], dateContext.today.monthShort);
      return (
        <div
          className={`flex flex-col text-center border-r-2 border-black text-xl pt-1 bg-${bgColor} text-${textColor} hover:bg-ternary hover:text-black`}
          key={uuidv4()}
        >
          <p>{weekdays(index)}</p>
          <p>{day[0]}</p>
          {appointments}
        </div>
      );
    });
  };

  return (
    <>
      <DateDisplay />
      <div className="grid grid-cols-7 border-black border-8 rounded-xl h-[90%] bg-secondary text-white mr-4 mt-4 text-xl">
        {renderBlocks()}
      </div>
    </>
  );
};

export default Week;
