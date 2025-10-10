export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    let start = 0;
    const characters = this.characters;

    return {
      next() {
        if (start < characters.length) {
          return {
            done: false,
            value: characters[start++]
          }
        }
        return {
          done: true
        }
      }
    }; 
  }
}