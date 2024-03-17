import { getMovieDetails } from '../services';
import { useCallback, useEffect, useState } from 'react';
import type { Movie } from '../types';

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
            .catch((error) => {
                setLoading(false);
                console.log('Error', error);
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
