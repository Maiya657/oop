export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    for(let i = 0; i < this.characters.length; i++) {
      yield this.characters[i];
    }
  }
}