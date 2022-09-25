import { WalletContext } from "./WalletContext";
import { createContext, useContext, useEffect, useState } from "react";
import { Client } from "@xmtp/xmtp-js";

const XmtpContext = createContext();




const secondAddress = "0x52F93E794a3A939aaa3152d7D31Ed00EFD6e094C";

function XmtpProvider({ children }) {
  const walletContext = useContext(WalletContext);

  const [xmtpClient, setXmtpClient] = useState();
  const [conversations, setConversations] = useState();


  const provider = walletContext.provider;
  const account = walletContext.account;


  //first, we need to instantiate the client. 
  useEffect( () => {
    getXmtpClient(provider, account, setXmtpClient, setConversations);
  }, [account])





  //we need to receive incoming booking descriptions.

  //we need to send new booking descriptions.






  const value = {

  }




  return (
    <XmtpContext.Provider value={value}>{children}</XmtpContext.Provider>
  );

}


//creates client, and loads existing conversations.
async function getXmtpClient(provider, account, setXmtpClient, setConversations) {

  if(!account)return;

  const xmtp = await Client.create(provider);
  setXmtpClient(xmtp);



  const newConversation = await xmtp.conversations.newConversation(
    secondAddress
  );

  newConversation.send(`Hey, let's have a quick meeting! Here's my private meeting link: https://emergence-gamma.vercel.app/room/1`);

  const conversations = await xmtp.conversations.list();
  setConversations(conversations);

  console.log(conversations)

  const messages = await conversations[0].messages();

  console.log(messages[1]);

}




export { XmtpProvider, XmtpContext };
