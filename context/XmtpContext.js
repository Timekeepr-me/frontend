import { WalletContext } from "./WalletContext";
import { createContext, useContext } from "react";
import { Client } from "@xmtp/xmtp-js";

const XmtpContext = createContext();

function XmtpClient({ children }) {
  const walletContext = useContext(WalletContext);
  const test = walletContext;
  // console.log(`test: ${walletContext.account}`);
  return <div></div>;
}

export { XmtpClient, XmtpContext };
