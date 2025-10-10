export function canIterate(iterator) {
  return iterator && typeof iterator[Symbol.iterator] === 'function';
}