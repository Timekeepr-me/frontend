import React from "react";
import Head from "next/head";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mirza&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>Timekeepr</title>
        <meta name="Timekeepr" content="Decentralized calendar app" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <div className="bg-gradient-to-b from-primary to-ternary">
        <LandingPage />
        <Footer />
      </div>
    </React.Fragment>
  );
}
