import type { FC } from 'react';
import type { Movies, MoviesScreenProp } from '../types';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getMovies } from '../services';
import { MovieCard } from '../components';
import { sortMovies } from '../utils/sort-movies';
import { FlatList } from 'react-native-gesture-handler';

const MoviesScreen: FC<MoviesScreenProp> = ({ navigation }) => {
    const [movies, setMovies] = useState<Movies>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetMovies = useCallback(async () => {
        setLoading(true);
        await getMovies()
            .then((movies) => {
                setMovies(movies);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log('Error', err);
            });
    }, []);

    useEffect(() => {
        handleGetMovies();
    }, []);

    const sortedMovies = sortMovies(movies!);
    return (
        <SafeAreaView>
            {loading ? (
                <ActivityIndicator />
            ) : (
                sortedMovies && (
                    <View>
                        <Text style={styles.text1}>Reproduciendose ahora</Text>
                        <FlatList
                            testID="movies-list"
                            style={styles.flatList}
                            data={movies}
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
                    </View>
                )
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flatList: {
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    }
});

export default MoviesScreen;
