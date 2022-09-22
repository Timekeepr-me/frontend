import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "../config";
import UserCalendar from '../artifacts/contracts/UserCalendar.sol/UserCalendar.json';

const WalletContext = createContext();

const web3Modal =
  typeof window !== "undefined"
    ? new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions,
      })
    : null;

const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [error, setError] = useState("");
  const [userCalendar, setUserCalendar] = useState();

  const connectWallet = async () => {
    console.log("clicked connectWallet");
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      if (accounts) setAccount(accounts[0]);
      console.log('setting chainId ', network.chainId);
      setChainId(network.chainId);
      
      setUserCalendar(new ethers.Contract(
        process.env.NEXT_PUBLIC_USER_CALENDAR,
        UserCalendar.abi,
        library.getSigner()
      ));

    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    setAccount();
    setChainId();
  };

  const value = {
    connectWallet,
    disconnectWallet,
    account,
    error,
    userCalendar
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
