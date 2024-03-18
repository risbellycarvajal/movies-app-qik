import { useEffect, type FC } from 'react';
import type { MoviesScreenProp } from '../types';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { MovieCard, MoviesListChoice } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import { useFavoriteMovies, useMovies } from '../hooks';
import { moviesStyles as styles } from './styles';
import { CustomAlert } from '../utils';

const MoviesScreen: FC<MoviesScreenProp> = ({ navigation }) => {
    const { loading, sortedMovies, selectedList, setSelectedList } = useMovies();
    const { favoriteMovies } = useFavoriteMovies();

    useEffect(() => {
        if (!favoriteMovies.length) {
            setSelectedList('nowPlaying');
        }
    }, [favoriteMovies, setSelectedList]);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!sortedMovies) {
        return (
            <View style={styles.centered}>
                <Text>No hay películas para mostrar.</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Movies APP</Text>
                <Text style={styles.subtitle}>
                    {selectedList === 'nowPlaying'
                        ? 'Películas en estreno'
                        : 'Películas favoritas '}
                </Text>
                <FlatList
                    style={styles.movieList}
                    testID="movies-list"
                    data={selectedList == 'nowPlaying' ? sortedMovies : favoriteMovies}
                    renderItem={({ item }) => (
                        <MovieCard
                            key={item.id}
                            movie={item}
                            onPress={() => {
                                navigation.navigate('MoviesDetails', { movieId: item.id });
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <MoviesListChoice
                    nowPlayingBtn={() => setSelectedList('nowPlaying')}
                    favoritesBtn={() => {
                        if (favoriteMovies.length === 0) {
                            CustomAlert({
                                title: 'Películas favoritas',
                                description: 'No tienes películas añadidas a favoritas.',
                                buttonText: 'Ok'
                            });
                        } else {
                            setSelectedList('favoriteMovies');
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default MoviesScreen;
