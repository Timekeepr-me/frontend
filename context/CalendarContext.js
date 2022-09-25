import React, { createContext, useContext, useState } from "react";
import { WalletContext } from "./WalletContext";
import { calendarFactoryAbi, calendarFactoryAddress } from "../contracts";
import { getCalendar } from "./calendar-utils/calendar";
import { getAvailability } from "./calendar-utils/availabilities";
import { getAppointments } from "./calendar-utils/appointments";
// import { ethers } from "ethers";

/* 
  - Bring all calendar related data here.
  - instantiate provider and signer here, pass to helper functions. 

  -Need to know whether a user has deployed a calendar already.
  -If user has calender, need to get calendar address.
*/

const CalendarContext = createContext();

const CalendarProvider = ({ children }) => {
  const walletContext = useContext(WalletContext);

  //state for whether user has a calendar, and their calendar address.
  const [userHasCalendar, setUserHasCalendar] = useState(false);
  const [calendarAddress, setCalendarAddress] = useState();
  const [availability, setAvailabiltiy] = useState();
  const [appointments, setAppointments] = useState();

  const account = walletContext.account;
  const signer = walletContext.signer;

  //first, we find out whether the user has a calendar deployed. If they do, we set their calendar address.
  const updateCalendar = () =>
    getCalendar(setUserHasCalendar, setCalendarAddress, signer, account);
  updateCalendar();

  //if the user has a calendar, we load their availabilty and their meetings.
  const updateAvailability = () =>
    getAvailability(setAvailabiltiy, calendarAddress, signer, account);
  updateAvailability();

  //finally, get the appointments.
  const updateAppointments = () =>
    getAppointments(setAppointments, calendarAddress, signer, account);
  updateAppointments();

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
