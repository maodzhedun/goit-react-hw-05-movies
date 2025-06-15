import axios from 'axios';

const API_KEY = '7dad0d8643406850cd53b8ced36ef73e';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        throw error;
    }
};


export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                query: query,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};

export const getMovieCredits = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
        return response.data.cast;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        throw error;
    }
};

export const getMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movie reviews:', error);
        throw error;    
    }
};
