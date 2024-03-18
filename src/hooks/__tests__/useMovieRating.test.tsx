import { renderHook, act } from '@testing-library/react-hooks';
import { useMovieRating } from '..';
import { rateMovie } from '../../services';
import { waitFor } from '@testing-library/react-native';
import { useState } from 'react';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}));
jest.mock('../../services');
jest.mock('../../utils');
jest.mock('..', () => ({
    ...jest.requireActual('..'),
    useMovieRating: jest.fn()
}));

describe('useMovieRating', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useState as jest.Mock).mockImplementation(jest.requireActual('react').useState);
        (useMovieRating as jest.Mock).mockImplementation(() => {
            const [rating, setRating] = useState(0);
            return {
                rating,
                hoverRating: 0,
                setHoverRating: jest.fn(),
                handleRating: jest.fn(async (starIndex: number) => {
                    const rateValue = (starIndex + 1) * 2;
                    setRating(rateValue);
                    await rateMovie(1, rateValue);
                })
            };
        });
    });

    it('initial state is correct', () => {
        const { result } = renderHook(() => useMovieRating(1));
        expect(result.current.rating).toBe(0);
        expect(result.current.hoverRating).toBe(0);
    });

    it('handle rating correctly', async () => {
        (rateMovie as jest.Mock).mockResolvedValue({ success: true });

        const { result } = renderHook(() => useMovieRating(1));

        await act(async () => {
            result.current.handleRating(1);
        });

        await waitFor(() => expect(result.current.rating).toBe(4));
        expect(rateMovie).toHaveBeenCalledWith(1, 4);
    });
});
