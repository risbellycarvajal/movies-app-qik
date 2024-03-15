export interface ApiResponse {
    dates: Dates;
    page: number;
    results: MovieApiResponse[];
    total_pages: number;
    total_results: number;
}

export type Dates = {
    maximum: string;
    minimum: string;
};

export type MovieApiResponse = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Genre = {
    id: number;
    name: string;
};

export type Actor = {
    name: string;
    id: number;
    character: string;
    profilePath: string;
};

export interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    voteAverage: number;
    posterPath: string;
    overview?: string;
    genres?: Genre[];
    actors?: Actor[];
}

export type Movies = Movie[];
