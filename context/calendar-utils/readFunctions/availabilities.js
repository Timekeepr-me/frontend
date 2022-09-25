import { ethers } from "ethers";
import UserCalendar from "../../../artifacts/contracts/UserCalendar.sol/UserCalendar.json";
import { isNullAccount, isNullAddress } from "../utils";


const getAvailability = async (
  setAvailabiltiy,
  calendarAddress,
  signer,
  account
) => {


  //if the user is not connected, or if they don't have a calendar, terminate.
  if(isNullAccount(account) || isNullAddress(calendarAddress))return;


  const calendarContract = new ethers.Contract(
    calendarAddress,
    UserCalendar.abi,
    signer
  );


  //fetch availability
  const availabilty = await calendarContract.readAvailability();

  setAvailabiltiy(availabilty);
};

export { getAvailability };
