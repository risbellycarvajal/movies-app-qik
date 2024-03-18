import { render } from '@testing-library/react-native';
import StarRating from '..';

describe('StarRating', () => {
    it('renders correct stars based on voteAverage', () => {
        const { queryByTestId, rerender } = render(<StarRating voteAverage={8} starSize={20} />);

        expect(queryByTestId('full-star-0')).toBeTruthy();
        expect(queryByTestId('half-star-0')).toBeFalsy();
        expect(queryByTestId('empty-star-0')).toBeTruthy();

        rerender(<StarRating voteAverage={7} starSize={20} />);
        expect(queryByTestId('half-star-0')).toBeTruthy();
    });

    it('applies the starSize prop correctly', () => {
        const { queryByTestId } = render(<StarRating voteAverage={10} starSize={30} />);

        const fullStarImage = queryByTestId('full-star-0');
        expect(fullStarImage?.props.style).toContainEqual({ width: 30, height: 30 });
    });
});
