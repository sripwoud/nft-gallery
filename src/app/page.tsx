'use client'
import { useAtom } from 'jotai'
import { collectionAtom, nftsAtom, walletAtom } from '@/atoms'
import { alchemy } from '@/lib/alchemy'
import { NFTCard } from '@/components/NftCard'

export default function Home() {
  const [wallet, setWalletAddress] = useAtom(walletAtom)
  const [collection, setCollectionAddress] = useAtom(collectionAtom)
  const [nfts, setNFTs] = useAtom(nftsAtom)

  const fetchNFTsForOwner = async () => {
    const nfts = await alchemy.nft.getNftsForOwner(wallet, {
      contractAddresses: collection === '' ? undefined : [collection],
    })
    setNFTs(nfts.ownedNfts)
  }

  const fetchNFTsForCollection = async () => {
    const { nfts } = await alchemy.nft.getNftsForContract(collection)
    setNFTs(nfts)
  }

  const fetchNFTs = async () => {
    if (collection !== '' && wallet === '') {
      await fetchNFTsForCollection()
    } else await fetchNFTsForOwner()

    // console.log(nfts)
  }

  return (
    <div className='flex flex-col items-center justify-center py-8 gap-y-3'>
      <div className='flex flex-col w-full justify-center items-center gap-y-2'>
        <input
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder='Add your wallet address'
          type='text'
          value={wallet}
        />
        <input
          onChange={(e) => setCollectionAddress(e.target.value)}
          placeholder='Add the collection address'
          type='text'
          value={collection}
        />
        <button
          className='disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5'
          onClick={() => {
            fetchNFTs()
          }}
        >
          Let&apos;s go!{' '}
        </button>
      </div>
      <div className='flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center'>
        {nfts.length
          ? nfts.map((nft) => <NFTCard key={nft.tokenId} nft={nft} />)
          : null}
      </div>
    </div>
  )
}
