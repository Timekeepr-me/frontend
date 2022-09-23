import React, { useState, useContext } from "react";

const BookingForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [attendee, setAttendee] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleBookAppointment = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={handleBookAppointment} className="flex flex-col">
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Title</label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Date</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Day</label>
          <input
            type="text"
            placeholder="Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Attendee</label>
          <input
            type="text"
            placeholder="Attendee"
            value={attendee}
            onChange={(e) => setAttendee(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Start time</label>
          <input
            type="text"
            placeholder="Start time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">End Time</label>
          <input
            type="text"
            placeholder="End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <input type="submit" value="Book Appointment" />
      </form>
    </div>
  );
};

export default BookingForm;
