import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Movies: undefined;
    MoviesDetails: { movieId: number };
};

export type MoviesScreenProp = NativeStackScreenProps<RootStackParamList, 'Movies'>;
export type MoviesDetailsScreenProp = NativeStackScreenProps<RootStackParamList, 'MoviesDetails'>;
