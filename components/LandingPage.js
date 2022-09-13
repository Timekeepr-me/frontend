import React, { useContext } from "react";
import Button from "./Button";
import styles from "../styles/Home.module.scss";
import { WalletContext } from "../context/WalletContext";

export default function LandingPage() {
  const context = useContext(WalletContext);

  console.log(context.account);

  return (
    <div className="flex flex-col items-start justify-evenly h-[84vh] w-full p-20 border-black border-2">
      {context.account ? (
        <h1>Create your on-chain calender today</h1>
      ) : (
        <h1>Please connect your wallet to continue</h1>
      )}

      <Button text="Enter App" />
    </div>
  );
}
