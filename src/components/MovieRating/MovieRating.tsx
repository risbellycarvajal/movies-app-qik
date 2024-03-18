import type { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useMovieRating } from '../../hooks';
import { MAX_RATING } from '../../utils';
import { styles } from './styles';

interface MovieRatingProps {
    movieId: number;
}

const MovieRating: FC<MovieRatingProps> = ({ movieId }) => {
    const { rating, hoverRating, setHoverRating, handleRating } = useMovieRating(movieId);

    return (
        <View style={styles.container}>
            {Array.from({ length: MAX_RATING }, (_, index) => (
                <TouchableOpacity
                    key={index}
                    onPressIn={() => setHoverRating((index + 1) * 2)}
                    onPressOut={() => setHoverRating(0)}
                    onPress={() => handleRating(index)}>
                    <Image
                        style={styles.stars}
                        testID="star"
                        source={
                            (hoverRating ? hoverRating : rating) >= (index + 1) * 2
                                ? require('../../assets/star.png')
                                : require('../../assets/empty-star.png')
                        }
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default MovieRating;
