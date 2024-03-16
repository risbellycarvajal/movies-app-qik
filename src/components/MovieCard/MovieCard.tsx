import type { FC } from 'react';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Movie } from '../../types';
import { FavButton, StarRating } from '..';

interface MovieCardProps {
    movie: Movie;
    onPress?: () => void;
}

const MovieCard: FC<MovieCardProps> = ({ movie, onPress }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <View style={styles.card}>
                <FavButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.posterPath}` }}
                    style={styles.image}
                />
                <Text style={styles.title}>{movie.title}</Text>
                <StarRating voteAverage={movie.voteAverage} />
                <Text style={styles.date}>{movie.releaseDate}</Text>
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
