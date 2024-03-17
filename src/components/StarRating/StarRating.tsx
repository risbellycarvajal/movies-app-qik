import type { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface StarRatingProps {
    voteAverage: number;
    starSize?: number;
}

const StarRating: FC<StarRatingProps> = ({ voteAverage, starSize = 20 }) => {
    const fullStars = Math.floor(voteAverage / 2);
    const halfStar = voteAverage / 2 - fullStars > 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
        <View style={styles.starsContainer}>
            {[...Array(fullStars)].map((_, i) => (
                <Image
                    key={`full-${i}`}
                    source={require('../../assets/star.png')}
                    style={[styles.star, { width: starSize, height: starSize }]}
                />
            ))}
            {halfStar > 0 && (
                <Image
                    source={require('../../assets/half-star.png')}
                    style={[styles.star, { width: starSize, height: starSize }]}
                />
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <Image
                    key={`full-${i}`}
                    source={require('../../assets/empty-star.png')}
                    style={[styles.star, { width: starSize, height: starSize }]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    star: {
        marginRight: 4
    }
});

export default StarRating;
