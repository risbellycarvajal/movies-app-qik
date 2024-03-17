import React from 'react';
import { render } from '@testing-library/react-native';
import Divider from '..';

describe('Divider', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Divider />);

        const divider = getByTestId('divider');
        expect(divider).toBeTruthy();
        expect(divider.props.style).toMatchObject({
            width: expect.any(Number),
            height: 1,
            backgroundColor: 'gray',
            alignSelf: 'center',
            marginVertical: 20
        });
    });
});
