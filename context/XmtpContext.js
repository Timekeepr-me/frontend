import { WalletContext } from "./WalletContext";
import { createContext, useContext } from "react";
import { Client } from "@xmtp/xmtp-js";

const XmtpContext = createContext();

function XmtpProvider({ children }) {
  const walletContext = useContext(WalletContext);


  const value = {

  }


  return (
    <XmtpContext.Provider value={value}>{children}</XmtpContext.Provider>
  );

}

export { XmtpProvider, XmtpContext };
