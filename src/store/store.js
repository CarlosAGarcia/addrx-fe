
import create from 'zustand'


// STORED CONSTANTS


// STORED VALUES
// const provider = null

// // STORED functions / accessors
// const setProvider = (provider, set) => {
//     // const validWallet = provider?.selectedAddress // validation of wallet
//     const userWalletAddress = provider?.selectedAddress

//     if (userWalletAddress) { // success
//         // formatting wallet here
//         // const userWalletAddress = provider?.selectedAddress

//         set(state =>
//             ({
//                 ...state,
//                 provider,
//                 userWalletAddress
//             })
//         )        
//     } else { // error
//         // error handling of wallet login
//     }
// }
// combo of state vars + their accessors
export const useStore = create(set => ({
    // provider,
    // setProvider: (provider) => setProvider(provider, set),
}))
