import React, { useState } from "react";
import Button from "./Button";
import BookingForm from "./BookingForm";

export default function Modal({ title, body, isError, btnText }) {
  const [showModal, setShowModal] = useState(false);
  !btnText ? (btnText = "Schedule") : btnText;
  // title = "Alert!";
  // body = <BookingForm />;
  // isError = false;

  const handleCloseModal = () => {
    setShowModal(() => false);
  };

  return (
    <>
      <button
        className="block m-auto px-2.5 py-0.5 text-base rounded-md border border-black text-ternary my-1 bg-[#2a2a2a]"
        onClick={() => setShowModal(true)}
      >
        {btnText}
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex flex-col justify-center items-center relative w-fit my-6 mx-auto max-w-md p-3 bg-[#2a2a2a] text-white rounded-xl border border-secondary shadow-md shadow-ternary h-fit">
              {/*title*/}
              <div className="flex">
                <h4 className="flex justify-center items-center text-center text-2xl">
                  {title}
                </h4>
              </div>
              {/*body*/}
              <div className="flex justify-center items-center bg-[#646464] w-full h-4/5 mt-2 rounded-xl">
                {body}
              </div>
              {/*footer*/}
              <div
                className={`${
                  isError ? "hidden" : null
                } flex items-center justify-end pb-4 pt-2`}
              >
                <Button text="close" click={handleCloseModal} />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
