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
      <div className="flex flex-col justify-around content-evenly h-[50vh] md:h-[84vh] w-full md:w-1/3 p-20 text-center text-white">
        <h1 className="mb-10">
          Schedule Appointments, Set Your Own Rates, Get Paid
        </h1>
        {context.account ? (
          <h2>Create your on-chain calender today...</h2>
        ) : (
          <h2>Connect your wallet to enter app</h2>
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
        <div className="flex flex-row bg-ternary p-6 rounded-xl border-black border-2">
          <div className="flex flex-col justify-center w-1/3 ">
            <h3 className="text-center">Key Features:</h3>
            <ul className="mt-4">
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1 w-4" /> Set availability
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1" /> Schedule appointments
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1" /> Set hourly rate
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1" /> Create your own
                calendar
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1" />
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
        <div className="flex flex-row bg-ternary p-6 rounded-xl border-black border-2 my-6">
          <div className="flex w-2/3">
            <img src="/month.png" alt="screenshot" />
          </div>
          <div className="flex flex-col justify-center w-1/3 ml-2">
            <h3 className="text-center">
              Why use Timekeepr instead of competitors like Calendly?
            </h3>
            <ul className="list-none mt-4 text-left">
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1" />
                Timekeepr is free to use, with the exception of network
                transaction fees
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1" />
                Set your rates and charge your clients. This is made simple
                thanks to SuperFluid integration. Timekeepr doesn't take a cut
                of your fees
              </li>
              <li className="flex items-start align-center">
                <BsCalendarCheck className="mr-2 mt-1" />
                Decentralization - Your schedule and appointments are important.
                Timekeepr will never store your data and sell it to 3rd party
                advertisers
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
