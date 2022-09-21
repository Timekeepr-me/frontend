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

const connectWalletHandle = async (setAccount, setChainId, setProvider) => {
  console.log("clicked connectWallet");
  try {
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    const signer = library.getSigner();
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();
    if (accounts) setAccount(accounts[0]);

    setChainId(network.chainId);
    setSigner(signer);
    setProvider(library);

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

const signAndExecuteHandle = async (
  provider,
  contractAddress,
  contractAbi,
  contractMethod,
  contractCalldata
) => {
  const signer = provider.getSigner();
  const contractObject = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  const transactionReceipt = await contractObject[contractMethod](
    contractCalldata
  );

  const result = await transactionReceipt.wait();
};

export { connectWalletHandle, disconnectWalletHandle, signAndExecuteHandle };
