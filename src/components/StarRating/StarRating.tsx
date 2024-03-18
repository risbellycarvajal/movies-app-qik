import type { FC } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { Image, View } from 'react-native';
import { styles } from './styles';
import FullImgStar from '../../assets/star.png';
import HalfImgStar from '../../assets/half-star.png';
import EmptyImgStar from '../../assets/empty-star.png';

interface StarRatingProps {
    voteAverage: number;
    starSize?: number;
}

const StarRating: FC<StarRatingProps> = ({ voteAverage, starSize = 20 }) => {
    const fullStars = Math.floor(voteAverage / 2);
    const halfStar = (voteAverage / 2) % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const renderStars = (count: number, starPath: ImageSourcePropType, keyPrefix: string) =>
        [...Array(count)].map((_, i) => (
            <Image
                testID={`${keyPrefix}-star-${i}`}
                key={`${keyPrefix}-${i}`}
                source={starPath}
                style={[styles.star, { width: starSize, height: starSize }]}
            />
        ));

    return (
        <View style={styles.starsContainer}>
            {renderStars(fullStars, FullImgStar, 'full')}
            {halfStar > 0 && renderStars(halfStar, HalfImgStar, 'half')}
            {renderStars(emptyStars, EmptyImgStar, 'empty')}
        </View>
    );
};

export default StarRating;
