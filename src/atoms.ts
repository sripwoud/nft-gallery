import { atom } from 'jotai'
import { Nft, OwnedNft } from 'alchemy-sdk'

export const walletAtom = atom('')
export const collectionAtom = atom('')
export const nftsAtom = atom<OwnedNft[] | Nft[]>([])
