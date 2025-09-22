import { Zombie } from '../characters/zombie';

test('zombie check type', () => {
  const char = new Zombie ('Zombie');
  expect(char.type).toBe('Zombie');
});

test('zombie check attack', () => {
  const char = new Zombie ('Zombie');
  expect(char.attack).toBe(40);
});

test('zombie check defence', () => {
  const char = new Zombie ('Zombie');
  expect(char.defence).toBe(10);
});