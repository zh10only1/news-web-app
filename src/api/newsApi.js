import axios from 'axios';
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_BASE_URL = "https://newsapi.org/v2"


export const getNews = async (category) => {
    let response;

    try {
        response = await axios.get(`${NEWS_API_BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`);
    } catch (error) {
        console.log(error)
    }

    return response;
}

export const getNewsBySearch = async (searchQuery) => {
    let response;

    try {
        response = await axios.get(`${NEWS_API_BASE_URL}/everything?q=${searchQuery}&apiKey=${NEWS_API_KEY}&sortBy=relevancy`);
    } catch (error) {
        console.log(error)
    }

    return response;
}