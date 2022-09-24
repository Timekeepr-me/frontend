import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { providerOptions } from "../../config";
import UserCalendar from '../../artifacts/contracts/UserCalendar.sol/UserCalendar.json';
import CommunityTracker from '../../artifacts/contracts/CommunityTracker.sol/CommunityTracker.json';
import CalendarFactory from '../../artifacts/contracts/CalendarFactory.sol/CalendarFactory.json';

const web3Modal =
  typeof window !== "undefined"
    ? new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions,
      })
    : null;

const connectWalletHandle = async (
    setAccount,
    setChainId,
    setProvider,
    setSigner,
    setUserCalendar,
    setCommunityTracker,
    setCalendarFactory,
    setUserCalAddress
  ) => {
  console.log("clicked connectWallet");
  try {
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    const signer = library.getSigner();
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();
    if (accounts) setAccount(accounts[0]);
    console.log(provider, library, signer, accounts, network);

    setChainId(network.chainId);
    setSigner(signer);
    setProvider(library);

    const communityTracker = new ethers.Contract(
      process.env.NEXT_PUBLIC_COMMUNITY_TRACKER,
      CommunityTracker.abi,
      signer
    );
    setCommunityTracker(communityTracker);

    const calFactory = new ethers.Contract(
      process.env.NEXT_PUBLIC_CALENDAR_FACTORY,
      CalendarFactory.abi,
      signer
    );

    setCalendarFactory(calFactory);

    console.log('accounts[0] ', accounts[0]);
    const userCalAddr = await calFactory.getUserCalendarClone(accounts[0]);
    console.log('user cal addr ', userCalAddr);
    if (userCalAddr) {
      setUserCalendar(new ethers.Contract(
        userCalAddr,
        UserCalendar.abi,
        signer
      ));
      setUserCalAddress(userCalAddr);
    }


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
