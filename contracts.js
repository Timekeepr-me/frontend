const calendarFactoryAddress = "0x0809e1A9e476a4099Ae41997988d5bE24dE97f42";
const calendarFactoryAbi = [
  "function createUserCal(string memory userName) external",
  "function getUserCalendarClone(address userEOA) external view returns (address userCalendar)",
];

const calendarAbi = [
  "function setAvailability(uint256 _day, uint256 _startTime, uint256 _endTime) external",
  "function readAvailability() external view returns (uint256[7][96] memory)",
  "function deleteAvailability(uint256 _day, uint256 _startTime, uint256 _endTime) external",
  "function readAppointments() external view returns (Appointment[] memory)",
  "function deleteAppointment(uint256 _appointmentId) external"
];

export { calendarFactoryAddress, calendarFactoryAbi, calendarAbi };
 