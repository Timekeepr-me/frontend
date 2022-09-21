import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { WEB3_MODAL_OPTIONS } from "../config";

const WalletContext = createContext();

const web3Modal =
  typeof window !== "undefined" ? new Web3Modal(WEB3_MODAL_OPTIONS) : null;

const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [error, setError] = useState("");

  const connectWallet = async () => {
    if (!web3Modal) return;
    try {
      const provider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      console.log(ethersProvider);
      const signerAddress = ethersProvider
        .getSigner()
        .getAddress()
        .toLowerCase();
      // const accounts = await ethersProvider.listAccounts();
      const network = await ethersProvider.getNetwork();
      if (signerAddress) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const disconnectWallet = async () => {
    web3Modal.clearCachedProvider();
    setAccount();
    setChainId();
    setProvider();
  };

  const value = { connectWallet, disconnectWallet, account, error };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
