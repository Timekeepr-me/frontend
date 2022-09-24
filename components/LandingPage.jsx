import React, { useContext } from "react";
import Link from "next/link";
import Button from "./Button";
import { WalletContext } from "../context/WalletContext";
import CalendarsList from './CalendarsList';
import CreateCalendar from './CreateCalendar';

export default function LandingPage() {
  const { account, connectWallet } = useContext(WalletContext);

  return (
    <div className="flex flex-col items-start justify-evenly h-[84vh] w-full p-20 border-black border-2 text-white">
      {account ? (
        <h1>Create your on-chain calender today...</h1>
      ) : (
        <h1>Please connect your wallet to continue</h1>
      )}

      {account ? (
          <div className="flex flex-col">
            <CreateCalendar />
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
