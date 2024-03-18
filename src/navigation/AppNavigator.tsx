import type { FC } from 'react';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from '../screens/Movies';
import MoviesDetails from '../screens/MoviesDetails';
import type { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Movies" component={MoviesScreen} options={{ title: 'Películas' }} />
            <Stack.Screen
                name="MoviesDetails"
                component={MoviesDetails}
                options={{ title: 'Información' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
