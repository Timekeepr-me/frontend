import { ethers } from "ethers";
import UserCalendar from "../../../artifacts/contracts/UserCalendar.sol/UserCalendar.json";
import { isNullAccount, isNullAddress } from "../utils";



/*

    bookingParams :

    [
        string memory _title,
        uint256 _date,
        uint256 _day,
        address _attendee,
        uint256 _startTime,
        uint256 _duration
    ]



*/



//this will be made available through the calendar context. It needs to book a meeting (sign the transaction) and update state. (pass updateAppointments.)
async function bookMeeting(bookingParams, providerRaw, account, calendarAddress, updateAppointments) {


    //NOTE: for whatever reason, providerRaw is what we pass to contract instance. This works. Dont change.
    
    //abort if prereqs not met
    console.log(providerRaw);
    console.log(account, calendarAddress)
    if(isNullAccount(account) || isNullAddress(calendarAddress))return;



    //instantiate calendar
    const calendar = new ethers.Contract(calendarAddress, UserCalendar.abi, providerRaw);


    //WARNING: bookingParams must match format specified above ^^^^^
    const bookingReceipt = await calendar.createAppointment(...bookingParams, {gasLimit: 1000000});

    console.log(bookingReceipt);

    const bookingConfirmed = await bookingReceipt.wait();

    console.log(bookingConfirmed);

    updateAppointments();
}



export { 
    bookMeeting
}


