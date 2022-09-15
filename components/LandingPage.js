import React, { useContext } from "react";
import Link from "next/link";
import Button from "./Button";
import { WalletContext } from "../context/WalletContext";

export default function LandingPage() {
  const context = useContext(WalletContext);

  console.log(context.account);

  return (
    <div className="flex flex-col items-start justify-evenly h-[84vh] w-full p-20 border-black border-2 text-white">
      {context.account ? (
        <h1>Create your on-chain calender today...</h1>
      ) : (
        <h1>Please connect your wallet to continue</h1>
      )}

      {context.account ? (
        <Button text="Enter App" click={null} />
      ) : (
        <Button text="Connect" click={context.connectWallet} />
      )}
    </div>
  );
}
