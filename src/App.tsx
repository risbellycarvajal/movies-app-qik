import type { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation';
import { ErrorBoundary } from './components';

const App: FC = () => {
    return (
        <NavigationContainer>
            <ErrorBoundary>
                <AppNavigator />
            </ErrorBoundary>
        </NavigationContainer>
    );
};

export default App;
