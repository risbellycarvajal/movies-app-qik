import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Movie, Movies } from '../types';

export interface FavoriteMoviesState {
    favoriteMovies: Movies;
}

const initialState: FavoriteMoviesState = {
    favoriteMovies: []
};

export const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movie>) => {
            state.favoriteMovies = [...state.favoriteMovies, action.payload];
        },
        removeFavorite: (state, action: PayloadAction<Movie>) => {
            state.favoriteMovies = state.favoriteMovies.filter(
                (movie) => movie.id !== action.payload.id
            );
        }
    }
});

export const { addFavorite, removeFavorite } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
