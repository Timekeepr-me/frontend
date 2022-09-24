import React, { useState, useContext } from "react";

import Day from "../components/Day";
import Week from "../components/Week";
import Month from "../components/Month";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { DateContext } from "../context/DateContext";
import Modal from "../components/Modal";

const Calendar = () => {
  const context = useContext(DateContext);

  const renderRange = () => {
    switch (context.range) {
      case "day":
        return <Day />;
        break;
      case "week":
        return <Week />;
        break;
      case "month":
        return <Month />;
        break;
      default:
        return <Month />;
    }
  };

  const handleDayBtn = () => {
    context.setRange("day");
  };

  const handleWeekBtn = () => {
    context.setRange("week");
  };

  const handleMonthBtn = () => {
    context.setRange("month");
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-8 h-[84vh] p-3 bg-gradient-to-b from-primary to-ternary mb-8">
          <div className="col-span-1 flex flex-col justify-center items-center">
            <div>
              <Button text="Day" click={handleDayBtn} />
            </div>
            <div className="my-10">
              <Button text="Week" click={handleWeekBtn} className="" />
            </div>
            <div>
              <Button text="Month" click={handleMonthBtn} />
            </div>
            <Modal />
          </div>
          <div className="col-span-7">{renderRange()}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Calendar;
