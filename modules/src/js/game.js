// 2. В модуле game импорт класса Character
import { Character } from './domain';

// 3. Экспорт из модуля game класса Game в качестве дефолтного
export default class Game {
    start() {
      console.log('game started');
    }
  }
  
  // 3. Экспорт из модуля game класса GameSavingData
  export class GameSavingData {
  }

  // 3. Экспорт из модуля game функций readGameSaving и writeGameSaving
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }
