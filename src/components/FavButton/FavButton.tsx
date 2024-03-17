import type { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface FavButtonProps {
    isFavorite: boolean;
    toggleFavorite: () => void;
}

const FavButton: FC<FavButtonProps> = ({ isFavorite, toggleFavorite }) => {
    return (
        <TouchableOpacity testID="fav-btn" onPress={toggleFavorite} style={styles.favoriteButton}>
            {isFavorite ? (
                <Image
                    source={require('../../assets/heart.png')}
                    style={styles.heartIcon}
                    testID="heart-icon"
                />
            ) : (
                <Image
                    source={require('../../assets/empty-heart.png')}
                    style={styles.heartIcon}
                    testID="empty-heart-icon"
                />
            )}
        </TouchableOpacity>
    );
};

export default FavButton;
