import React, { createContext, useState } from "react";
import {
  connectWalletHandle,
  disconnectWalletHandle,
} from "./wallet-utils/walletActions";

const WalletContext = createContext();

/*
  Components that use WalletContext:

    - Navbar
    - LandingPage
    - Footer



*/

const WalletProvider = ({ children }) => {
  const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  //use this to control error modal for wallet related actions (invalid chain)
  const [error, setError] = useState("");
  console.log(walletIsConnected);

  const connectWallet = async () =>
    connectWalletHandle(
      setAccount,
      setChainId,
      setSigner,
      setProvider,
      setWalletIsConnected
    );
  const disconnectWallet = async () =>
    disconnectWalletHandle(setAccount, setWalletIsConnected);

  const value = {
    walletIsConnected,
    setWalletIsConnected,
    provider,
    signer,
    account,
    chainId,
    error,
    connectWallet,
    disconnectWallet,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
