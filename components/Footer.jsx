import React, { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import Link from "next/link";

const Footer = () => {
  const context = useContext(WalletContext);
  return (
    <footer className="flext flex-col align-center justify-center mx-auto text-center bg-[#2f2f2f] text-white px-5 py-10">
      {context.account ? (
        <p className="text-2xl font-heavier">
          <Link href="/dashboard">Dashboard</Link> |{" "}
          <Link href="/calendar">Calendar</Link> |{" "}
          <Link href="/teams">Teams</Link>
        </p>
      ) : null}
      <img src="/Logo.png" style={{ width: "4rem", margin: "1rem auto" }} />
      <p className="text-lg opacity-75 font-guild">
        Built by{" "}
        <a href="https://www.raidguild.org/" className="underline">
          Raid Guild
        </a>
      </p>
    </footer>
  );
};

export default Footer;
