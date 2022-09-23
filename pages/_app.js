import "../styles/globals.css";
import { WalletProvider } from "../context/WalletContext";
import { DateProvider } from "../context/DateContext";
import { XmtpClient } from "../context/XmtpContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <DateProvider>
        <Navbar />
        <XmtpClient></XmtpClient>
        <Component {...pageProps} />
        <Footer />
      </DateProvider>
    </WalletProvider>
  );
}

export default MyApp;
