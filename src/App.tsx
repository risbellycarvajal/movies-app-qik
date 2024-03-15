import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
    useColorScheme,
    View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getMovies } from './services';
import type { Movies } from './types';

const App: FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };
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
        <SafeAreaView style={backgroundStyle}>
            <View>
                {loading ? (
                    <ActivityIndicator />
                ) : (
                    movies && (
                        <View>
                            <FlatList
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
