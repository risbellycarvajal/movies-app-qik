import { render, fireEvent } from '@testing-library/react-native';
import FavButton from '..';

describe('FavButton', () => {
    const toggleFavorite = jest.fn();
    it('renders filled heart when isFavorite is true', () => {
        const { getByTestId } = render(
            <FavButton isFavorite={true} toggleFavorite={toggleFavorite} />
        );

        const heartIcon = getByTestId('heart-icon');
        expect(heartIcon).toBeTruthy();
    });

    it('renders empty heart when isFavorite is false', () => {
        const { getByTestId } = render(
            <FavButton isFavorite={false} toggleFavorite={toggleFavorite} />
        );

        const emptyHeartIcon = getByTestId('empty-heart-icon');
        expect(emptyHeartIcon).toBeTruthy();
    });

    it('calls toggleFavorite when pressed', () => {
        const { getByTestId } = render(
            <FavButton isFavorite={false} toggleFavorite={toggleFavorite} />
        );

        const touchableOpacity = getByTestId('fav-btn');
        fireEvent.press(touchableOpacity);
        expect(toggleFavorite).toHaveBeenCalled();
    });
});
