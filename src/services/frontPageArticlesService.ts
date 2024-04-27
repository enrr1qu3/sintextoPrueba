import { axiosInstance } from "./axios";

export const getFrontPageArticles= async () => {
    try {
        const response = await axiosInstance.get('/FrontPageArticle');
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}