import React, { createContext, useState } from "react";
import { connectWalletHandle, disconnectWalletHandle } from "./wallet-utils/walletActions";



const WalletContext = createContext();



const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [error, setError] = useState("");



  const connectWallet = async() => connectWalletHandle(setAccount, setChainId, setProvider);
  const disconnectWallet = async() => disconnectWalletHandle(setAccount, setChainId);

  const value = { connectWallet, disconnectWallet, account, error };



  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
