import { getMovieDetails } from '../services';
import { useCallback, useEffect, useState } from 'react';
import type { Movie } from '../types';
import { getAxiosError } from '../utils';
import type { AxiosError } from 'axios';

const useMovieDetails = (movieId: number) => {
    const [movie, setMovie] = useState<Movie>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetMovieDetails = useCallback(async () => {
        setLoading(true);
        await getMovieDetails(movieId)
            .then((movieDetails) => {
                setMovie(movieDetails);
                setLoading(false);
            })
            .catch((err: AxiosError) => {
                setLoading(false);
                const error = getAxiosError(err);
                console.error('Ha ocurrido un error al obtener el detalle de la película:', error);
            });
    }, [movieId]);

    useEffect(() => {
        handleGetMovieDetails();
    }, [movieId]);

    return {
        movie,
        loading
    };
};

export default useMovieDetails;
