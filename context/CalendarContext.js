import React, { createContext, useContext, useEffect, useState } from "react";
import { WalletContext } from "./WalletContext";
import { getCalendar } from "./calendar-utils/readFunctions/calendar";
import { getAvailability } from "./calendar-utils/readFunctions/availabilities";
import { getAppointments } from "./calendar-utils/readFunctions/appointments";





const CalendarContext = createContext();

const CalendarProvider = ({ children }) => {
  const walletContext = useContext(WalletContext);

  //state for whether user has a calendar, and their calendar address.
  const [userHasCalendar, setUserHasCalendar] = useState(false);
  const [calendarAddress, setCalendarAddress] = useState("0x0000000000000000000000000000000000000000");
  const [availability, setAvailabiltiy] = useState();
  const [appointments, setAppointments] = useState();

  const account = walletContext.account;
  const signer = walletContext.signer;

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
  }, [walletContext.account])



  const value = {
    userHasCalendar,
    calendarAddress,
    updateCalendar,
    updateAvailability,
    updateAppointments,
  };



  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
