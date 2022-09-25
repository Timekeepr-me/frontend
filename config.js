import WalletConnectProvider from "@walletconnect/web3-provider";

// const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

export const SUPPORTED_NETWORK_IDS = {
  4: "rinkeby",
  100: "gnosis",
};

export const rpcUrls = {
  // 4: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
  100: "https://rpc.gnosischain.com",
};

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        80001: "https://matic-mumbai.chainstacklabs.com",
      },
    },
  },
};

export const WEB3_MODAL_OPTIONS = {
  providerOptions,
  network: "mainnet",
  cacheProvider: true,
};

export const communityTracker_MUMBAI =
  "0xB97858592C294bBC296F7a6b9dc946F007926e43";
export const baseUserCalendar_MUMBAI =
  "0xCb84a51B76Fd78888E6867Cc6Cd8940b6Ad5d281";
export const calendarFactory_MUMBAI =
  "0x0809e1A9e476a4099Ae41997988d5bE24dE97f42";
export const userCalendar_MUMBAI = "0x85F2a6b45bCDdfdc6FBBbb055E482886BA2024C2";

export const communityTracker_POLYGON = "0X00";
export const baseUserCalendar_POLYGON = "0X00";
export const calendarFactory_POLYGON = "0X00";
export const userCalendar_POLYGON = "0X00";
