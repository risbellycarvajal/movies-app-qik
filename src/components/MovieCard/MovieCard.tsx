import type { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Movie } from '../../types';
import { FavButton, StarRating } from '..';
import { useFavoriteMovies } from '../../hooks';
import { formatDate } from '../../utils';
import { API_BASE_IMAGE_URL } from '@env';

interface MovieCardProps {
    movie: Movie;
    onPress?: () => void;
}

const MovieCard: FC<MovieCardProps> = ({ movie, onPress }) => {
    const { isFavorite, addFavorite, removeFavorite, dispatch } = useFavoriteMovies(movie.id);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
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

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 360,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: 250,
        borderRadius: 8
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16
    },

    date: {
        fontSize: 14,
        color: '#666',
        marginTop: 4
    }
});

export default MovieCard;
