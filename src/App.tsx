import type { FC } from 'react';
import type { Movies } from './types';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import { getMovies } from './services';

const App: FC = () => {
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

    return (
        <SafeAreaView>
            <View>
                {loading ? (
                    <ActivityIndicator />
                ) : (
                    movies && (
                        <View>
                            <FlatList
                                testID="movies-list"
                                data={movies}
                                stickyHeaderIndices={[0]}
                                renderItem={({ item }) => <Text>{item.title}</Text>}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    )
                )}
            </View>
        </SafeAreaView>
    );
};

export default App;
