import type { FC } from 'react';
import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CustomAlert } from '../../utils';
import { styles } from './styles';
import { useFavoriteMovies } from '../../hooks';

interface ListHeaderProps {
    nowPlayingTab: () => void;
    favoriteMoviesTab: () => void;
}

const ListHeader: FC<ListHeaderProps> = ({ nowPlayingTab, favoriteMoviesTab }) => {
    const [selectedTab, setSelectedTab] = useState('nowPlaying');
    const { favoriteMovies } = useFavoriteMovies();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (selectedTab !== 'nowPlaying') {
                        setSelectedTab('nowPlaying');
                        nowPlayingTab();
                    }
                }}>
                <Text style={styles.text}>Peliculas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (selectedTab !== 'favoriteMovies') {
                        if (favoriteMovies.length > 0) {
                            setSelectedTab('favoriteMovies');
                            favoriteMoviesTab();
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

export default ListHeader;
