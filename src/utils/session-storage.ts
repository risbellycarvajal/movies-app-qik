import { parseISO } from 'date-fns';
import type { GuestSession } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_STORAGE_KEY } from '.';

export const isSessionActive = (session: GuestSession): boolean => {
    const [date] = session.expireDate.split(' ');
    const sessionDate = parseISO(date).getTime();
    const dateNow = new Date().getTime();
    if (dateNow < sessionDate) {
        return true;
    }
    return false;
};

export const getGuestSession = async (): Promise<GuestSession> => {
    try {
        const data = await AsyncStorage.getItem(APP_STORAGE_KEY);

        if (data) {
            return JSON.parse(data);
        } else {
            throw new Error('Ha ocurrido un error al intentar obtener el guest session.');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const setGuestSession = async (sessionData: GuestSession) => {
    try {
        await AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(sessionData));
    } catch (error) {
        console.error(error);
        throw error;
    }
};
