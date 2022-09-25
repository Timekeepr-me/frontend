import React, { useState, useContext, useEffect } from "react";
import Calendar from "./calendar";
import Day from "../components/Day";
import AvailabilityWeek from "../components/AvailabilityWeek";
import Month from "../components/Month";
import Button from "../components/Button";
import { DateContext } from "../context/DateContext";
import { WalletContext } from "../context/WalletContext";
import { data } from "autoprefixer";

const Dashboard = () => {
  const [range, setRange] = useState("week");
  // array of []
  const [availability, setAvailability] = useState(new Array(7).fill(new Array(0)));
  const [fromTime, setFromTime] = useState([]);
  const [toTime, setToTime] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [availabilityEncoded, setAvailabilityEncoded] = useState("");


  // todo: get data from smart contract
  const dashboardData = {
    balance: "45",
    nextMeetingDate: "September 25th, 2022",
    upcomingMeetings: "21",
  };

  const dateContext = useContext(DateContext);
  const { userCalendar } = useContext(WalletContext);

  useEffect(() => {
    fetchAvailability();
  }, [userCalendar]);

  const fetchAvailability = async () => {
    if (!userCalendar) {
      console.error('connect wallet');
      return;
    }
    const encodedString = await userCalendar.availabilityEncodedStr();
    setAvailabilityEncoded(encodedString);
  }

  console.log('userCalendar ', userCalendar);
  const handleFromTime = (day, event) => {
    const newFromTime = [...fromTime];
    newFromTime[day] = event.target.value;
    setFromTime(newFromTime);
  }
  const handleToTime = (day, event) => {
    const newToTime = [...toTime];
    newToTime[day] = event.target.value;
    setToTime(newToTime);
  }
  const setNewAvailability = (day) => {
    console.log('setting ', day, fromTime[day], toTime[day], fromTime, toTime);

    const currAvailability = [...availability];
    currAvailability[day] = [...currAvailability[day], [fromTime[day], toTime[day]]];
    setAvailability(currAvailability);
    handleToTime(day, {target: { value: "" }});
    handleFromTime(day, {target: { value: "" }});

    // clear from and to time
    // const newFromTime = [...fromTime];
    // newFromTime[day] = undefined;
    // setFromTime(newFromTime);

    // const newToTime = [...toTime];
    // newToTime[day] = undefined;
    // setToTime(newToTime);
  }
  const deleteAvailability = (day, timeIndex) => {
    const currAvailability = [...availability];
    console.log('deleting ', day, timeIndex, currAvailability);
    currAvailability[day] = [...currAvailability[day].slice(0, timeIndex), ...currAvailability[day].slice(timeIndex + 1)];
    console.log('post delete ', currAvailability);
    setAvailability(currAvailability);
  }
  const finalizeAvailability = async () => {
    // 013001600109000930012001400115001800009001500011001600015001800

    // with sunday
    // 009001000013001800015001800009001200010001500017001900
    let availabilityString = '';
    availability.forEach((day, i) => {
      day.forEach((block, j) => {
        console.log('block j', block, j);
        let startTime = block[0] + '';
        let endTime = block[1] + '';
        if (startTime.length === 3) {
          startTime = '0' + startTime;
        }
        if (endTime.length === 3) {
          endTime = '0' + endTime;
        }
        availabilityString += j + startTime + endTime;
      });
    })
    try {
      console.log("availabilityString ", availabilityString);
      const response = await userCalendar.setAvailability(availabilityString);
      console.log('setAvailability response - ', response);

    } catch(e) {
      console.error('error on setAvailability: ', e);
    }
  }
  console.log('availability ', availability);
  return (
    <div className="h-[75vh] bg-gradient-to-b from-primary to-ternary">
      <div className="flex flex-col align-center justify-center m-10">
        <h1 className="m-4 text-4xl text-white">Dashboard</h1>
        <div className="flex flex-row align-center justify-center">
          <div className="min-h-36 w-36 bg-[#3a3a3a] shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center text-white">
            <h3 className="text-2xl text-extrabold text-center">
              Account Balance
            </h3>
            <div className="text-center text-lg">
              {dashboardData.balance} xDai
            </div>
          </div>
          <div className="min-h-36 w-36 bg-[#3a3a3a] shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center text-white">
            <h3 className="text-2xl text-extrabold text-center">
              Next Meeting
            </h3>
            <div className="text-center text-lg">
              {dashboardData.nextMeetingDate}
            </div>
          </div>
          <div className="min-h-36 w-36 bg-[#3a3a3a] shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center text-white">
            <h3 className="text-2xl text-extrabold text-center">
              Upcoming Meetings
            </h3>
            <div className="text-center text-lg">
              {dashboardData.upcomingMeetings}
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-gray-200 pt-6">
        <h2 className="m-4 text-4xl ">Availability</h2>
        <button className="p-3 border-2 rounded-md bg-white text-black" onClick={() => setShowModal(true)}>Edit Availability</button>
        <div className="grid grid-cols-8 h-full p-3 bg-gray-200 mb-8">
          <div className="col-start-2 col-span-7">
            <AvailabilityWeek setAvailability={setAvailability} />
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-8 w-full">
              {/*content*/}
              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Availability
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row">
                  {
                    ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun' ].map((dayName, dayIndex) => {
                      return (
                        <div key={`${dayName}-${dayIndex}`} className="flex flex-col">
                          <h3 className="text-black text-xl mb-2">{dayName}</h3>
                          {
                            availability[dayIndex].map((ava, i) => {
                              return (
                                <div className="flex flex-row items-center justify-center" key={`${i}`}>
                                  <h3 className="px-2 py-1 text-slate-600" >
                                    {ava[0]}
                                  </h3>
                                  <h3 className="px-2 py-1 text-slate-600" >
                                    {ava[1]}
                                  </h3>
                                  <button className="p-2 text-sm text-rose-600" onClick={() => deleteAvailability(dayIndex, i)}>X</button>
                                </div>
                              )
                            })
                          }
                          <div className="">
                            <input 
                              type="text"
                              className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-20" 
                              placeholder="from"
                              onChange={(event) => handleFromTime(dayIndex, event)}
                              value={fromTime[dayIndex]}
                            />
                            <input
                              type="text"
                              className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-20"
                              placeholder="to"
                              onChange={(event) => handleToTime(dayIndex, event)}
                              value={toTime[dayIndex]}
                            />
                            <button className="p-2 m-2 text-emerald-300" onClick={() => setNewAvailability(dayIndex)}>+</button>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      finalizeAvailability();
                    }}
                  >
                    Finalize
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;
