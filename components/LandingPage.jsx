import React, { useContext } from "react";
import Link from "next/link";
import Button from "./Button";
import { WalletContext } from "../context/WalletContext";
import CalendarsList from './CalendarsList';

export default function LandingPage() {
  const { account, connectWallet } = useContext(WalletContext);

  const createCalendar = async () => {
    
  }

  return (
    <div className="flex flex-col items-start justify-evenly h-[84vh] w-full p-20 border-black border-2 text-white">
      {account ? (
        <h1>Create your on-chain calender today...</h1>
      ) : (
        <h1>Please connect your wallet to continue</h1>
      )}

      {account ? (
          <div className="flex flex-col">
            <Link href="/calendar">
              <a>
                <Button text="Enter App" className="text-5xl" />
              </a>
            </Link>
            <button onClick={createCalendar} className="">create your calendar</button>
            <CalendarsList />
          </div>
      ) : (
        <Button
          text="Connect"
          style={{ fontSize: "50px" }}
          click={connectWallet}
        />
      )}
    </div>
  );
}
