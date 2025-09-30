export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);

    this.allowedValues = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]
    ]);

    this.userSettings = new Map();
  }

 set(name, value) {
    if (!this.allowedValues.has(name)) {
      throw new Error(`Настройка '${name}' не существует`);
    }
    
    if (!this.allowedValues.get(name).find(allowedValue => allowedValue === value)) {
      throw new Error(`Для параметра '${name}' устанавливается недопустимое значение ${value}`);
    }

    this.userSettings.set(name, value);
    return this;
  }

  get(name) {
    return this.userSettings.get(name) ?? this.defaultSettings.get(name);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
