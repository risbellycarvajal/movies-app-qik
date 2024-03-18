import type { AxiosError } from 'axios';
import type { AxiosReponseData } from '../types';

export const getAxiosError = (error: AxiosError) => {
    const err = (error as AxiosError).response?.data as AxiosReponseData;
    return err?.status_message ? err?.status_message : 'Intente nuevamente';
};
