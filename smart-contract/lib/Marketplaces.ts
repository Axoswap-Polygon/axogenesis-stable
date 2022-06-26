import MarketplaceConfigInterface from './MarketplaceConfigInterface';

export const openSea: MarketplaceConfigInterface = {
  name: 'Rarible',
  generateCollectionUrl: (marketplaceIdentifier: string, isPolygon: boolean) => 'https://' + (isPolygon ? 'www' : '') + '.rarible.com/' + marketplaceIdentifier,
}
