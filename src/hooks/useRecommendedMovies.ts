import { useCallback, useEffect, useState } from 'react';
import { getRecommendedMovies } from '../services';
import { sortMovies } from '../utils';
import type { Movies } from '../types';
import { getAxiosError } from '../utils';
import type { AxiosError } from 'axios';

const useRecommendedMovies = (movieId: number) => {
    const [recommendedMovies, setRecommendedMovies] = useState<Movies>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetRecommendedMovies = useCallback(async () => {
        setLoading(true);
        await getRecommendedMovies(movieId)
            .then((movies) => {
                setRecommendedMovies(movies);
                setLoading(false);
            })
            .catch((err: AxiosError) => {
                setLoading(false);
                const error = getAxiosError(err);
                console.error(
                    'Ha ocurrido un error al obtener el listado de las películas recomendadas:',
                    error
                );
            });
    }, [movieId]);

    useEffect(() => {
        handleGetRecommendedMovies();
    }, []);

    const sortedMovies = sortMovies(recommendedMovies!);

    return {
        recommendedMovies,
        setRecommendedMovies,
        loading,
        sortedMovies
    };
};

export default useRecommendedMovies;
