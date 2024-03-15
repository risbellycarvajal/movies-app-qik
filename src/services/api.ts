import { API_BASE_URL, API_KEY } from '@env';
import type { ApiResponse, Movies } from '../types';
import { API_LANGUAGE, PAGE, mapApiMovieData } from '../utils';

export const getMovies = async (): Promise<Movies> => {
    const URL = `${API_BASE_URL}/now_playing?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${PAGE}`;
    try {
        const res = await fetch(URL);
        const data: ApiResponse = await res.json();
        if (data.results) {
            return data.results.map(mapApiMovieData);
        } else {
            throw new Error('No se pudieron obtener las películas. Intente nuevamente.');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
