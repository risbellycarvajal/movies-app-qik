import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MovieCard from '..';
import type { RootState } from '../../../store';
import configureStore from 'redux-mock-store';
import { mockMovies } from '../../../__mockData__/movies.mock';
import { Provider } from 'react-redux';

describe('MovieCard', () => {
    const mockStore = configureStore<RootState>([]);
    const initialState = {
        favoriteMovies: {
            favoriteMovies: mockMovies
        }
    };
    const store = mockStore(initialState);

    it('renders correctly with movie data', () => {
        const { getByText } = render(
            <Provider store={store}>
                <MovieCard movie={mockMovies[0]} />
            </Provider>
        );

        expect(getByText('Kung Fu Panda 4')).toBeTruthy();
        expect(getByText('02 mar, 2024')).toBeTruthy();
    });

    it('calls onPress when the card is pressed', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(
            <Provider store={store}>
                <MovieCard movie={mockMovies[0]} onPress={onPressMock} />
            </Provider>
        );

        fireEvent.press(getByTestId('movie-card'));
        expect(onPressMock).toHaveBeenCalled();
    });
});
