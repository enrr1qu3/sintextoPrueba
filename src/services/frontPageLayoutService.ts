import { axiosInstance } from "./axios";
import { headers } from "./headers-cache";

export const getFrontPageLayoutPublished = async () => {
    try {
        const response = await axiosInstance.get('/FrontPageLayout/UltimateFrontPageLayoutPublished', headers);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}