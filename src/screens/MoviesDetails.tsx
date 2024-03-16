import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { getMovieDetails } from '../services';
import type { Movie, MoviesDetailsScreenProp } from '../types';

const MoviesDetails: React.FC<MoviesDetailsScreenProp> = ({ route }) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadMovieDetails = async () => {
            if (route.params?.movieId) {
                try {
                    const movieDetails = await getMovieDetails(route.params?.movieId);
                    setMovie(movieDetails);
                } catch (error) {
                    console.error(error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        loadMovieDetails();
    }, [route.params?.movieId]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!movie) {
        return (
            <View style={styles.centered}>
                <Text>No movie details available.</Text>
            </View>
        );
    }

    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>{movie.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default MoviesDetails;
