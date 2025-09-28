import phoneNumber from "../regex/phonenumber";

test('phoneNumber check number 1', () => {
  expect(phoneNumber('+7 903 123 44 55')).toBe('+79031234455');
});

test('phoneNumber check number 2', () => {
  expect(phoneNumber('8 (903) 123-44-55')).toBe('+79031234455');
});

test('phoneNumber check number 3', () => {
  expect(phoneNumber('+86 000 000 0000')).toBe('+860000000000');
});

test('phoneNumber check number 4', () => {
  expect(phoneNumber('+123 000 000 0000')).toBe('+1230000000000');
});

test('phoneNumber check number 5', () => {
  expect(phoneNumber('+7-903-123-44-55')).toBe('+79031234455');
});

test('phoneNumber check number 6', () => {
  expect(phoneNumber('+7(903)1234455')).toBe('+79031234455');
});
