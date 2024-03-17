import type { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { Movie } from '../../types';
import { FavButton, StarRating } from '..';
import { useFavoriteMovies } from '../../hooks';
import { formatDate } from '../../utils';
import { API_BASE_IMAGE_URL } from '@env';
import { styles } from './styles';

interface MovieCardProps {
    movie: Movie;
    onPress?: () => void;
}

const MovieCard: FC<MovieCardProps> = ({ movie, onPress }) => {
    const { isFavorite, addFavorite, removeFavorite, dispatch } = useFavoriteMovies(movie.id);

    return (
        <TouchableOpacity testID="movie-card" onPress={onPress} activeOpacity={0.6}>
            <View style={styles.card}>
                <FavButton
                    isFavorite={isFavorite}
                    toggleFavorite={() => {
                        if (isFavorite) {
                            dispatch(removeFavorite(movie));
                        } else {
                            dispatch(addFavorite(movie));
                        }
                    }}
                />
                <Image
                    source={{ uri: `${API_BASE_IMAGE_URL}${movie.posterPath}` }}
                    style={styles.image}
                />
                <Text style={styles.title}>{movie.title}</Text>
                <StarRating voteAverage={movie.voteAverage} />
                <Text style={styles.date}>{formatDate(movie.releaseDate)}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieCard;
