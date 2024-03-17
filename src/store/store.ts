import { configureStore } from '@reduxjs/toolkit';
import favoriteMovies from '../reducers';

const store = configureStore({
    reducer: {
        favoriteMovies: favoriteMovies
    }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
