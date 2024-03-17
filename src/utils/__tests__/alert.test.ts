import { Alert } from 'react-native';
import { CustomAlert } from '..';

jest.mock('react-native/Libraries/Alert/Alert', () => ({
    alert: jest.fn()
}));

describe('CustomAlert', () => {
    it('calls Alert with the correct parameters', () => {
        const title = 'Test Title';
        const description = 'Test Description';
        const buttonText = 'Test Button';
        const onPressMock = jest.fn();

        CustomAlert({ title, description, buttonText, onPress: onPressMock });

        expect(Alert.alert).toHaveBeenCalledWith(title, description, [
            { text: buttonText, onPress: onPressMock }
        ]);
    });

    it('calls Alert with no onPress function if not provided', () => {
        const title = 'Test Title';
        const description = 'Test Description';
        const buttonText = 'Test Button';

        CustomAlert({ title, description, buttonText });

        expect(Alert.alert).toHaveBeenCalledWith(title, description, [
            { text: buttonText, onPress: undefined }
        ]);
    });
});
