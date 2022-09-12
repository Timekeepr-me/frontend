import React, { createContext } from "react";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const handleConnectWallet = () => {
    console.log("clicky");
  };

  const value = { handleConnectWallet };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
