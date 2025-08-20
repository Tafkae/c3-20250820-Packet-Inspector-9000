const Kata = require('./kata');

let fixture;

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information

beforeEach(() => {
    fixture = new Kata();
});

test('validateDigitIntegrity should be a function', () => {
    expect(fixture.validateDigitIntegrity).toBeInstanceOf(Function);
});

test('validateDigitIntegrity given 1 should return true', () => {
    const actual = fixture.validateDigitIntegrity(1);
    expect(actual).toBe(true);
});

test("validateDigitIntegrity given 18 should return true", () => {
  const actual = fixture.validateDigitIntegrity(18);
  expect(actual).toBe(true);
});

test('validateDigitIntegrity given 19 should return false', () => {
  const actual = fixture.validateDigitIntegrity(19);
  expect(actual).toBe(false);
})

describe('validateDigitIntegrity', () => {
  it.each([
    [1, true],
    [2, true],
    [3, true],
    [4, true],
    [5, true],
    [11, false],
    [18, true],
    [19, false],
  ])('should correctly identify if "%d" is valid digital integrity', (packetId, expected) => {
    const actual = fixture.validateDigitIntegrity(packetId)
    expect(actual).toBe(expected);
  });
});

test('bulkPacketFilter should process the 1st million valid packet IDs in under 1 sec', () => {
    const start = Date.now();
    const actual = fixture.bulkPacketFilter(1_000_000);
    const end = Date.now();
    expect(actual).toBeDefined();
    expect(end - start).toBeLessThan(1000);
})

test('bulkPacketFilter given 20 should produce 12 valid packet IDs', () => {
    const actual = fixture.bulkPacketFilter(20);
    expect(actual.length).toBe(12);
    expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18]);
})

test('bulkPacketFilter given 1000 should produce 212 valid packet IDs', () => {
    const actual = fixture.bulkPacketFilter(1_000);
    expect(actual.length).toBe(212);
})