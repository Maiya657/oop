export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error('Параметр должен быть объектом типа ArrayBuffer.');
    }
    this.buffer = buffer;
  }

  toString() {
    if (!this.buffer) {
      return '';
    }

    const uint16Array = new Uint16Array(this.buffer);
    let result = '';
    for (let i = 0; i < uint16Array.length; i++) {
        result += String.fromCharCode(uint16Array[i]);
    }
    return result;
  }
}