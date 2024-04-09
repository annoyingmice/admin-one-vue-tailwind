import axios from "axios";
import { useMainStore } from "./stores";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const { data } = useMainStore();
    config.headers['Authorization'] = `Bearer ${data.accessToken}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default instance;