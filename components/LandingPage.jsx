import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
import { WalletContext } from "../context/WalletContext";
import { BsCalendarCheck } from "react-icons/bs";

export default function LandingPage() {
  const context = useContext(WalletContext);
  const router = useRouter();

  const handleEnterApp = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row text-white">
      {/* left side div */}
      <div className="flex flex-col  md:h-[84vh] w-full md:w-1/3 p-20 text-center text-white">
        <h1 className="mb-10">
          Schedule Appointments, Set Your Own Rates, Get Paid
        </h1>
        {context.account ? (
          <h2 className="mb-10">Create your on-chain calender today...</h2>
        ) : (
          <h2 className="mb-10">Connect your wallet to enter app</h2>
        )}

        {context.account ? (
          <Button
            text="Enter App"
            style={{ fontSize: "50px" }}
            click={handleEnterApp}
          />
        ) : (
          <Button
            text="Connect"
            style={{ fontSize: "50px" }}
            click={context.connectWallet}
          />
        )}
      </div>
      {/* Right side div */}
      <div className="flex flex-col items-center justify-start md:w-2/3 px-2 mt-10 text-black">
        {/* box 1 */}
        <div className="flex flex-row bg-white px-6 py-4 rounded-xl border-black border-2">
          <div className="flex flex-col justify-center w-1/3 ">
            <h3 className="text-center">Key Features:</h3>
            <ul className="mt-4">
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 w-4 bg-ternary" /> Set
                availability
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 bg-ternary" /> Schedule
                appointments
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 bg-ternary" /> Set hourly
                rate
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 bg-ternary" /> Create your
                own calendar
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 bg-ternary" />
                Group meetings
              </li>
            </ul>
          </div>
          <div className="flex w-2/3">
            <img
              src="/availability.png"
              alt="daily view screenshot"
              className="w-full"
            />
          </div>
        </div>
        {/* box 2 */}
        <div className="flex row bg-white px-6 py-4 rounded-xl border-black border-2 my-5 w-full">
          <div className="flex flex-col justify-center ml-2 ">
            <h3 className="text-center">
              Why use Timekeepr instead of competitors?
            </h3>
            <ul className="list-none mt-4 text-left">
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 bg-ternary" />
                Timekeepr is free to use. Only pay network transaction fees.
                (You can check current Polygon gas fees on
                <a
                  href="https://polygonscan.com/gastracker"
                  target="_"
                  style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                    marginLeft: "0.25em",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  PolyScan
                </a>
                ).
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 bg-ternary" />
                Set your rates and charge your clients. This is made simple
                thanks to SuperFluid integration. Timekeepr doesn't take a cut
                of your fees
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 bg-ternary" />
                Decentralization - Your schedule and appointments are important.
                Timekeepr will never store your data and sell it to 3rd party
                advertisers
              </li>
            </ul>
          </div>
        </div>
        {/* box 3 */}
        <div className="flex flex-col bg-white px-6 py-4 rounded-xl border-black border-2 mb-14 w-full">
          <h3 className="text-center m-auto">How to use Timekeepr</h3>
          <ol className="list-decimal list-inside mt-4">
            <li>
              Click the Connect button and connect with MetaMask or any wallet
              supported by WalletConnect
            </li>
            <li>
              Connect your wallet to the{" "}
              <a
                href="http://polygon.network"
                target="_"
                className="underline font-bold"
              >
                Polygon
              </a>{" "}
              network. If you need to add a Polygon RPC to your wallet (such as
              MetaMask), you can visit{" "}
              <a
                href="https://chainlist.org/chain/137"
                target="_"
                className="underline font-bold"
              >
                ChainList
              </a>
            </li>
            <li>Enter Timekeepr</li>
            <li>Click Dashboard to view your schedule and set availability</li>
            <li>Click Calendar to view date range by day, week, or month</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
