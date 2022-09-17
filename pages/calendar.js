import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Day from "../components/Day";
import Week from "../components/Week";
import Month from "../components/Month";
import Button from "../components/Button";
import { DateContext } from "../context/DateContext";

const Calendar = () => {
  const dateContext = useContext(DateContext);
  const renderRange = () => {
    switch (dateContext.range) {
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

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-8 h-[84vh] p-3 bg-gradient-to-b from-primary to-ternary mb-8">
        <div className="col-span-1 flex flex-col justify-center items-center ">
          <div className="">
            <Button text="Day" click={() => dateContext.setRange("day")} />
          </div>
          <div className="my-10  ">
            <Button
              text="Week"
              click={() => dateContext.setRange("week")}
              className=""
            />
          </div>
          <div className=" ">
            <Button text="Month" click={() => dateContext.setRange("month")} />
          </div>
        </div>
        <div className="col-start-2 col-span-7">{renderRange()}</div>
      </div>
    </div>
  );
};

export default Calendar;
