import { Magician } from '../characters/magician';

test('magician check type', () => {
  const char = new Magician ('Magician');
  expect(char.type).toBe('Magician');
});

test('magician check attack', () => {
  const char = new Magician ('Magician');
  expect(char.attack).toBe(10);
});

test('magician check defence', () => {
  const char = new Magician ('Magician');
  expect(char.defence).toBe(40);
});