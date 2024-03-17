import type { ErrorInfo, ReactNode } from 'react';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    errorInfo: ErrorInfo | string;
    error: Error | string;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, errorInfo: '', error: '' };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ error: error, errorInfo: errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <View style={styles.center}>
                    <Text>Ha ocurrido un error.</Text>
                    <Text>Por favor, intente de nuevo mas tarde.</Text>
                </View>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
