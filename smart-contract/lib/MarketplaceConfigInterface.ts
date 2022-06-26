export default interface MarketplaceConfigInterface {
  name: string;
  generateCollectionUrl: (marketplaceIdentifier: any, isPolygon: boolean) => string;
};
