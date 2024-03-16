import { sortMovies } from '..';
import { mockExpectedMovies, mockMovies } from '../../__mockData__/movies.mock';

describe('sortMovies', () => {
    it('should sort the movies by title in alphabetical order', () => {
        const result = sortMovies(mockMovies);

        expect(result).toEqual(mockExpectedMovies);
    });

    it('should handle an empty array', () => {
        const result = sortMovies([]);

        expect(result).toEqual([]);
    });

    it('should not mutate the original array', () => {
        const moviesCopy = [...mockMovies];

        sortMovies(mockMovies);

        expect(mockMovies).toEqual(moviesCopy);
    });
});
