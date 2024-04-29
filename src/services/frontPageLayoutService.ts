import { axiosInstance } from "./axios";

export const getFrontPageLayoutPublished = async () => {
    try {
        const response = await axiosInstance.get('/FrontPageLayout/UltimateFrontPageLayoutPublished', {
            // query URL without using browser cache
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
            },
        });
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}