import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_STORAGE_KEY, getGuestSession, isSessionActive, setGuestSession } from '..';

const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('sessionStorage', () => {
    describe('AsyncStorage functions', () => {
        const mockSessionData = { sessionId: '123', expireDate: '2024-01-01' };

        it('sets the guest session data correctly', async () => {
            await setGuestSession(mockSessionData);
            expect(AsyncStorage.setItem).toHaveBeenCalledWith(
                APP_STORAGE_KEY,
                JSON.stringify(mockSessionData)
            );
        });

        it('retrieves the guest session data correctly', async () => {
            mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(mockSessionData));
            const sessionData = await getGuestSession();
            expect(sessionData).toEqual(mockSessionData);
        });

        it('throws an error if there is an issue retrieving the guest session', async () => {
            mockedAsyncStorage.getItem.mockResolvedValueOnce(null);
            await expect(getGuestSession()).rejects.toThrow(
                'Ha ocurrido un error al intentar obtener el guest session.'
            );
        });
    });

    describe('isSessionActive', () => {
        it('returns true if the session has not expired', () => {
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 1);
            const session = {
                sessionId: '123',
                expireDate: futureDate.toISOString().split('T')[0]
            };
            expect(isSessionActive(session)).toBeTruthy();
        });

        it('returns false if the session has expired', () => {
            const pastDate = new Date();
            pastDate.setDate(pastDate.getDate() - 1);
            const session = { sessionId: '123', expireDate: pastDate.toISOString().split('T')[0] };
            expect(isSessionActive(session)).toBeFalsy();
        });
    });
});
