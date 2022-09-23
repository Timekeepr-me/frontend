import Head from "next/head";
import "../styles/globals.css";
import { WalletProvider } from "../context/WalletContext";
import { DateProvider } from "../context/DateContext";
import { XmtpClient } from "../context/XmtpContext";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <DateProvider>
        <Head>
          <title>Timekeepr</title>
          <meta name="Timekeepr" content="Decentralized calendar app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        <Navbar />
        <XmtpClient></XmtpClient>
        <Component {...pageProps} />
      </DateProvider>
    </WalletProvider>
  );
}

export default MyApp;
