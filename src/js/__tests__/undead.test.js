import { Undead } from '../characters/undead';

test('undead check type', () => {
  const char = new Undead ('Undead');
  expect(char.type).toBe('Undead');
});

test('undead check attack', () => {
  const char = new Undead ('Undead');
  expect(char.attack).toBe(25);
});

test('undead check defence', () => {
  const char = new Undead ('Undead');
  expect(char.defence).toBe(25);
});