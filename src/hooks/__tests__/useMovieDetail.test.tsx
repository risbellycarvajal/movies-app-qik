import { renderHook } from '@testing-library/react-hooks';
import { useMovieDetails } from '../';
import * as services from '../../services';
import { mockMovies } from '../../__mockData__/movies.mock';

jest.mock('../../services', () => ({
    getMovieDetails: jest.fn()
}));

describe('useMovieDetails', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const getMovieDetailsMock = services.getMovieDetails as jest.Mock;

    it('loads movie details successfully', async () => {
        getMovieDetailsMock.mockResolvedValue(mockMovies[0]);

        const { result, waitForNextUpdate } = renderHook(() => useMovieDetails(1));

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.movie).toEqual(mockMovies[0]);
        expect(result.current.loading).toBe(false);
    });

    it('handles errors when loading movie details fails', async () => {
        getMovieDetailsMock.mockRejectedValue(new Error('Failed to fetch'));

        const { result, waitForNextUpdate } = renderHook(() => useMovieDetails(1));

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.movie).toBeUndefined();
        expect(result.current.loading).toBe(false);
    });
});
