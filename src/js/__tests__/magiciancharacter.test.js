import { MagicianCharacter } from "../characters/magicionCharacter";

test ('stoned check', () => {
  const char = new MagicianCharacter('Magic');
  char.stoned = true;
  expect(char.stoned).toBe(true);
})

test ('stoned check wrong type ', () => {
  const char = new MagicianCharacter('Magic1');
  expect(() => { char.stoned = 1 }).toThrow(Error);
})