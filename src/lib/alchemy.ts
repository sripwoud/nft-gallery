import { Network, Alchemy } from 'alchemy-sdk'

export const alchemy = new Alchemy({
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
})

// async function t() {
//   return await alchemy.nft.getNftsForOwner("0x18c7766a10df15df8c971f6e8c1d2bba7c7a410b")
// }
