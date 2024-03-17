import type { ReactElement } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react-native';
import { useDispatch, Provider, useSelector } from 'react-redux';
import favoriteMovies from '../../reducers';
import type { AppDispatch, RootState } from '..';
import { store } from '..';

describe('store', () => {
    it('should have the favorite movies reducer', () => {
        const store = configureStore({
            reducer: {
                favoriteMovies: favoriteMovies
            }
        });

        expect(store.getState().favoriteMovies).toBeDefined();
    });

    it('should return the store dispatch function', () => {
        const wrapper = ({ children }: { children: React.ReactNode }): ReactElement => (
            <Provider store={store}>{children}</Provider>
        );

        const { result } = renderHook(() => useDispatch<AppDispatch>(), {
            wrapper
        });

        expect(result.current).toBe(store.dispatch);
    });

    it('should return the selected state from the store', () => {
        const initialState = {
            favoriteMovies: []
        };

        const wrapper = ({ children }: { children: React.ReactNode }): ReactElement => (
            <Provider store={store}>{children}</Provider>
        );

        const { result } = renderHook(
            () => useSelector((state: RootState) => state.favoriteMovies),
            {
                wrapper
            }
        );

        expect(result.current).toEqual(initialState);
    });
});
