import { Character } from '../characters/characters'

test('character short name exception', () => {
  expect(() => {new Character('1')}).toThrow(Error);
});

test('character long name exception', () => {
  expect(() => {new Character('12345678901')}).toThrow(Error);
});

test('character check name', () => {
  expect((new Character('name')).name).toBe('name');
});

test('character check health', () => {
  const char = new Character('1234')
  expect(char.health).toBe(100);
});

test('character check level', () => {
  const char = new Character('1234')
  expect(char.level).toBe(1);
});
