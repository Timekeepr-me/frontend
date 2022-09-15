import React from "react";

const Week = () => {
  return (
    <div className="grid grid-cols-7 border-black border-8 rounded-lg h-full bg-secondary text-white">
      <div className="flex align-center justify-center mr-2 border-r-8 border-black">
        Sun
      </div>
      <div className="flex align-center justify-center mr-2 border-r-8 border-black">
        Mon
      </div>
      <div className="flex align-center justify-center mr-2 border-r-8 border-black">
        Tue
      </div>
      <div className="flex align-center justify-center mr-2 border-r-8 border-black">
        Wed
      </div>
      <div className="flex align-center justify-center mr-2 border-r-8 border-black">
        Thu
      </div>
      <div className="flex align-center justify-center mr-2 border-r-8 border-black">
        Fri
      </div>
      <div className="flex align-center justify-center">Sat</div>
    </div>
  );
};

export default Week;
