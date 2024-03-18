import { render, fireEvent } from '@testing-library/react-native';
import MoviesListChoice from '../MoviesListChoice';
import { useMovies } from '../../../hooks';
import type { RootState } from '../../../store';
import configureStore from 'redux-mock-store';
import { mockMovies } from '../../../__mockData__/movies.mock';
import { Provider } from 'react-redux';

jest.mock('../../../hooks', () => ({
    ...jest.requireActual('../../../hooks'),
    useMovies: jest.fn()
}));

describe('MoviesListChoice', () => {
    const mockStore = configureStore<RootState>([]);
    const initialState = {
        favoriteMovies: {
            favoriteMovies: mockMovies
        }
    };
    const store = mockStore(initialState);
    it('renders correctly', () => {
        (useMovies as jest.Mock).mockReturnValue({
            selectedList: '',
            setSelectedList: jest.fn()
        });

        const { getByText } = render(
            <Provider store={store}>
                <MoviesListChoice nowPlayingBtn={jest.fn()} favoritesBtn={jest.fn()} />
            </Provider>
        );
        expect(getByText('Películas')).toBeTruthy();
        expect(getByText('Favoritas')).toBeTruthy();
    });

    it('triggers nowPlayingBtn when Peliculas button is pressed and selectedList is not nowPlaying', () => {
        const setSelectedListMock = jest.fn();
        const nowPlayingBtnMock = jest.fn();

        (useMovies as jest.Mock).mockReturnValue({
            selectedList: '',
            setSelectedList: setSelectedListMock
        });

        const { getByText } = render(
            <Provider store={store}>
                <MoviesListChoice nowPlayingBtn={nowPlayingBtnMock} favoritesBtn={jest.fn()} />
            </Provider>
        );
        fireEvent.press(getByText('Películas'));
        expect(setSelectedListMock).toHaveBeenCalledWith('nowPlaying');
        expect(nowPlayingBtnMock).toHaveBeenCalled();
    });
});
