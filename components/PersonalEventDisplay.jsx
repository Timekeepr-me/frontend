import react from "react";

const PersonalEventDisplay = () => {
  return (
    <div className="flex flex-col items-start justify center p-2">
      <div className="flex-row flex">
        <h4>Title: </h4>
        <p> Doctor</p>
      </div>
      <div className="flex-row flex">
        <h4>Description: </h4>
        <p>Dr. Dan</p>
      </div>
      <div className="flex-row flex">
        <h4>Attendees: </h4>
        <p>0x0</p>{" "}
      </div>
      <div className="flex-row flex">
        <h4>Start time: </h4>
        <p>12:15pm</p>
      </div>
      <div className="flex-row flex">
        <h4>End time: </h4>
        <p>12:45pm</p>
      </div>
    </div>
  );
};

export default PersonalEventDisplay;
