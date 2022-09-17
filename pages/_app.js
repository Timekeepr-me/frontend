import "../styles/globals.css";
import { WalletProvider } from "../context/WalletContext";
import { DateProvider } from "../context/DateContext";

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <DateProvider>
        <Component {...pageProps} />
      </DateProvider>
    </WalletProvider>
  );
}

export default MyApp;
