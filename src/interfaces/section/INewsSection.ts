import { INewsArticle } from "../article/INewsArticle";

export interface INewsSection {
    articles?: INewsArticle[]
    description?: string;
    isActive?: boolean;
    name?: string;
    sectionId?: number;
}