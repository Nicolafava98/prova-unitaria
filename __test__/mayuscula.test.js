const isUpperCase = require('../utils/mayuscula');

test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})
describe('mayuscula', () => {
    test.each`
      firstValue    |  expectedResult    
      ${"NICO"}       |         ${true}
      ${"Pen"}        |         ${false}
      ${"GLAss"}      |         ${false}
      ${"TAB!E"}      |         ${true}
    `('$firstValue should return $expectedResult', ({firstValue,  expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });