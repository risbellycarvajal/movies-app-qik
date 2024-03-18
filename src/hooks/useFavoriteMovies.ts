import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { addFavorite, removeFavorite } from '../reducers/favoritesMovies';

const useFavoriteMovies = (movieId?: number) => {
    const favoriteMovies = useSelector((state: RootState) => state.favoriteMovies.favoriteMovies);
    const [isFavorite, setIsFavorite] = useState<boolean>(
        Boolean(favoriteMovies.find((fav) => fav.id === movieId))
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setIsFavorite(Boolean(favoriteMovies.find((fav) => fav.id === movieId)));
    }, [favoriteMovies]);

    return {
        favoriteMovies,
        isFavorite,
        setIsFavorite,
        removeFavorite,
        addFavorite,
        dispatch
    };
};

export default useFavoriteMovies;
