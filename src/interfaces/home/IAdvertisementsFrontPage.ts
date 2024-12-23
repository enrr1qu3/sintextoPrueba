export interface IAdvertisementsFrontPage {
    advertisementMainAdSpace?: AdvertisementMainAdSpace,
    advertisementSideAdSpaces?: any[],
    twoAdvertisement?: AdvertisementMainAdSpace,
    threeAdvertisement?: AdvertisementMainAdSpace
}

interface AdvertisementMainAdSpace {
    id?: number;
    startPeriod?: string;
    endPeriod?: string;
    name?: string;
    banneUrl?: string;
    destinationUrl?: string;
    isActive?: boolean;
    relevance?: boolean;
    position?: string;
    imagesOfAdvertisements?: any[];
}