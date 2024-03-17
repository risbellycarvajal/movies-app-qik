import type { FC } from 'react';
import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { rateMovie } from '../../services';
import { CustomAlert } from '../../utils';

interface MovieRatingProps {
    movieId: number;
}

const MovieRating: FC<MovieRatingProps> = ({ movieId }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const MAX_RATING = 5;
    const handleRating = async (starIndex: number) => {
        const rateValue = (starIndex + 1) * 2;
        setRating(rateValue);
        const response = await rateMovie(movieId, rateValue);

        if (response.success) {
            CustomAlert({
                title: 'Puntuacion enviada',
                description: 'Ha calificado la pelicula correctamente',
                buttonText: 'Ok'
            });
        } else {
            CustomAlert({
                title: 'Puntuacion fallida',
                description:
                    'Ha ocurrido un error al intentar calificar la pelicula. Intente nuevamente.',
                buttonText: 'Ok'
            });
        }
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            {Array.from({ length: MAX_RATING }, (_, index) => (
                <TouchableOpacity
                    onPressIn={() => setHoverRating((index + 1) * 2)}
                    onPressOut={() => setHoverRating(0)}
                    onPress={() => handleRating(index)}>
                    <Image
                        style={{ width: 25, height: 25 }}
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
