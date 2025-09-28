export default class Validator {
  validateUsername(name) {
    const re = /[a-zA-Z\d_-]/g;
    const notRe = /(\d{3}|^[-_\d]|[-_\d]$)/g;
    return name.match(re) && !name.match(notRe);
  }
}