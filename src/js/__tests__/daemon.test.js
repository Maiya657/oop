import { Daemon } from '../characters/daemon';

test('daemon check type', () => {
  const char = new Daemon ('Daemon');
  expect(char.type).toBe('Daemon');
});

test('daemon check attack', () => {
  const char = new Daemon ('Daemon');
  expect(char.attack).toBe(10);
});

test('daemon check defence', () => {
  const char = new Daemon ('Daemon');
  expect(char.defence).toBe(40);
});