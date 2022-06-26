import MarketplaceConfigInterface from './MarketplaceConfigInterface';

export const openSea: MarketplaceConfigInterface = {
  name: 'rarible',
  generateCollectionUrl: (marketplaceIdentifier: string, isPolygon: boolean) => 'https://' + (isPolygon ? 'www' : '') + '.rarible.com/' + marketplaceIdentifier,
}
