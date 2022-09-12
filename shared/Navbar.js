import React from "react";

export default function Navbar() {
  return (
    <nav class="flex flex-row justify-between items-center bg-[#535353] m-0 w-full h-1/12 font-medium text-center text-white">
      <div class="flex flex-row">
        <img src="/Logo.png" style={{ height: "3rem", width: "auto" }} />
      </div>
      <div class="flex flex-row inline-block">
        <a href="#">Dashboard</a>
      </div>
      <div class="flex flex-row inline-block">
        <a href="#">Calendar</a>
      </div>
      <div class="flex flex-row inline-block">
        <a href="#">Teams</a>
      </div>
      <div class="flex flex-row inline-block text-xl">
        <button onClick={null}>Connect</button>
      </div>
    </nav>
  );
}
