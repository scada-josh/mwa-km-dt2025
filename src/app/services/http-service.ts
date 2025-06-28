import axios from "axios";

export const http = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: process.env.API_DOMAIN
});

export const fetcher = (url: string) => http.get(url).then(res => res.data);