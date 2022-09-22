import React, { useState } from "react";
import AvailabilityDay from './AvailabilityDay';
import useMousePosition from '../hooks/useMousePosition';

const AvailabilityWeek = ({ setAvailability }) => {
  const [start, setStart] = useState({});
  const mousePosition = useMousePosition();

  const renderHourTitle = (hour) => {
    const isPM = hour >= 12;
    if (hour > 12) hour = hour - 12;
    if (hour === 0) hour = 12;
    return `${hour}:00 ${isPM ? 'PM' : 'AM'}`;
  }

  const handleTimeEvent = (event, dayIndex, hour, quarter) => {
    if (event.type === "mousedown") {
      setStart({ dayIndex, hour, quarter });
    } else {
      setAvailability(start, { dayIndex, hour, quarter });
      setStart({});
    }
    console.log('clicked: ', event.type, hour, quarter);
  }

  const renderHours = () => {
    const HOURS = 24;
    const hoursRendered = [];
    for (let hour = 0; hour < HOURS; hour++) {
      hoursRendered.push(
        <div className="flex flex-col h-5 border-t-2  border-black px-1" key={`hour-${hour}`}>
          {[0, 15, 30, 45].map((minute, i) => {
            return (
              <AvailabilityDay key={`${hour}-${i}`} hour={hour} i={i} />
            )
          })}
        </div>
      )
    }
    return hoursRendered;
  }
  const renderWeekdays = () => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return weekdays.map((weekday) => {
      return (
        <div
          key={weekday}
          className="flex flex-col align-center justify-center border-r-4 border-black pt-1"
        >
          <h3>{weekday}</h3>
          <div className="flex flex-col">
            {renderHours()}
          </div>
        </div>
      );
    });
  };

  const renderHoursLegend = () => {
    const hoursLegend = [];
    for (let i = 0; i < 24; i++) {
      hoursLegend.push(<div key={`hour-key-${i}`} className="h-5 text-sm text-white border-t-2 border-black w-20 pr-2">{renderHourTitle(i)}</div>);
    }
    return hoursLegend;
  }

  return (
    <div className="flex flex-row border-black border-8 rounded-xl bg-secondary ">
      <div className="flex flex-col mt-6 bg-secondary border-r-4 border-black pl-2 pt-6 mb-2">
        {renderHoursLegend()}
      </div>
      <div className="grid grid-cols-7  h-full w-full bg-secondary text-white mr-4 mt-4 text-xl">
        {renderWeekdays()}
      </div>
    </div>
  );
};

export default AvailabilityWeek;
