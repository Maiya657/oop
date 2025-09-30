import ErrorRepository from "../containers/map";

test ('error', () => {
  const er = new ErrorRepository([
    {code: 1, description: 'Ошибка 1'},
    {code: 2, description: 'Ошибка 2'}
  ]);
  expect(er.translate(1)).toBe('Ошибка 1');
})

test ('error unknown', () => {
  const er = new ErrorRepository([
    {code: 1, description: 'Ошибка 1'},
    {code: 2, description: 'Ошибка 2'}
  ]);
  expect(er.translate(3)).toBe('Unknown error');
})