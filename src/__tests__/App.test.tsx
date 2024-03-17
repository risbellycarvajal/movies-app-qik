import { waitFor, render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
    it('renders correctly', async () => {
        const { getByTestId, toJSON } = render(<App />);

        await waitFor(() => getByTestId('movies-list'), { timeout: 5000 });

        expect(toJSON()).toMatchSnapshot();
    });
});
