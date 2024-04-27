export interface INewsArticle {
    id?: number;
    newsSectionId?: number;
    datePosted?: string;
    dateApproved?: string;
    adminApprovalId?: number;
    status?: string;
    title?: string;
    content?: any;
    contentVideoURL?: string;
    subtitle?: string;
    subtitleVideo?: string;
    isInterestArticle?: boolean;
    isFrontPageArticle?: boolean;
    isVideoArticle?: boolean;
    articleBannerFilePath?: string;
    articleBannerImageURL?: string;
    schedulePostDate?: string;
    articleLocationDescription?: string;
    isApproved?: boolean;
    isActive?: boolean;
    articleUrlTitle?: string;
    createdDate?: string;
    newsTags?: IArticleTag[],
    authors?: IAuthor[],
    categories?: ICategory[],
    countries?: ICountry[],
    states?: IState[],
    municipalities?: IMunicipality[],
    imagesOfArticles?: IArticleImage[]
}

interface IArticleTag {
    newTagId?: number;
}

interface IAuthor {
    authorId?: number;
}

interface ICategory {
    categoryId?: number;
}

interface ICountry {
    countryId?: number;
}

interface IState {
    stateId?: number;
}

interface IMunicipality {
    municipalityId?: number;
}

interface IArticleImage {
    filePath?: string;
    filePathurl?: string;
    articleId?: number;
    id?: number;
    createdDate?: string;
    updatedDate?: string;
    isDeleted?: boolean;
}