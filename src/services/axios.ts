import axios from 'axios';
import { baseUrl } from './global';

export const axiosInstance = axios.create({
    baseURL: baseUrl
});