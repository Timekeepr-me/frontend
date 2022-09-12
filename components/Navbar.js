import React, { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

export default function Navbar() {
  const context = useContext(WalletContext);
  return (
    <nav className="flex flex-row items-center bg-[#535353] m-0 p-1 w-full h-1/12 font-base text-white text-center justify-between items-center">
      <div className="ml-2">
        <img src="/Logo.png" style={{ height: "2.5rem", width: "auto" }} />
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="mx-6">
            <a href="#">Dashboard</a>
          </li>
          <li className="mx-6">
            <a href="#">Calendar</a>
          </li>
          <li className="mx-6">
            <a href="#">Teams</a>
          </li>
        </ul>
        <div>
          <button
            text="Connect"
            onClick={context.handleConnectWallet}
            className="flex items-center justify-center h-5/6 py-1 px-4 mx-8 my-auto text-5xl rounded-lg text-ternary bg-buttonPrimary shadow-yellow w-auto text-lg active:translate-y-[2px]"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
