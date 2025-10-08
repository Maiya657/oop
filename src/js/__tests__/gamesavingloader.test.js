import GameSavingLoader from "../async/gamesavingloader"

test('game saving loader check', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
})