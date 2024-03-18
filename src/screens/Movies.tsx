import { useEffect, type FC } from 'react';
import type { MoviesScreenProp } from '../types';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { MovieCard, MoviesListChoice } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import { useFavoriteMovies, useMovies } from '../hooks';
import { moviesStyles as styles } from './styles';

const MoviesScreen: FC<MoviesScreenProp> = ({ navigation }) => {
    const { loading, sortedMovies, selectedList, setSelectedList } = useMovies();
    const { favoriteMovies } = useFavoriteMovies();

    useEffect(() => {
        if (favoriteMovies.length < 1) setSelectedList('nowPlaying');
    }, [favoriteMovies]);

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
                <Text style={styles.subtitle}>Películas en estreno</Text>
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
                    favoritesBtn={() => setSelectedList('favoriteMovies')}
                />
            </View>
        </SafeAreaView>
    );
};

export default MoviesScreen;
