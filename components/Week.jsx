import React from "react";

const Week = () => {
  let day = 1;
  return (
    <div className="grid grid-cols-7 border-black border-8 rounded-xl h-full bg-secondary text-white mr-4 mt-4 text-xl">
      <div className="flex align-center justify-center border-r-8 border-black p-2 hover:bg-ternary hover:text-black">
        <h3>Mon</h3>
      </div>
      <div className="flex align-center justify-center border-r-8 border-black p-2 hover:bg-ternary hover:text-black">
        <h3>Tue</h3>
      </div>
      <div className="flex align-center justify-center border-r-8 border-black p-2 hover:bg-ternary hover:text-black">
        <h3>Wed</h3>
      </div>
      <div className="flex align-center justify-center border-r-8 border-black p-2 hover:bg-ternary hover:text-black">
        <h3>Thu</h3>
      </div>
      <div className="flex align-center justify-center border-r-8 border-black p-2 hover:bg-ternary hover:text-black">
        <h3>Fri</h3>
      </div>
      <div className="flex align-center justify-center border-r-8 border-black p-2 hover:bg-ternary hover:text-black">
        <h3>Sat</h3>
      </div>
      <div className="flex align-center justify-center p-2 hover:bg-ternary hover:text-black">
        <h3>Sun</h3>
      </div>
    </div>
  );
};

export default Week;
