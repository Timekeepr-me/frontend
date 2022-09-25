import { ethers } from "ethers";
import { calendarFactoryAbi, calendarFactoryAddress } from "../contracts";



function getCalendar(setUserHasCalendar, setCalendarAddress, signer, account) {
    const factoryContract = new ethers.Contract(calendarFactoryAddress, calendarFactoryAbi, signer);

    const userCalendarAddress = await factoryContract.getUserCalenderClone(account);
  
    //if the following is true, the user does not have a calender deployed.
    if( calendarAddress !== "0x0000000000000000000000000000000000000000" ) {
      setUserHasCalendar(true);
      setCalendarAddress(userCalendarAddress);
    }
}


export {
    getCalendar
}