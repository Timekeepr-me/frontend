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
        <XmtpProvider>
          <Navbar/>
          <Component {...pageProps} />
          <Footer />
        </XmtpProvider>
      </DateProvider>
    </WalletProvider>
  );
}

export default MyApp;
