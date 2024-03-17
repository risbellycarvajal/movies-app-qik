import type { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation';
import { ErrorBoundary } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ErrorBoundary>
                    <AppNavigator />
                </ErrorBoundary>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
