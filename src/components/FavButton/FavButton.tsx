import type { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface FavButtonProps {
    isFavorite: boolean;
    toggleFavorite: () => void;
}

const FavButton: FC<FavButtonProps> = ({ isFavorite, toggleFavorite }) => {
    return (
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
            {isFavorite ? (
                <Image source={require('../../assets/heart.png')} style={styles.heartIcon} />
            ) : (
                <Image source={require('../../assets/empty-heart.png')} style={styles.heartIcon} />
            )}
        </TouchableOpacity>
    );
};

export default FavButton;
