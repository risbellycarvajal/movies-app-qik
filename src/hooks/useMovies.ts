import type { Movies } from '../types';
import { getMovies } from '../services';
import { useCallback, useEffect, useState } from 'react';
import { sortMovies } from '../utils';

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
            .catch((error) => {
                setLoading(false);
                console.log('Error', error);
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
