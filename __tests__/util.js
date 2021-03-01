const { generateText } = require('../util');

describe('Unit test example:', () => {
  test('should output name and age', () => {
    const text = generateText('Max', 20);

    expect(text).toBe('Max (20 years old)');
  });
});
