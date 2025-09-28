import Validator from "../regex/validator";

test('validate check user name', () => {
  const validator = new Validator()
  expect(validator.validateUsername('asd')).toBe(true);
});

test('validate check user name 3 digit', () => {
  const validator = new Validator()
  expect(validator.validateUsername('as567as')).toBe(false);
});

test('validate check user name starts with a digits', () => {
  const validator = new Validator()
  expect(validator.validateUsername('13as567as')).toBe(false);
});

test('validate check user name starts with a dash', () => {
  const validator = new Validator()
  expect(validator.validateUsername('-as567as')).toBe(false);
});

test('validate check user name starts with a underscore', () => {
  const validator = new Validator()
  expect(validator.validateUsername('_as567as')).toBe(false);
});

test('validate check user name ends with a digits', () => {
  const validator = new Validator()
  expect(validator.validateUsername('as567as23')).toBe(false);
});

test('validate check user name ends with a dash', () => {
  const validator = new Validator()
  expect(validator.validateUsername('as567as-')).toBe(false);
});

test('validate check user name ends with a underscore', () => {
  const validator = new Validator()
  expect(validator.validateUsername('as567as_')).toBe(false);
});