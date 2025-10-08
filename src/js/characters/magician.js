import { MagicianCharacter } from "./magicionCharacter";

export class Magician extends MagicianCharacter {
  constructor (name) {
    super(name);
    this.type = 'Magician';
    this._attack = 10;
    this.defence = 40;
  }
}