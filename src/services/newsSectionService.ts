import { axiosInstance } from "./axios";

export const getNewsSectionById = async (idNewsSection: number) => {
    try {
        const response = await axiosInstance.get(`/NewsSection/GetNewsSectionById/${idNewsSection}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data.data;
    } catch (error) {
        return error;
    }
}

export const getAllNewsSection = async () => {
    const pageSize = 200;

    try {
        const response = await axiosInstance.get(`/NewsSection?IsActive=true&PageSize=${pageSize}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}