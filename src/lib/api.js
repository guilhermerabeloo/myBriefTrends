import axios from 'axios';

const apikey = import.meta.env.VITE_NEWS_API_KEY

export const newsapi = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        apiKey: apikey
    }
})