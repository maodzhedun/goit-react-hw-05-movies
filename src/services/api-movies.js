import axios from 'axios';

const API_KEY = '7dad0d8643406850cd53b8ced36ef73e';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`);
  return response.data.results;
};

export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&page=${page}`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`);
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`);
  return response.data.results;
};
