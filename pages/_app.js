import "../styles/globals.css";
import { WalletProvider } from "../context/WalletContext";
import { DateProvider } from "../context/DateContext";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <DateProvider>
        <Navbar />
        <Component {...pageProps} />
      </DateProvider>
    </WalletProvider>
  );
}

export default MyApp;
