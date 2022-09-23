import React, { useState, useContext } from "react";
import { DateContext } from "../context/DateContext";


const Dashboard = () => {
  // const [range, setRange] = useState("week");
  // todo: get data from smart contract
  const dashboardData = {
    balance: "45",
    nextMeetingDate: "September 25th, 2022",
    upcomingMeetings: "21",
  };

  const dateContext = useContext(DateContext);
  // const renderRange = () => {
  //   switch (range) {
  //     case "week":
  //       // todo: display each week day as interactable range by 15 min intervals
  //       return <Week />;
  //       break;
  //     default:
  //       return <Week />;
  //   }
  // };

  return (
    <div className="h-screen">
      <div className="flex flex-col align-center justify-center m-10">
        <h1 className="m-4 text-4xl">Dashboard</h1>
        <div className="flex flex-row align-center justify-center">
          <div className="min-h-36 w-36 bg-white shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center">
            <h3 className="text-2xl text-extrabold text-center text-black">
              Account Balance
            </h3>
            <div className="color-black text-center text-lg">
              {dashboardData.balance} xDai
            </div>
          </div>
          <div className="min-h-36 w-36 bg-white shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center">
            <h3 className="text-2xl text-extrabold text-center text-black">
              Next Meeting
            </h3>
            <div className="color-black text-center text-lg">
              {dashboardData.nextMeetingDate}
            </div>
          </div>
          <div className="min-h-36 w-36 bg-white shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center">
            <h3 className="text-2xl text-extrabold text-center text-black">
              Upcoming Meetings
            </h3>
            <div className="color-black text-center text-lg">
              {dashboardData.upcomingMeetings}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-8 h-[84vh] p-3 bg-gradient-to-b from-primary to-ternary mb-8">
        <div className="col-start-2 col-span-7">{renderRange()}</div>
      </div> */}
    </div>
  );
};

export default Dashboard;
