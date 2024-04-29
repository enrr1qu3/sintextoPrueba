import { axiosInstance } from "./axios";
import { headers } from "./headers-cache";

const getQueryStringParams = (params: Object) => {
    return '?' + Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
}

export const getNewsTagsById = async (idTags: any) => {
    try {
        const queryParams = '?' + idTags.map((item: any) => {
            return `request=${item.newTagId}`
        }).join('&');

        const response = await axiosInstance.get(`/PublicNews/GetNewsTagsById${queryParams}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getAuthorById = async (idAuthor: any) => {
    try {
        const response = await axiosInstance.get(`/PublicNews/GetAuthorById?request=${idAuthor}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getAuthorSocialsMedia = async (idAuthor: any) => {
    try {
        const response = await axiosInstance.get(`/PublicNews/GetAuthorSocials/${idAuthor}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getNewsSection = async (idSections: any) => {
    try {
        const queryParams = '?' + idSections.map((item: any) => {
            return `Sections=${item.id}`
        }).join('&');

        const response = await axiosInstance.get(`/PublicNews/GetSectionNews${queryParams}&OnlyFrontPageNews=true`, headers);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getNewsArticlesBySectionName = async (sectionName: string) => {
    try {
        const response = await axiosInstance.get(`/PublicNews/GetNewsBySectionName?Sections=${sectionName}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getArticleByTitle = async (articleTitle: string) => {
    try {
        const response = await axiosInstance.get(`/PublicNews/GetArticleByTitle/${articleTitle}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data.data;
    } catch (error) {
        return error;
    }
}

export const getNewsArticlesByTag = async (params?: { NameTag?: string, PageSize?:number, PageNumber?:number }) => {

    let queryParams = '';
    if (params != null) {
        queryParams = getQueryStringParams(params);
    }    
    try {
        const response = await axiosInstance.get(`/PublicNews/GetArticleFilterByTag${queryParams}`);
         if (response.status !== 200) { throw new Error('Error en la peticion') }
        return response.data
    } catch (error) {
        return error;
    }

}

export const getSearch = async (params?: { NameSearch?: string, PageSize?:number, PageNumber?:number })  => {
   let queryParams = '';
    if (params != null) {
        queryParams = getQueryStringParams(params);
    }    
    try {
        const response = await axiosInstance.get(`/PublicNews/GetSearch${queryParams}`);
         if (response.status !== 200) { throw new Error('Error en la peticion') }
        return response.data
    } catch (error) {
        return error;
    }
}

export const getSocialMediaArticles = async () => {
    try {
        const response = await axiosInstance.get('/PublicNews/GetSocialMediaArticles', headers);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getSectionByName = async (sectionName: string) => {
    try {
        const response = await axiosInstance.get(`/PublicNews/GetSectionByName?name=${sectionName}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getAdvertisementShort = async (relevance?: boolean, position?: string, sectionId?: number) => {
    try {
        let queryParams = '';

        if (relevance !== undefined) {
            queryParams = `&relevance=${relevance}`;
        }

        if (position !== undefined) {
            queryParams += `&position=${position}`;
        }

        if (sectionId !== undefined) {
            queryParams += `&SectionId=${sectionId}`;
        }
        
        const response = await axiosInstance.get(`/PublicNews/GetAdvertisementShort?OnlyValidAds=true${queryParams}`, headers);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getAllLiveStreamSchedule = async () => {
    try {
        const response = await axiosInstance.get('/PublicNews/GetAllLiveStreamSchedule');
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getArticlesFilterBySection = async (params?: { SectionName?: string, PageSize?:number, PageNumber?:number }) => {
    let queryParams = '';
    if (params != null) {
        queryParams = getQueryStringParams(params);
    }    
    try {
        const response = await axiosInstance.get(`/PublicNews/GetArticlesFilterBySection${queryParams}`);
         if (response.status !== 200) { throw new Error('Error en la peticion') }
        return response.data
    } catch (error) {
        return error;
    }
}