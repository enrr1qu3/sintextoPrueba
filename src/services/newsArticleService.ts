import { axiosInstance } from "./axios";
import { headers } from "./headers-cache";

export const getNewsArticleByIdSection = async (idSection: number) => {
    try {
        const response = await axiosInstance.get(`/NewsArticle?NewsSectionId=${idSection}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getNewsArticleById = async (idNewsArticle: number) => {
    try {
        const response = await axiosInstance.get(`/NewsArticle/GetNewsArticleById/${idNewsArticle}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getUltimateFiveNewsArticleApproved = async () => {
    try {
        const response = await axiosInstance.get('/NewsArticle/UltimateFiveNewsArticleApproved', headers);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}