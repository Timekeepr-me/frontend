import { ethers } from "ethers";
import { calendarAbi } from "../contracts";



function getAvailability(setAvailabiltiy, calendarAddress, signer, account) {
    const calendarContract = new ethers.Contract(calendarAddress, calendarAbi, signer);

    //fetch availability
    const availabilty = await calendarContract.readAvailability();

    setAvailabiltiy(availabilty);

}


export {
    getAvailability
}