import React, { createContext } from "react";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const value = {};
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
