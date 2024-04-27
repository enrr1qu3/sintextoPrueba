import { axiosInstance } from "./axios";

export const getEmployeeByQRId = async (idEmployee: string) => {
    try {
        const response = await axiosInstance.get(`/Employees/GetByQRId?QRId=${idEmployee}`);
        if (response.status !== 200) {
            throw new Error('Error en la petición');
        }
        return response.data;
    } catch (error) {
        return error;
    }
}