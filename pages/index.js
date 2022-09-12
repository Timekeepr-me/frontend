import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

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
        <footer className={styles.footer}></footer>
      </div>
    </React.Fragment>
  );
}
