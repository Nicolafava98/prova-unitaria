const palindromo = require('../utils/palindromo.js')

test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')
})
describe('palindromo', () => {
    test.each`
      firstValue    |  expectedResult    
      ${"book"}       |         ${"koob"}
      ${"laptop"}     |       ${"potpal"}
      ${"bottLE"}     |         ${"ELttob"}
    `('$firstValue should return $expectedResult', ({firstValue,  expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });