import React, { useState, useContext } from "react";
import Day from "../components/Day";
import AvailabilityWeek from "../components/AvailabilityWeek";
import Month from "../components/Month";
import Button from "../components/Button";
import { DateContext } from "../context/DateContext";
import { data } from "autoprefixer";

const Dashboard = () => {
  const [range, setRange] = useState("week");
  const [ava, setAva] = useState({});
  const [showAvailModal, setShowAvailModal] = React.useState(false);

  const setAvailability = (start, end) => {
    console.log(start, end);
  }
  // todo: get data from smart contract
  const dashboardData = {
    balance: '45',
    nextMeetingDate: 'September 25th, 2022',
    upcomingMeetings: '21',
  }

  const dateContext = useContext(DateContext);

  const editAvailability = () => {

  }

  return (
    <div>
      <div className="flex flex-col align-center justify-center m-10">
        <h1 className="m-4 text-4xl">Dashboard</h1>
        <div className="flex flex-row align-center justify-center">
          <div className="min-h-36 w-36 bg-white shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center">
            <h3 className="text-2xl text-extrabold text-center text-black">Account Balance</h3>
            <div className="color-black text-center text-lg">{dashboardData.balance} xDai</div>
          </div>
          <div className="min-h-36 w-36 bg-white shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center">
            <h3 className="text-2xl text-extrabold text-center text-black">Next Meeting</h3>
            <div className="color-black text-center text-lg">{dashboardData.nextMeetingDate}</div>
          </div>
          <div className="min-h-36 w-36 bg-white shadow-black shadow-2xl rounded-md m-2 p-3 border-2 border-black flex-col align-center justify-center">
            <h3 className="text-2xl text-extrabold text-center text-black">Upcoming Meetings</h3>
            <div className="color-black text-center text-lg">{dashboardData.upcomingMeetings}</div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-gray-200 pt-6">
        <h2 className="m-4 text-4xl ">Availability</h2>
        <button className="p-3 border-2 rounded-md bg-white text-black" onClick={() => setShowAvailModal(true)}>Edit Availability</button>
        <div className="grid grid-cols-8 h-full p-3 bg-gray-200 mb-8">
          <div className="col-start-2 col-span-7">
            <AvailabilityWeek setAvailability={setAvailability} />
          </div>
        </div>
      </div>
      {showAvailModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 w-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Availability
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowAvailModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row">
                  {
                    ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun' ].map((day, i) => {
                      return (
                        <div className="flex flex-col">
                          <h3 className="text-black text-xl mb-2">{day}</h3>
                          <div className="">
                            <input type="text" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-20" placeholder="from"/>
                            <input type="text" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-20" placeholder="to"/>
                            <button className="p-2 m-2 text-emerald-300">+</button>
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
                    onClick={() => setShowAvailModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAvailModal(false)}
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
