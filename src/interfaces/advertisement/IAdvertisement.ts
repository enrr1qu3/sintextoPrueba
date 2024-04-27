export interface IAdvertisement {
    id?: number;
    startPeriod?: string;
    endPeriod?: string;
    name?: string;
    banneUrl?: string;
    destinationUrl?: string;
    isActive?: boolean;
    relevance?: boolean;
    position?: string;
    imagesOfAdvertisements?: ImagesOfAdvertisements[];
    newsSections?: NewsSection[];
}

interface NewsSection {
    id?: number;
    name?: string;
    description?: string;
    isActive?: boolean;
    showInFrontPage?: boolean;
    sectionTitleURL?: string;
    sectionFilePathUrl?: string;
    assignedColor?: string;
    order?: number;
    articleCount?: any;
}

interface ImagesOfAdvertisements {
    filePath?: string;
    filePathUrl?: string;
    advertisementId?: number;
    id?: 3,
    createdDate?: string;
    updatedDate?: string;
    isDeleted?: boolean;
}