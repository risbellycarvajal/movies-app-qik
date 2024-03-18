import type { FC } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { useMovies } from '../../hooks';

interface MoviesListChoiceProps {
    nowPlayingBtn: () => void;
    favoritesBtn: () => void;
}

const MoviesListChoice: FC<MoviesListChoiceProps> = ({ nowPlayingBtn, favoritesBtn }) => {
    const { setSelectedList } = useMovies();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setSelectedList('nowPlaying');
                    nowPlayingBtn();
                }}>
                <Text style={styles.text}>Películas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setSelectedList('favoriteMovies');
                    favoritesBtn();
                }}>
                <Text style={styles.text}>Favoritas</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MoviesListChoice;
