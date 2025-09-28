import { Bowman } from '../characters/bowman';

test('bowman check type', () => {
  const char = new Bowman('Bowman')
  expect(char.type).toBe('Bowman');
});

test('bowman check attack', () => {
  const char = new Bowman('Bowman')
  expect(char.attack).toBe(25);
});

test('bowman check defence', () => {
  const char = new Bowman('Bowman')
  expect(char.defence).toBe(25);
});

test('bowman check levelUp level', () => {
  const char = new Bowman('Bowman');
  char.levelUp();
  expect(char.level).toBe(2);
});

test('bowman check levelUp attack', () => {
  const char = new Bowman('Bowman');
  char.levelUp();
  expect(char.attack).toBe(30);
});

test('bowman check levelUp defence', () => {
  const char = new Bowman('Bowman');
  char.levelUp();
  expect(char.defence).toBe(30);
});

test('bowman check levelUp health', () => {
  const char = new Bowman('Bowman');
  char.health = 10;
  char.levelUp();
  expect(char.health).toBe(100);
});

test('bowman check levelUp health exception', () => {
  const char = new Bowman('Bowman');
  char.health = -1;
  expect(() => {char.levelUp()}).toThrow(Error);
});

test('bowman check damage', () => {
  const char = new Bowman('Bowman');
  char.damage(10);
  expect(char.health).toBe(92.5);
});

test('bowman check damage with negative health', () => {
  const char = new Bowman('Bowman');
  char.health = -1;
  char.damage(10);
  expect(char.health).toBe(-1);
});