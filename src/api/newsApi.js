import axios from 'axios';
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;


export const getNews = async (category) => {
    let response;

    try {
        response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`);
        response = response.data.articles;
    } catch (error) {
        console.log(error)
    }

    return response;
}

export const getNewsBySearch = async (searchQuery) => {
    let response;

    try {
        response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${NEWS_API_KEY}&sortBy=relevancy`);
        response = response.data.articles.slice(0, 5);
    } catch (error) {
        console.log(error)
    }

    return response;
}