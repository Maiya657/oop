import { MagicianCharacter } from "./magicionCharacter";

export class Daemon extends MagicianCharacter {
  constructor (name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}