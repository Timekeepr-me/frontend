import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Timekeepr</title>
        <meta name="Timekeepr" content="Decentralized calendar app" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <div>
        <Navbar />
        <LandingPage />
        <footer />
      </div>
    </React.Fragment>
  );
}
