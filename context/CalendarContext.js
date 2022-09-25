import React, { createContext, useContext, useEffect, useState } from "react";
import { WalletContext } from "./WalletContext";

//read methods: 
import { getCalendar } from "./calendar-utils/readFunctions/calendar";
import { getAvailability } from "./calendar-utils/readFunctions/availabilities";
import { getAppointments } from "./calendar-utils/readFunctions/appointments";
// appointmentData is hardcoded for development purpose
import { appointmentData } from "../AppointmentData";

//write methods:
import { bookMeeting } from "./calendar-utils/writeFunctions/bookMeeting";




/*
  WARNING!!!! THE FOLLOWING HARDCODED APPOINTMENT PARAMS MUST BE FETCHED FROM THE
  APPOINTMENT BOOKING FRONT-END FEATURE!
*/


const mockAppointmentParams = [
  "Test appointment", //title
  20220926, //date (Sept 26th, 2022)
  1, //day (monday, 1st day of the week)
  "0x082F2A37Bd9b510fC29E4e78dFaCC5d1069569ee", //attendee 
  1715, //startTime (i = 15)
  15, //duration
]





const CalendarContext = createContext();

const CalendarProvider = ({ children }) => {
  const walletContext = useContext(WalletContext);

  //state for whether user has a calendar, and their calendar address.
  const [userHasCalendar, setUserHasCalendar] = useState(false);
  const [calendarAddress, setCalendarAddress] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const [availability, setAvailabiltiy] = useState();
  const [appointments, setAppointments] = useState();

  const account = walletContext.account;
  const signer = walletContext.signer;
  const provider = walletContext.provider;
  //first, we find out whether the user has a calendar deployed. If they do, we set their calendar address.
  const updateCalendar = () =>
    getCalendar(setUserHasCalendar, setCalendarAddress, signer, account);

  //if the user has a calendar, we load their availabilty and their meetings.
  const updateAvailability = () =>
    getAvailability(setAvailabiltiy, calendarAddress, signer, account);

  //finally, get the appointments.
  const updateAppointments = () =>
    getAppointments(setAppointments, calendarAddress, signer, account);

  useEffect(() => {
    updateCalendar();
    updateAvailability();
    updateAppointments();
    //bookMeeting(mockAppointmentParams, provider, account, calendarAddress, updateAppointments);
  }, [walletContext.account, calendarAddress])



  

  const value = {
    userHasCalendar,
    calendarAddress,
    updateCalendar,
    updateAvailability,
    updateAppointments,
    appointmentData,
  };





  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
