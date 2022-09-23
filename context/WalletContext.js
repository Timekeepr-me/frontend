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
  const [account, setAccount] = useState();

  //use this to control error modal for wallet related actions (invalid chain)
  const [error, setError] = useState("");

  console.log(walletIsConnected, account);



  const connectWallet = async() => connectWalletHandle(setAccount, setProvider, setWalletIsConnected);
  const disconnectWallet = async() => disconnectWalletHandle(setAccount, setWalletIsConnected);


  const value = { connectWallet, disconnectWallet, account, error, provider, walletIsConnected };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
