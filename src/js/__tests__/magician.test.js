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

test('calculate attack with distance 3', () => {
  const char = new Magician ('Mag');
  expect(char.calculateAttack(3)).toBe(8);
})

test('calculate stoned attack', () => {
  const char = new Magician ('Mag');
  char.stoned = true;
  expect(char.calculateAttack(2)).toBe(4);
})

test('calculate attack with distance 1', () => {
  const char = new Magician ('Mag');
  expect(char.calculateAttack(1)).toBe(10);
})