import { ethers } from "ethers";
import UserCalendar from "../../../artifacts/contracts/UserCalendar.sol/UserCalendar.json";
import { isNullAccount, isNullAddress } from "../utils";

const getAppointments = async (
  setAppointments,
  calendarAddress,
  signer,
  account
) => {

  //if user is not connected or does not have calendar, terminate.
  if(isNullAccount(account) || isNullAddress(calendarAddress))return;

  const calendarContract = new ethers.Contract(
    calendarAddress,
    UserCalendar.abi,
    signer
  );

  //fetch availability
  const appointments = await calendarContract.readAppointments();

  setAppointments(appointments);
};






export { getAppointments };
