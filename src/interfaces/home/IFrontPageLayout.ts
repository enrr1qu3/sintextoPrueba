export interface IFrontPageLayout {
    id: number;
    mainArticleBannerFilePathUrl: string;
    mainArticleBannerFilePath: string;
    mainArticleURLTitle: string;
    isPublished: boolean,
    newArticleId: number,
    naInterestArticle: InterestArticle[];
    naTopBannersArticle: TopBannerArticle[];
    mainAdSpaceId: number;
    advertisementMainAdSpace: AdvertisementMainAdSpace;
    newsSections: NewsSection[];
    twoAdvertisement: AdvertisementMainAdSpace;
}

interface InterestArticle {
    id: number;
    title: string;
    articleBannerFilePath: string;
    articleBannerImageURL: string;
}

interface TopBannerArticle {
    id: number;
    title: string;
    articleBannerFilePath: string;
    articleBannerImageURL: string;
    articleUrlTitle: string;
}

interface NewsSection {
    id: number;
    name: string;
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