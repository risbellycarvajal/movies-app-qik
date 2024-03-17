import { Alert } from 'react-native';

interface CustomAlertProps {
    title: string;
    description: string;
    buttonText: string;
    onPress?: () => void;
}

export const CustomAlert = ({ title, description, buttonText, onPress }: CustomAlertProps) =>
    Alert.alert(`${title}`, `${description}`, [
        {
            text: `${buttonText}`,
            onPress: onPress
        }
    ]);
