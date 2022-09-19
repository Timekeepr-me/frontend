import React, { useContext } from "react";
import Link from "next/link";
import Button from "./Button";
import { WalletContext } from "../context/WalletContext";

export default function Navbar() {
  const context = useContext(WalletContext);

  const renderBtn = !context.account ? (
    <Button click={context.connectWallet} text="Connect" />
  ) : (
    <Button
      click={context.disconnectWallet}
      text={`${context.account.substr(0, 4)}...${context.account.substr(-3)}`}
    />
  );

  return (
    <nav className="flex flex-row items-center bg-[#535353] m-0 py-2 px-1 w-full h-1/12 font-base text-white text-center justify-between items-center">
      <div className="ml-2">
        <Link href="/">
          <img src="/Logo.png" className="h-12 w-auto hover:cursor-pointer" />
        </Link>
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="mx-6">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="mx-6">
            <Link href="/calendar">Calendar</Link>
          </li>
          <li className="mx-6">
            <a href="/">Teams</a>
          </li>
        </ul>
        <div>{renderBtn}</div>
      </div>
    </nav>
  );
}
