import React, { useState, useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { ethers } from "ethers";
import { communityTracker_MUMBAI } from "../config";

const BookingForm = () => {
  const [userEOAs, setUserEOAs] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [attendee, setAttendee] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isGroupAppt, setIsGroupAppt] = useState(false);
  const [err, setErr] = useState();
  const [txHash, setTxHash] = useState();

  const context = useContext(WalletContext);

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    const provider = context.provider;
    const address = communityTracker_MUMBAI;
    const ABI_INTERFACE = await new ethers.utils.Interface([
      "function createAppointment(string _title, string _date, uint256 _day, address _attendee, uint256 _startTime, uint256 _endtime)",
      "function createGroupAppointment(address userEOAs, string _title, string _date, uint256 _day, address _attendee, uint256 _startTime, uint256 _endtime)",
    ]);
    const signer = context.signer;
    const contract = new ethers.Contract(
      address,
      ABI_INTERFACE,
      context.signer
    );

    try {
      const tx = !isGroupAppt
        ? await contract.createAppointment(
            title,
            date,
            day,
            attendee,
            startTime,
            endTime
          )
        : await contract.createGroupAppointment(
            userEOAs,
            title,
            date,
            day,
            attendee,
            startTime,
            endTime
          );
      await tx.wait();
      if (tx) {
        console.log(tx);
        setTxHash(tx);
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <div>
      <form
        onSubmit={handleCreateAppointment}
        className="flex flex-col text-white"
      >
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Title:</label>
          <input
            type="text"
            placeholder="meeting title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Date:</label>
          <input
            type="date"
            // placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Weekday:</label>
          <input
            type="number"
            max={7}
            min={1}
            placeholder="1: Mon, 2: Tues, 3:"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Attendee:</label>
          <input
            type="text"
            placeholder="MATIC address..."
            value={attendee}
            onChange={(e) => setAttendee(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Start time:</label>
          <input
            type="time"
            step="900"
            // placeholder="start time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">End Time:</label>
          <input
            type="time"
            step="900"
            placeholder="end Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <label className="mr-2">Group meeting?</label>
          <input
            type="checkbox"
            checked={isGroupAppt}
            onChange={() => setIsGroupAppt(() => !isGroupAppt)}
            className="form-check-input h-4 w-4 border border-[#2a2a2a] rounded-lg bg-ternary checked:bg-ternary checked:border-[#2a2a2a] checked:text-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
        </div>
        <div
          className={`flex items-center mb-3 pt-0 ${
            !isGroupAppt ? "hidden" : null
          }`}
        >
          <label className="mr-2">Group address:</label>
          <input
            type="text"
            placeholder="group address..."
            value={userEOAs}
            onChange={(e) => setUserEOAs(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-3 pt-0">
          <input
            type="submit"
            value="Book Appointment"
            className="flex items-center justify-center py-1 px-4 mx-auto my-auto text-2xl rounded-lg text-ternary bg-buttonPrimary shadow-yellow text-lg active:translate-y-[2px]"
          />
        </div>
      </form>
    </div>
  );
};
export default BookingForm;
