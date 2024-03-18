import { render } from '@testing-library/react-native';
import { useMovieRating } from '../../../hooks';
import { MAX_RATING } from '../../../utils';
import MovieRating from '..';

jest.mock('../../../hooks', () => ({
    ...jest.requireActual('../../../hooks'),
    useMovieRating: jest.fn()
}));

describe('MovieRating', () => {
    it('renders correctly', () => {
        (useMovieRating as jest.Mock).mockReturnValue({
            rating: 0,
            hoverRating: 0,
            setHoverRating: jest.fn(),
            handleRating: jest.fn()
        });

        const { getAllByTestId } = render(<MovieRating movieId={1} />);
        expect(getAllByTestId('star')).toHaveLength(MAX_RATING);
    });
});
