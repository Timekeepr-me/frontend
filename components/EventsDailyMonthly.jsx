import React, { useContext } from "react";
import Modal from "./Modal";
import PersonalEventDisplay from "./PersonalEventDisplay";
import { DateContext } from "../context/DateContext";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";

const EventsDailyMonthly = ({ events }) => {
  const context = useContext(DateContext);

  const renderEvents = events.map((appointment) => {
    // Date info parsed from function. Pass as prop
    const date = appointment[2];
    const dateProp = context.makeDate(
      Number(date.substr(4, 4)),
      Number(date.substr(2, 2)),
      Number(date.substr(0, 2))
    );
    const month = dateProp.monthShort;
    const day = dateProp.day;
    const year = dateProp.year;

    return (
      <ul className="w-full p-1" key={uuidv4()}>
        <li>
          <Modal
            title={appointment[0]}
            body={
              <PersonalEventDisplay
                address={appointment[1]}
                date={`${month} ${day}, ${year}`}
                startTime={appointment[4]}
                endTime={appointment[5]}
              />
            }
            btnText={appointment[0]}
          />
        </li>
      </ul>
    );
  });

  return <div className="py-2 px-16 w-full">{renderEvents}</div>;
};

export default EventsDailyMonthly;
