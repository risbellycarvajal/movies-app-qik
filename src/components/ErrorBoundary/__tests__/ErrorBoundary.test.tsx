import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import ErrorBoundary from '../ErrorBoundary';

const BadComponent = () => {
    throw new Error('I crashed!');
    return <Text>This text will not be rendered.</Text>;
};

describe('ErrorBoundary', () => {
    it('should display the error message when a child component throws an error', () => {
        const consoleError = console.error;
        console.error = jest.fn();

        const { getByText } = render(
            <ErrorBoundary>
                <BadComponent />
            </ErrorBoundary>
        );

        expect(getByText('Something went wrong.')).toBeTruthy();
        expect(getByText('Please, try again later.')).toBeTruthy();

        console.error = consoleError;
    });

    it('should render the child component when no error is thrown', () => {
        const { getByText } = render(
            <ErrorBoundary>
                <Text>Everything is fine!</Text>
            </ErrorBoundary>
        );

        expect(getByText('Everything is fine!')).toBeTruthy();
    });
});
