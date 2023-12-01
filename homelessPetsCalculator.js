// homelessPetsCalculator.test.js

const calculateHomelessPets = require('./homelessPetsCalculator');

describe('calculateHomelessPets', () => {
  it('calculates the number of homeless pets correctly with positive values', () => {
    const result = calculateHomelessPets(10, 5, 3);
    expect(result).toBe(2);
  });

  it('handles zero as the total number of pets', () => {
    const result = calculateHomelessPets(0, 5, 3);
    expect(result).toBe(0);
  });

  it('handles zero as the number of adopted pets', () => {
    const result = calculateHomelessPets(8, 0, 3);
    expect(result).toBe(5);
  });

  it('throws an error for negative values', () => {
    expect(() => calculateHomelessPets(-5, 3, 2)).toThrowError('Invalid input');
    expect(() => calculateHomelessPets(8, -3, 2)).toThrowError('Invalid input');
    expect(() => calculateHomelessPets(8, 3, -2)).toThrowError('Invalid input');
  });

  // Add more test cases as needed
});


