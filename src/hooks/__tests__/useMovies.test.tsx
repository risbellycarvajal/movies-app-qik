import { renderHook } from '@testing-library/react-hooks';
import { useMovies } from '..';
import * as services from '../../services';
import * as utils from '../../utils';
import { mockMovies, mockSortedMovies } from '../../__mockData__/movies.mock';

jest.mock('../../services', () => ({
    getMovies: jest.fn()
}));

jest.mock('../../utils', () => ({
    getAxiosError: jest.fn((error) => error),
    sortMovies: jest.fn((movies) => {
        if (!movies) {
            return [];
        }
        return [...movies].sort((a, b) => a.title.localeCompare(b.title));
    })
}));

describe('useMovies', () => {
    const getMoviesMock = services.getMovies as jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('loads and sorts movies successfully', async () => {
        getMoviesMock.mockResolvedValue(mockMovies);
        const { result, waitForNextUpdate } = renderHook(() => useMovies());

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.movies).toEqual(mockMovies);
        expect(result.current.sortedMovies).toEqual(mockSortedMovies);
        expect(result.current.loading).toBe(false);
        expect(utils.sortMovies).toHaveBeenCalledWith(mockMovies);
    });

    it('handles errors when loading movies fails', async () => {
        getMoviesMock.mockRejectedValue(new Error('Failed to fetch'));

        const { result, waitForNextUpdate } = renderHook(() => useMovies());

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.movies).toBeUndefined();
        expect(result.current.sortedMovies).toEqual([]);
        expect(result.current.loading).toBe(false);
    });
});
