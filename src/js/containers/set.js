export default class Team {
  constructor() {
    this.members = new Set();
  }
    
  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
      return this;
    } else {
      throw new Error("Этот персонаж уже в команде!");
    }
  }

  addAll(...characters) {
    characters.forEach(character => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    })
    return this;
  }

  toArray() {
    return Array.from(this.members);
  }
}