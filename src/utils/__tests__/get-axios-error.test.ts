import type { AxiosError } from 'axios';
import { getAxiosError } from '..';

describe('getAxiosError', () => {
    it('returns the status message when present', () => {
        const mockedAxiosError = {
            response: {
                data: {
                    status_message: 'Error message from server'
                }
            }
        };

        const result = getAxiosError(mockedAxiosError as AxiosError);
        expect(result).toEqual('Error message from server');
    });

    it('returns a default error message when status_message is not present', () => {
        const mockedAxiosError = {
            response: {
                data: {}
            }
        };

        const result = getAxiosError(mockedAxiosError as AxiosError);
        expect(result).toEqual('Ha ocurrido un error');
    });

    it('returns a default error message when the error does not contain a response object', () => {
        const mockedAxiosError = {};

        const result = getAxiosError(mockedAxiosError as AxiosError);
        expect(result).toEqual('Ha ocurrido un error');
    });
});
