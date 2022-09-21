import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { providerOptions } from "../../config";



const web3Modal =
  typeof window !== "undefined"
    ? new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions,
      })
    : null;




const connectWalletHandle = async (setAccount, setChainId) => {
    console.log("clicked connectWallet");
    try {
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();
        if (accounts) setAccount(accounts[0]);
        setChainId(network.chainId);
        // console.log(account, chainId);
    } catch (error) {
        console.log(error);
    }
};





const disconnectWalletHandle = async (setAccount, setChainId) => {
    await web3Modal.clearCachedProvider();
    setAccount();
    setChainId();
};




export { connectWalletHandle, disconnectWalletHandle };