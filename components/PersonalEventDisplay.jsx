import react from "react";

const PersonalEventDisplay = ({ title, address, date, startTime, endTime }) => {
  return (
    <div className="flex flex-col align-center justify-center p-4  text-lg bg-ternary text-black rounded-xl">
      <div className="flex-row flex">
        <h4 className="font-bold mr-1.5">Attendees: </h4>
        <p className="flex items-center text-xs">{address}</p>{" "}
      </div>
      <div className="flex-row flex">
        <h4 className="font-bold mr-1.5">Date: </h4>
        <p>{date}</p>
      </div>
      <div className="flex-row flex">
        <h4 className="font-bold mr-1.5">Start time: </h4>
        <p>{startTime}</p>
      </div>
      <div className="flex-row flex">
        <h4 className="font-bold mr-1.5">End time: </h4>
        <p>{endTime}</p>
      </div>
    </div>
  );
};

export default PersonalEventDisplay;
