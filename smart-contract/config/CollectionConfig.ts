import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  mainnet: Networks.polygon,
  testnet: Networks.polygonTestnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'AxoGenesis',
  tokenName: 'AxoGenesis',
  tokenSymbol: 'AxG',
  hiddenMetadataUri: 'ipfs://process.env.COLLECTION_URI_PREFIX',
  maxSupply: 3333,
  whitelistSale: {
    price: 50,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 50,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 50,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x162A995868546acC36fe2a6038B081CFfD87c5E0",
  marketplaceIdentifier: 'AxoGenesis',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
