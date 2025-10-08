import GameSavingLoader from "../async/gamesavingloader";
import read from "../async/reader";
import json from "../async/parser";

jest.mock('../async/reader');
jest.mock('../async/parser');

beforeEach(() => {
  jest.resetAllMocks();
});

test('game saving loader check error', async () => {
  expect.assertions(1);

  read.mockReturnValue(new Promise((resolve, reject) => reject('tExt')));

  try {
    await GameSavingLoader.load('tExt');
  } catch(e) {
    expect(e).toEqual('tExt');
  }
})

test('game saving loader check error parser', async () => {
  expect.assertions(1);

  read.mockReturnValue(new Promise((resolve) => resolve('{}')));

  json.mockReturnValue(new Promise((resolve, reject) => reject('tExt')));

  try {
    await GameSavingLoader.load('tExt');
  } catch(e) {
    expect(e).toEqual('tExt');
  }
})