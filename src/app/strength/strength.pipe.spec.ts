import { StrengthPipe } from './strength.pipe';

describe('Strengh Pipe', () => {

    it('should displeat weak if strength is 5', () => {
        const strengthPipe = new StrengthPipe();
        const val = strengthPipe.transform(5);

        expect(val).toEqual('5 (weak)');
    });
    it('should displeat weak if strength is 10', () => {
        const strengthPipe = new StrengthPipe();
        const val = strengthPipe.transform(10);

        expect(val).toEqual('10 (strong)');
    });
});
