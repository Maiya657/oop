export default class ErrorRepository {
  constructor(codes) {
    this.errors = new Map();

    codes.forEach(code => {
      this.errors.set(code.code, code.description);
    })
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return 'Unknown error';  
    }
  }
}
