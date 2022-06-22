import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
// import Authereum from "authereum";

/*
    Connects user wallet with site. Whatever the provider may be
*/
export const ConnectToWallet = async ({ onSuccess, onDisconnect, onAccountsChanged, onChainChanged, onErr }) => {
    try {
        console.log('ConnectToWallet', { onSuccess, onDisconnect, onAccountsChanged, onChainChanged, onErr })

        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner()
        const geta = await signer.getAddress()
            .then((address) => {
                console.log('address', address)
                onSuccess(address)
            })
        console.log({ signer, provider, geta })

        await signer.getBalance()
            .then((monies) => {
                console.log('monie 1', monies._hex)

                console.log('monies 2', BigNumber.from(monies._hex))
            })
    
        await signer.signMessage('butt')
            .then((res) => console.log('res', res))

    } catch (error) {
        
    }



    // try {
        
    //     // const Torus = (await import('@toruslabs/torus-embed')).default
    //     // const Authereum = (await import('authereum')).default
    //     // const Fortmatic = (await import('fortmatic')).default

    //     // const MewConnect = (await import('@myetherwallet/mewconnect-web-client')).default
        
    //     // const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default
    //     // const MewConnect = (await import('@myetherwallet/mewconnect-web-client')).default

    //     // const ethProvider = (await import('eth-provider')).default


    //     // const authereum = { package: Authereum }
    //     // const torus = { package: Torus }
    //     // const frame = { package: ethProvider }
    //     // const walletconnect = {
    //     //     package: WalletConnectProvider, // required
    //     //     options: {
    //     //       infuraId: "8be74eed589644faa145a52175374810" // required
    //     //     }
    //     //   }
    //     // const walletconnect = new WalletConnectProvider({
    //     //     infuraId: "8be74eed589644faa145a52175374810", // Required
    //     //   });
    //     // const mewconnect = {
    //     //     package: MewConnect, // required
    //     //     options: {
    //     //       infuraId: "8be74eed589644faa145a52175374810" // required
    //     //     }
    //     // } 
    //     const binanceProviderOptions = {
    //         binancechainwallet: {
    //           package: true
    //         }
    //       };

    //     // const provider = new WalletConnectProvider({
    //     //     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    //     //   });
    //     const customNetworkOptions = {
    //         rpcUrl: 'https://rpc-mainnet.maticvigil.com',
    //         chainId: 137
    //     }
    //     // const fortmatic = {
    //     //     fortmatic: {
    //     //       package: Fortmatic, // required
    //     //       options: {
    //     //         key: "pk_test_096C8E93736A09D9", // required,
    //     //         network: customNetworkOptions // if we don't pass it, it will default to localhost:8454
    //     //       }
    //     //     }
    //     //   };
    //       const fortmatic = new Fortmatic('pk_test_096C8E93736A09D9');
    //     //   const pv = fortmatic.getProvider()
    //     //   console.log('fortmatic.getProvider IS ', pv)
    //     // const authereum = {
    //     // authereum: {
    //     //     package: Authereum // required
    //     // }
    //     // };
    //     /* See Provider Options Section */
    //     // wallets provided/supported
    //     const providerOptions = {
    //         // authereum,
    //         // torus,
    //         // frame,
    //         // walletconnect
    //         // mewconnect,
    //         binanceProviderOptions,
    //         fortmatic
    //     };
    //     console.log('providerOptions ->', { providerOptions })

    //     // Settings for modal
    //     const web3Modal = new Web3Modal({
    //         network: "mainnet", // optional
    //         cacheProvider: false, // optional - keeps preference of wallet provider - only shows this (annoying on metamask)
    //         providerOptions // required
    //     });


    //     const instance = await web3Modal.connect();

    //     const provider = new ethers.providers.Web3Provider(instance);
    //     const signer = provider.getSigner();

    //     console.log("SIGNED ON WITH Account:", await signer.getAddress());
    //     // const provider = await web3Modal.connect().catch(err => console.log('errrr', err))
    //     // const web3 = new Web3(provider);
    //     // const accs = await web3.eth.getAccounts(console.log)
    //     // const add = provider.selectedAddress
    //     console.log('provider', { provider, signer })
        
    //     // Subscribe to accounts change
    //     // accounts: string[]
    //     provider.on("accountsChanged", (accounts) => {
    //         console.log('provider.onaccountsChanged', accounts);
    //         if (accounts.length === 0) onDisconnect()
    //         else onAccountsChanged(accounts)
    //     });
        
    //     // Subscribe to chainId change
    //     // chainId: number
    //     provider.on("chainChanged", (chainId) => {
    //         console.log('provider.chainChanged', chainId);
    //         onChainChanged(chainId)
    //     });
        
    //     // Subscribe to provider connection
    //     // info: { chainId: number }
    //     provider.on('connect', (info) => {
    //         console.log('provider.connect', info);
    //         onSuccess(info)
    //     });
        
    //     // Subscribe to provider disconnection
    //     // error: { code: number; message: string }
    //     provider.on("disconnect", (error) => {
    //         console.log('provider.disconnect', error);
    //         onDisconnect(error)
    //     });

    //     if (provider) onSuccess(provider)
    // } catch (error) {
    //     console.log('error connecting to wallet', error)
    //     if (onErr) onErr(error)
    // }
}

// export const ConnectToWallet = (e) => {
//     console.log(e)
// }