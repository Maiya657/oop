import Settings from "../containers/settings";

test ('set theme', () => {
  const settings = new Settings();
  settings.set('theme', 'light');
  expect(settings.get('theme')).toBe('light');
})

test ('get default theme', () => {
  const settings = new Settings();
  expect(settings.get('theme')).toBe('dark');
})

test ('set unknown theme', () => {
  const settings = new Settings();
  expect(() => { settings.set('theme', 'blue') }).toThrow(Error);
})

test ('set unknown param', () => {
  const settings = new Settings();
  expect(() => { settings.set('age', '12+') }).toThrow(Error);
})

test ('settings', () => {
  const settings = new Settings();
  settings.set('theme', 'light');
  expect(settings.settings).toEqual(new Map([
      ['theme', 'light'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]));
})
