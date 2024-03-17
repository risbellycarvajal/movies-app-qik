import type { FC } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CustomAlert } from '../../utils';
import { styles } from './styles';
import { useFavoriteMovies, useMovies } from '../../hooks';

interface MoviesListChoiceProps {
    nowPlayingBtn: () => void;
    favoritesBtn: () => void;
}

const MoviesListChoice: FC<MoviesListChoiceProps> = ({ nowPlayingBtn, favoritesBtn }) => {
    const { selectedList, setSelectedList } = useMovies();
    const { favoriteMovies } = useFavoriteMovies();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (selectedList !== 'nowPlaying') {
                        setSelectedList('nowPlaying');
                        nowPlayingBtn();
                    }
                }}>
                <Text style={styles.text}>Peliculas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (selectedList !== 'favoriteMovies') {
                        if (favoriteMovies.length > 0) {
                            setSelectedList('favoriteMovies');
                            favoritesBtn();
                        } else {
                            CustomAlert({
                                title: 'Favoritas',
                                description: 'No tienes peliculas favoritas',
                                buttonText: 'Ok'
                            });
                        }
                    }
                }}>
                <Text style={styles.text}>Favoritas</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MoviesListChoice;
