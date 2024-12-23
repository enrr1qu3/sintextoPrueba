import { axiosInstance } from "./axios";

export const getFrontPageLayoutPublished = async () => {
    try {
        const response = await axiosInstance.get('/FrontPageLayout/UltimateFrontPageLayoutPublished');
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}