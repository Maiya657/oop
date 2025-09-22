import { Swordsman } from '../characters/swordsman';

test('swordsman check type', () => {
  const char = new Swordsman ('Swordsman');
  expect(char.type).toBe('Swordsman');
});

test('swordsman check attack', () => {
  const char = new Swordsman ('Swordsman');
  expect(char.attack).toBe(40);
});

test('swordsman check defence', () => {
  const char = new Swordsman ('Swordsman');
  expect(char.defence).toBe(10);
});