import { mockMovies } from '../../__mockData__/movies.mock';
import { favoriteMoviesSlice, addFavorite, removeFavorite } from '../favoritesMovies';

describe('favoriteMoviesSlice', () => {
    const initialState = {
        favoriteMovies: []
    };

    it('should handle initial state', () => {
        expect(favoriteMoviesSlice.reducer(undefined, { type: 'unknown' })).toEqual({
            favoriteMovies: []
        });
    });

    it('should handle addFavorite', () => {
        const actual = favoriteMoviesSlice.reducer(initialState, addFavorite(mockMovies[0]));
        expect(actual.favoriteMovies).toEqual([mockMovies[0]]);
    });

    it('should handle removeFavorite', () => {
        const stateWithMovie = favoriteMoviesSlice.reducer(
            initialState,
            addFavorite(mockMovies[0])
        );
        expect(stateWithMovie.favoriteMovies).toEqual([mockMovies[0]]);

        const actual = favoriteMoviesSlice.reducer(stateWithMovie, removeFavorite(mockMovies[0]));
        expect(actual.favoriteMovies).toEqual([]);
    });

    // You can add more tests to cover more scenarios, such as trying to remove a movie that doesn't exist
});
