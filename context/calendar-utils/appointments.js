import { ethers } from "ethers";
import { calendarAbi } from "../../contracts";

const getAppointments = async (
  setAppointments,
  calendarAddress,
  signer,
  account
) => {
  const calendarContract = new ethers.Contract(
    calendarAddress,
    calendarAbi,
    signer
  );

  //fetch availability
  const appointments = await calendarContract.appointmentsArray();

  setAppointments(availabilty);
};

export { getAppointments };
