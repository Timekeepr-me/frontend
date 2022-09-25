import Head from "next/head";
import "../styles/globals.css";
import { WalletProvider } from "../context/WalletContext";
import { DateProvider } from "../context/DateContext";
import { XmtpProvider } from "../context/XmtpContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <XmtpProvider>
          <Component {...pageProps} />
        </XmtpProvider>
        <Footer />
      </DateProvider>
    </WalletProvider>
  );
}

export default MyApp;
