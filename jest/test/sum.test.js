// import {jest} from '@jest/globals';

// jest.useFakeTimers();
import Sum from '../src/sum';

describe('season 1', () => {
    test('episode 1', ()=>{
        expect(Sum(1, 2)).toBe(3);
    });
});