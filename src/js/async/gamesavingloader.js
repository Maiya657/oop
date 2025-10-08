import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then(data => {
        json(data).then(value => resolve(value), error => reject(error));
      }, error => reject(error));
    })
  }
}