import {reverseString} from "../index.js";

describe('test {reverseString}', () => {
    it(`test 'reverse'`, () => {
        expect(reverseString('reverse')).toBe('esrever');
    })
    it(`test empty string`, () => {
        expect(reverseString('')).toBe('');
    })
    it('test string with one symbol', () => {
        expect(reverseString('a')).toBe('a');
    })
})
