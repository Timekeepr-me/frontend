import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "../config";

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
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [error, setError] = useState("");

  const connectWallet = async () => {
    console.log("clicked connectWallet");
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      // const signer = await library.getSigner();
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
      console.log(account, chainId);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const refreshState = () => {
    setAccount();
    setChainId();
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  const value = { connectWallet, disconnectWallet, account, error };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
