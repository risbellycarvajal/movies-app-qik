import type { Movies } from '../types';
import { getMovies } from '../services';
import { useCallback, useEffect, useState } from 'react';
import { getAxiosError, sortMovies } from '../utils';
import type { AxiosError } from 'axios';

const useMovies = () => {
    const [movies, setMovies] = useState<Movies>();
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedList, setSelectedList] = useState<string>('nowPlaying');

    const handleGetMovies = useCallback(async () => {
        setLoading(true);
        await getMovies()
            .then((movies) => {
                setMovies(movies);
                setLoading(false);
            })
            .catch((err: AxiosError) => {
                setLoading(false);
                const error = getAxiosError(err);
                console.error(
                    'Ha ocurrido un error al obtener el listado de las películas:',
                    error
                );
            });
    }, []);

    useEffect(() => {
        handleGetMovies();
    }, []);

    const sortedMovies = sortMovies(movies!);

    return {
        movies,
        setMovies,
        loading,
        sortedMovies,
        selectedList,
        setSelectedList
    };
};

export default useMovies;
