import { formatDate } from '..';

describe('formatDate', () => {
    it('formats a given date string to "dd MMM, yyyy" in Spanish', () => {
        const inputDate = '2021-01-01';
        const expectedOutput = '01 ene, 2021';
        expect(formatDate(inputDate)).toEqual(expectedOutput);
    });

    it('returns an empty string for an empty input', () => {
        const emptyInput = '';
        expect(formatDate(emptyInput)).toEqual('');
    });
});
