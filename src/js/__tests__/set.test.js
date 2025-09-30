import { Bowman } from "../characters/bowman";
import { Zombie } from "../characters/zombie";
import Team from "../containers/set";

test ('add char', () => {
  const t = new Team();
  const char = new Bowman('Ivan');
  t.add(char);
  expect(t.toArray()).toEqual([char]);
})

test ('add multiple chars', () => {
  const t = new Team();
  const char = new Bowman('Ivan');
  t.add(char);
  
  expect(() => {t.add(char);}).toThrow(Error);
})

test ('add all chars', () => {
  const t = new Team();
  const char1 = new Bowman('Ivan');
  const char2 = new Zombie('Alesha');
  t.addAll(char1, char2, char2);
  expect(t.toArray()).toEqual([char1, char2]);
})