import type { Movie, MovieApiResponse } from '../types';

export const mapApiMovieData = (data: MovieApiResponse): Movie => {
    const { id, title, release_date, vote_average, poster_path } = data;

    return {
        id,
        title,
        releaseDate: release_date,
        voteAverage: vote_average,
        posterPath: poster_path
    };
};
