import type { Actor, Credits, Movie, MovieApiResponse } from '../types';

export const mapApiCreditsData = (data: Credits): Actor[] => {
    const { cast } = data;
    return cast.map((actor) => {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character!,
            profilePath: actor.profile_path!
        };
    });
};

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

export const mapApiMovieDetailsData = (data: MovieApiResponse): Movie => {
    const { id, title, release_date, vote_average, poster_path, overview, credits } = data;
    const actors = credits ? mapApiCreditsData(credits) : [];
    return {
        id: id,
        title: title,
        releaseDate: release_date,
        voteAverage: vote_average,
        posterPath: poster_path,
        overview: overview,
        actors
    };
};
