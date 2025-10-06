import ArrayBufferConverter from "../arraybuffer/arraybuffer";

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('array buffer check', () => {
  const arrayBuffer = new ArrayBufferConverter();
  arrayBuffer.load(getBuffer());
  expect(arrayBuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})

test('array buffer check wrong format', () => {
  const arrayBuffer = new ArrayBufferConverter();
  expect(() => { arrayBuffer.load('') }).toThrow(Error);
})

test('array buffer check empty buffer', () => {
  const arrayBuffer = new ArrayBufferConverter();
  expect(arrayBuffer.toString()).toBe('');
})