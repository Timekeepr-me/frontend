import { ethers } from "ethers";
import { calendarFactoryAbi, calendarFactoryAddress } from "../../../contracts";
import { isNullAddress, isNullAccount } from "../utils";

const getCalendar = async (
  setUserHasCalendar,
  setCalendarAddress,
  signer,
  account
) => {
  //if user not connected, terminate
  if (isNullAccount(account)) return;

  try {
    const factoryContract = new ethers.Contract(
      calendarFactoryAddress,
      calendarFactoryAbi,
      signer
    );

    //get user calendar address
    const userCalendarAddress = await factoryContract.getUserCalendarClone(
      account
    );

    //if calendar address is not null, user has a calendar deployed.
    if (!isNullAddress(userCalendarAddress)) {
      setUserHasCalendar(true);
      setCalendarAddress(userCalendarAddress);
    }
  } catch (error) {
    console.log(`CALENDAR FETCH ERROR: ${account}`);
  }
};

export { getCalendar };
