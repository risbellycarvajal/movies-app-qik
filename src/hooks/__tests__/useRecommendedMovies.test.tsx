import { renderHook } from '@testing-library/react-hooks';
import { useRecommendedMovies } from '..';
import * as services from '../../services';
import * as utils from '../../utils';
import {
    mockMovies,
    mockRecommendedMovies,
    mockSortedRecommendedMovies
} from '../../__mockData__/movies.mock';

jest.mock('../../services', () => ({
    getRecommendedMovies: jest.fn()
}));

jest.mock('../../utils', () => ({
    sortMovies: jest.fn((movies) => {
        if (!movies) {
            return [];
        }
        return [...movies].sort((a, b) => a.title.localeCompare(b.title));
    })
}));

describe('useRecommendedMovies', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    const getRecommendedMoviesMock = services.getRecommendedMovies as jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('loads and sorts recommended movies successfully', async () => {
        getRecommendedMoviesMock.mockResolvedValue(mockRecommendedMovies);

        const { result, waitForNextUpdate } = renderHook(() =>
            useRecommendedMovies(mockRecommendedMovies[0].id)
        );

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.recommendedMovies).toEqual(mockRecommendedMovies);
        expect(result.current.sortedMovies).toEqual(mockSortedRecommendedMovies);
        expect(result.current.loading).toBe(false);
        expect(utils.sortMovies).toHaveBeenCalledWith(mockRecommendedMovies);
    });

    it('handles errors when loading recommended movies fails', async () => {
        getRecommendedMoviesMock.mockRejectedValue(new Error('Failed to fetch'));

        const { result, waitForNextUpdate } = renderHook(() =>
            useRecommendedMovies(mockMovies[1].id)
        );

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.recommendedMovies).toBeUndefined();
        expect(result.current.sortedMovies).toEqual([]);
        expect(result.current.loading).toBe(false);
    });
});
