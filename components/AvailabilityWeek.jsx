import React, { useEffect, useState } from "react";
import AvailabilityDay from './AvailabilityDay';
import useMousePosition from '../hooks/useMousePosition';

const defaultAva = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}};

const AvailabilityWeek = ({ setAvailability, availabilityEncoded }) => {
  const [start, setStart] = useState({});
  const [ava, setAva] = useState({...defaultAva});

  useEffect(() => {
    if (availabilityEncoded) {
      setAva(transformAvaEncoded(availabilityEncoded));
    }
  }, [availabilityEncoded]);

  const transformAvaEncoded = (avaEncoded) => {
    const newAva = {...defaultAva}

    for (let i = 0; i < avaEncoded.length; i += 7) {
      let ava = avaEncoded.slice(i, i + 7);
      const day = parseInt(ava.slice(0, 1));
      const start = parseInt(ava.slice(1, 5));
      const duration = parseInt(ava.slice(5));

      const startIndex = parseInt(start) / 25;
      for (let j = start; j < start + (25 * duration); j += 25) {
        newAva[day][j] = true;
      }
    }
    return newAva;
  }

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

  const isAvailable = (day, hour, minute) => {
    const dayMap = ava[day];
    let timeKey = hour * 100;
    timeKey += minute * 25;
    return dayMap[timeKey];
  }

  const renderHours = (dayIndex) => {
    const HOURS = 24;
    const hoursRendered = [];
    for (let hour = 0; hour < HOURS; hour++) {
      hoursRendered.push(
        <div className="flex flex-col h-5 border-t-2  border-black" key={`hour-${hour}`}>
          {[0, 15, 30, 45].map((minute, i) => {
            const highlight = isAvailable(dayIndex, hour, i);
            return (
              <AvailabilityDay isHighlighted={highlight} key={`${hour}-${i}`} hour={hour} i={i} />
            )
          })}
        </div>
      )
    }
    return hoursRendered;
  }
  const renderWeekdays = () => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return weekdays.map((weekday, dayIndex) => {
      return (
        <div
          key={weekday}
          className="flex flex-col align-center justify-center border-r-4 border-black pt-1"
        >
          <h3>{weekday}</h3>
          <div className="flex flex-col">
            {renderHours(dayIndex)}
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
  console.log('ava ', ava);

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
