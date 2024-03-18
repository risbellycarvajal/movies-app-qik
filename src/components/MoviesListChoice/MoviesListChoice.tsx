import { useEffect } from 'react';
import type { FC } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { useFavoriteMovies, useMovies } from '../../hooks';

interface MoviesListChoiceProps {
    nowPlayingBtn: () => void;
    favoritesBtn: () => void;
}

const MoviesListChoice: FC<MoviesListChoiceProps> = ({ nowPlayingBtn, favoritesBtn }) => {
    const { selectedList, setSelectedList } = useMovies();
    const { favoriteMovies } = useFavoriteMovies();

    useEffect(() => {
        if (!favoriteMovies.length) {
            setSelectedList('nowPlaying');
        }
    }, [selectedList, favoriteMovies]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={selectedList === 'nowPlaying' ? styles.selectedButton : styles.button}
                onPress={() => {
                    setSelectedList('nowPlaying');
                    nowPlayingBtn();
                }}>
                <Text style={styles.text}>Películas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={selectedList === 'favoriteMovies' ? styles.selectedButton : styles.button}
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
