// 4. В модуле app.js одним импортом импортируйте Game, GameSavingData
//    и функции readGameSaving, writeGameSaving (их при импорте переименуйте в loadGame и saveGame соответственно)
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./game";

const game = new Game();
game.start();
