import { renderHook, act } from '@testing-library/react-hooks';
import { useFavoriteMovies } from '..';
import { mockMovies } from '../../__mockData__/movies.mock';
import { addFavorite, removeFavorite } from '../../reducers/favoritesMovies';
import type { RootState } from '../../store';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useSelector: (selector: (state: RootState) => any) => mockSelector(selector)
}));

describe('useFavoriteMovies', () => {
    beforeEach(() => {
        mockDispatch.mockClear();
        mockSelector.mockClear();
    });

    it('should handle remove favorite movie correctly', () => {
        const movieId = 1011985;
        const initialState = {
            favoriteMovies: {
                favoriteMovies: mockMovies
            }
        };

        mockSelector.mockImplementation((selector) => selector(initialState));

        const { result } = renderHook(() => useFavoriteMovies(movieId));

        expect(result.current.isFavorite).toBe(true);

        act(() => {
            mockDispatch(removeFavorite(mockMovies[1]));
        });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'favoriteMovies/removeFavorite',
            payload: mockMovies[1]
        });
    });

    it('should handle add favorite movie correctly', () => {
        const movieId = 1011985;
        const initialState = {
            favoriteMovies: {
                favoriteMovies: []
            }
        };

        mockSelector.mockImplementation((selector) => selector(initialState));

        const { result } = renderHook(() => useFavoriteMovies(movieId));

        expect(result.current.isFavorite).toBe(false);

        act(() => {
            mockDispatch(addFavorite(mockMovies[0]));
        });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'favoriteMovies/addFavorite',
            payload: mockMovies[0]
        });
    });
});
