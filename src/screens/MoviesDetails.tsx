import React from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import type { MoviesDetailsScreenProp } from '../types';
import { useFavoriteMovies, useMovieDetails } from '../hooks';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { formatDate } from '../utils';
import { detailsStyles as styles } from './styles';
import { Divider, FavButton, MovieCard, MovieRating, StarRating } from '../components';
import { useRecommendedMovies } from '../hooks';
import { API_BASE_IMAGE_URL } from '@env';

const MoviesDetails: React.FC<MoviesDetailsScreenProp> = ({ route }) => {
    const { loading, movie } = useMovieDetails(route.params.movieId);
    const { isFavorite, addFavorite, removeFavorite, dispatch } = useFavoriteMovies(
        route.params.movieId
    );
    const { recommendedMovies } = useRecommendedMovies(route.params.movieId);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!movie) {
        return (
            <View style={styles.centered}>
                <Text>No hay detalles disponibles para mostrar.</Text>
            </View>
        );
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.posterContainer}>
                <Image
                    source={{ uri: `${API_BASE_IMAGE_URL}${movie.posterPath}` }}
                    style={styles.poster}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{movie.title}</Text>
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
            </View>
            <View style={styles.viewRow}>
                <Text style={[styles.sectionTitle, { flex: 1 }]}>Puntuación</Text>
                <StarRating starSize={25} voteAverage={movie.voteAverage} />
            </View>
            <Text style={styles.sectionTitle}>Sinopsis</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
            <View style={styles.viewRow}>
                <Text style={[styles.sectionTitle, { flex: 1 }]}>Estreno</Text>
                <Text style={[styles.sectionTitle, styles.pill]}>
                    {formatDate(movie.releaseDate)}
                </Text>
            </View>
            <Text style={styles.sectionTitle}>Generos</Text>
            <View style={styles.genresContainer}>
                {movie.genres?.map((genre) => (
                    <Text key={genre.id} style={[styles.pill, { fontWeight: '500' }]}>
                        {genre.name}
                    </Text>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Actores</Text>
            <FlatList
                data={movie.actors}
                renderItem={({ item }) => (
                    <View style={styles.actorContainer}>
                        <Image
                            source={
                                item.profilePath !== null
                                    ? { uri: `${API_BASE_IMAGE_URL}${item.profilePath}` }
                                    : require('../assets/avatar.png')
                            }
                            style={styles.actorImage}
                        />
                        <Text style={styles.actorName}>{item.name}</Text>
                        <Text style={styles.characterName}>{item.character}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <Divider />
            <View style={styles.rateContainer}>
                <Text style={styles.rateText}>Califica esta pelicula</Text>
                <MovieRating movieId={route.params.movieId} />
            </View>
            <Divider />
            <Text style={styles.sectionTitle}>Peliculas similares</Text>
            <FlatList
                data={recommendedMovies}
                contentContainerStyle={styles.recommmendationsContainer}
                renderItem={({ item }) => <MovieCard key={item.id} movie={item} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
};

export default MoviesDetails;
