import { useState } from 'react';
import { rateMovie } from '../services';
import { CustomAlert } from '../utils';

const useMovieRating = (movieId: number) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleRating = async (starIndex: number) => {
        const rateValue = (starIndex + 1) * 2;
        setRating(rateValue);
        const response = await rateMovie(movieId, rateValue);

        if (response.success) {
            CustomAlert({
                title: 'Puntuación enviada',
                description: 'Ha calificado la película correctamente',
                buttonText: 'Ok'
            });
        } else {
            CustomAlert({
                title: 'Puntuación fallida',
                description:
                    'Ha ocurrido un error al intentar calificar la película. Intente nuevamente.',
                buttonText: 'Ok'
            });
        }
    };

    return {
        rating,
        hoverRating,
        setHoverRating,
        handleRating
    };
};

export default useMovieRating;
