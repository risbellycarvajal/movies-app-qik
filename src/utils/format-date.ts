import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (date: string): string => {
    return date ? format(parseISO(date), 'dd MMM, yyyy', { locale: es }) : '';
};
