import { Nft, OwnedNft } from 'alchemy-sdk'
import Image from 'next/image'

export const NFTCard = ({ nft }: { nft: OwnedNft | Nft }) => {
  return (
    <div className='w-2/3 flex flex-col '>
      <div className='rounded-md'>
        <Image
          alt='nft-card'
          className='object-cover h-128 w-full rounded-t-md'
          height='200'
          src={nft.media[0].gateway}
          width='200'
        />
      </div>
      <div className='flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 '>
        <div className=''>
          <h2 className='text-xl text-gray-800'>{nft.title}</h2>
          <p className='text-gray-600'>Id: {nft.tokenId}</p>
          <p className='text-gray-600'>{nft.contract.address}</p>
        </div>

        <div className='flex-grow mt-2'>
          <p className='text-gray-600'>{nft.description}</p>
        </div>
      </div>
    </div>
  )
}
