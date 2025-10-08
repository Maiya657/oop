import { Character } from "./characters";

export class MagicianCharacter extends Character {
  constructor(name) {
    super(name);
    this._stoned = false;
    this._attack;
  }
  
  calculateAttack(distance) {
    let attackPower = this._attack;
    
    // Уменьшение атаки с расстоянием
    if (distance > 1) {
      attackPower *= (1 - (distance - 1) * 0.1);
    }
    
    // Дополнительное уменьшение если stoned
    if (this.stoned) {
      attackPower -= Math.log2(distance) * 5;
    }
    
    return Math.round(attackPower);
  }

  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Stoned must be boolean');
    }
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  attack(distance) {
    return this.calculateAttack(distance);
  }
}

