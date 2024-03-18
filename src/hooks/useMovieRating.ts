import { useState } from 'react';
import { rateMovie } from '../services';
import { CustomAlert, getAxiosError } from '../utils';
import type { AxiosError } from 'axios';

const useMovieRating = (movieId: number) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleRating = async (starIndex: number) => {
        try {
            const rateValue = (starIndex + 1) * 2;
            setRating(rateValue);
            const response = await rateMovie(movieId, rateValue);

            if (response.success) {
                CustomAlert({
                    title: 'Calificación enviada',
                    description: 'Ha calificado la película correctamente',
                    buttonText: 'Ok'
                });
            } else {
                CustomAlert({
                    title: 'Ha ocurrido un error al intentar calificar la película',
                    description:
                        'Ha ocurrido un error al intentar calificar la película. Intente nuevamente.',
                    buttonText: 'Ok'
                });
            }
        } catch (err) {
            const error = getAxiosError(err as AxiosError);
            CustomAlert({
                title: 'Ha ocurrido un error al intentar calificar la película',
                description: `${error}`,
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
