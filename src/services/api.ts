import { API_BASE_URL, API_KEY, AUTH_API_BASE_URL, API_LANGUAGE } from '@env';
import type { ApiResponse, GuestSession, Movie, MovieApiResponse, Movies } from '../types';
import {
    PAGE,
    getGuestSession,
    isSessionActive,
    mapApiMovieData,
    mapApiMovieDetailsData,
    setGuestSession
} from '../utils';
import type { AxiosError } from 'axios';
import axios from 'axios';

export const getMovies = async (): Promise<Movies> => {
    const URL = `${API_BASE_URL}/now_playing?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${PAGE}`;
    try {
        const response = await axios.get<ApiResponse>(URL);
        const data = response.data;
        if (data.results) {
            return data.results.map(mapApiMovieData);
        } else {
            throw new Error('No se pudieron obtener las películas. Intente nuevamente.');
        }
    } catch (error) {
        throw error as AxiosError;
    }
};

export const getMovieDetails = async (id: number): Promise<Movie> => {
    const URL = `${API_BASE_URL}/${id}?api_key=${API_KEY}&language=${API_LANGUAGE}&append_to_response=credits`;
    try {
        const response = await axios.get<MovieApiResponse>(URL);
        const data = response.data;
        if (data) {
            return mapApiMovieDetailsData(data);
        } else {
            throw new Error(
                'No se pudieron obtener los detalles de la película. Intente nuevamente.'
            );
        }
    } catch (error) {
        throw error as AxiosError;
    }
};

export const getRecommendedMovies = async (id: number): Promise<Movies> => {
    const URL = `${API_BASE_URL}/${id}/recommendations?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${PAGE}`;
    try {
        const response = await axios.get<ApiResponse>(URL);
        const data = response.data;
        if (data.results) {
            return data.results.map(mapApiMovieData);
        } else {
            throw new Error(
                'No se pudieron obtener las peliculas recomendadas. Intente nuevamente.'
            );
        }
    } catch (error) {
        throw error as AxiosError;
    }
};

export const rateMovie = async (movieId: number, rate: number): Promise<{ success: boolean }> => {
    try {
        let sessionData = await getGuestSession();
        if (!(sessionData.sessionId && isSessionActive(sessionData))) {
            sessionData = await getSession();
            await setGuestSession(sessionData);
        }
        const URL = `${API_BASE_URL}/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${sessionData.sessionId}`;
        const response = await axios.post(
            URL,
            { value: rate },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const data = response.data;
        if (data.success) {
            return { success: data.success };
        } else {
            throw new Error('No se pudo calificar la pelicula');
        }
    } catch (error) {
        throw error as AxiosError;
    }
};

export const getSession = async (): Promise<GuestSession> => {
    try {
        const URL = `${AUTH_API_BASE_URL}/guest_session/new?api_key=${API_KEY}`;
        const response = await axios.get(URL);
        const data = response.data;
        if (data.guest_session_id && data.expires_at) {
            return {
                sessionId: data.guest_session_id,
                expireDate: data.expires_at
            };
        } else {
            throw new Error(
                'Ha ocurrido un error al consultar la sesion del usuario. Intente nuevamente.'
            );
        }
    } catch (error) {
        throw error as AxiosError;
    }
};
