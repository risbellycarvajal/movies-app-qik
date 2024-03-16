import type { Movies } from '../types';

export const sortMovies = (movies: Movies) => {
    if (!movies) return [];
    return [...movies].sort((a, b) => a.title.localeCompare(b.title));
};
