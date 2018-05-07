const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
    it('should return "fizz-buzz" when input is divisible by 15', () => {
        [30, 45, 60].forEach((input) => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });
    it('should return "fizz" when input is divisible by 3', () => {
        [3, 6, 9, 12].forEach((input) => {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });
    it('should return "buzz" when input is divisible by 5', () => {
        [5, 10, 20].forEach((input) => {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });
    it('should return number for values not divisible by 3 or 5', () => {
        [1, 2, 4, 7, 8].forEach((input) => {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });
    it('should return an error if input is not a number', () => {
        const notANumber = [true, false, 'unicorn', function() {}, [1, 2, 3]];
        notANumber.forEach((input) => {
            expect(() => {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});
