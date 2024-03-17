import { useEffect, type FC } from 'react';
import type { MoviesScreenProp } from '../types';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { MovieCard, ListHeader } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import { useFavoriteMovies, useMovies } from '../hooks';
import { moviesStyles as styles } from './styles';

const MoviesScreen: FC<MoviesScreenProp> = ({ navigation }) => {
    const { loading, sortedMovies, selectedList, setSelectedList } = useMovies();
    const { favoriteMovies } = useFavoriteMovies();

    useEffect(() => {
        if (favoriteMovies.length < 1) setSelectedList('nowPlaying');
    }, [favoriteMovies]);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <ActivityIndicator />
            ) : (
                sortedMovies && (
                    <View>
                        <Text style={styles.title}>Movies APP</Text>
                        <FlatList
                            testID="movies-list"
                            style={styles.flatList}
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
                        <ListHeader
                            nowPlayingTab={() => setSelectedList('nowPlaying')}
                            favoriteMoviesTab={() => setSelectedList('favoriteMovies')}
                        />
                    </View>
                )
            )}
        </SafeAreaView>
    );
};

export default MoviesScreen;
