export class Character {
  constructor (name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть строкой от 2 до 10 символов.")
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.type;
    this.attack;
    this.defence; 
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.20;
      this.defence *= 1.20;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить уровень умершего!")
    }
  }

  damage(points) {
    if (this.health >= 0) {
       this.health -= points * (1 - this.defence / 100);
    }
  }
}
