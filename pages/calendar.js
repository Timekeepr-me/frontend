import React, { useContext } from "react";
import LandingPage from "../components/LandingPage";
import Day from "../components/Day";
import Week from "../components/Week";
import Month from "../components/Month";
import Button from "../components/Button";
import { DateContext } from "../context/DateContext";
import { WalletContext } from "../context/WalletContext";
import { CalendarContext } from "../context/CalendarContext";

const Calendar = () => {
  const dateContext = useContext(DateContext);
  const walletContext = useContext(WalletContext);
  const calendarContext = useContext(CalendarContext);

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

  const handleDayBtn = () => {
    dateContext.setRange("day");
  };

  const handleWeekBtn = () => {
    dateContext.setRange("week");
  };

  const handleMonthBtn = () => {
    dateContext.setRange("month");
  };

  return (
    <>
      {walletContext.walletIsConnected ? (
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
            </div>
            <div className="col-span-7">{renderRange()}</div>
          </div>
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default Calendar;
