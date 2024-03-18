import { render, fireEvent } from '@testing-library/react-native';
import MoviesListChoice from '../MoviesListChoice';
import { useMovies } from '../../../hooks';

jest.mock('../../../hooks', () => ({
    ...jest.requireActual('../../../hooks'),
    useMovies: jest.fn()
}));

describe('MoviesListChoice', () => {
    it('renders correctly', () => {
        (useMovies as jest.Mock).mockReturnValue({
            selectedList: '',
            setSelectedList: jest.fn()
        });

        const { getByText } = render(
            <MoviesListChoice nowPlayingBtn={jest.fn()} favoritesBtn={jest.fn()} />
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
            <MoviesListChoice nowPlayingBtn={nowPlayingBtnMock} favoritesBtn={jest.fn()} />
        );
        fireEvent.press(getByText('Películas'));
        expect(setSelectedListMock).toHaveBeenCalledWith('nowPlaying');
        expect(nowPlayingBtnMock).toHaveBeenCalled();
    });
});
