import { WalletContext } from "../context/WalletContext";
import { useState, useEffect, useContext } from 'react';
import Button from './Button';
import Link from "next/link";

export default function CreateCalendar() {
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { calendarFactory, userCalAddress } = useContext(WalletContext);
    const createCalendar = async () => {
      const response = await calendarFactory.createUserCal(userName);
      console.log('successfully created user calendar', response);
      setUserName("");
    }
    console.log('userCalAddress ', userCalAddress);
    return (
      <div
        className="flex mt-5"
      >
        {
          userCalAddress ? 
            (<Link href="/dashboard">
                <a>
                  <Button text="Go to your calendar dashboard" className="text-5xl" />
                </a>
              </Link>
              )
            :
              <Button text="create your calendar" className="text-5xl mb-4" click={() => setShowModal(true)} />
        }

        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-8 w-auto">
                {/*content*/}
                <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      create a calendar
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
                    <input 
                      type="text"
                      className="px-2 py-4 placeholder-slate-300 border-gray-500 text-slate-600 relative bg-white bg-white rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-64 text-left" 
                      placeholder="user name"
                      value={userName} onChange={(event) => setUserName(event.target.value)} 
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      cancel
                    </button>
                    <button
                      className="bg-emerald-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        createCalendar();
                        setShowModal(false);
                      }}
                    >
                      create
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
  }
  