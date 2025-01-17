import injectedModule from '@web3-onboard/injected-wallets'
import torusModule from '@web3-onboard/torus'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'

import { init } from '@web3-onboard/react'

// Example key • Replace with your infura key
const INFURA_KEY = '2996ff3d1a1142689324a8341cb75c68'

const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here
  ],
  filter: {
    // mapping of wallet labels to filter here
  }
})

const walletLink = coinbaseModule()



const walletConnect = walletConnectModule({
  handleUri: (uri: any) => console.log(uri),
  projectId: 'dd10a4c9379fa9e4fd7ad8387537c992',
  dappUrl: 'https://www.onboard.blocknative.com'
})

const torus = torusModule()


export default init({
  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [
    injected,
    walletLink,
    torus,
    walletConnect
  ],
  // An array of Chains that your app supports
  chains: [
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: '0x1',
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: 'evm',
      // the native token symbol, eg ETH, BNB, MATIC
      token: 'ETH',
      // used for display, eg Ethereum Mainnet
      label: 'Ethereum Mainnet',
      // used for network requests
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`
    },
    {
      id: 42161,
      token: 'ARB-ETH',
      label: 'Arbitrum One',
      rpcUrl: 'https://rpc.ankr.com/arbitrum'
    },
    {
      id: '0xa4ba',
      token: 'ARB',
      label: 'Arbitrum Nova',
      rpcUrl: 'https://nova.arbitrum.io/rpc'
    },
    {
      id: '0x89',
      token: 'MATIC',
      label: 'Matic Mainnet',
      rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    },
    {
      id: '0xa4ec',
      token: 'ETH',
      label: 'Celo',
      rpcUrl: 'https://1rpc.io/celo'
    },
    {
      id: 666666666,
      token: 'DEGEN',
      label: 'Degen',
      rpcUrl: 'https://rpc.degen.tips'
    }
  ],
  appMetadata: {
    // The name of your dApp
    name: 'Blocknative',
    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    icon: '<svg></svg>',
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: '<svg></svg>',
    // The description of your app
    description: 'Demo app for Onboard V2',
    // The url to a getting started guide for app
    gettingStartedGuide: 'http://mydapp.io/getting-started',
    // url that points to more information about app
    explore: 'http://mydapp.io/about',
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: 'MetaMask',
        // link to download wallet
        url: 'https://metamask.io'
      },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    }
  }
  // example customising copy
  // i18n: {
  //   en: {
  //     connect: {
  //       selectingWallet: {
  //         header: 'custom text header'
  //       }
  //     }
  //   }
  // }
})
