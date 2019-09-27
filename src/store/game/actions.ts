import { SET_GAME_PIECES, ISizes, SET_GAME_SIZES, IPlayerDictionary, INodeDictionary, ISquareDictionary, ILineDictionary, ICounterDictionary } from "./types";

export function setGameState(players:IPlayerDictionary,nodes:INodeDictionary,squares: ISquareDictionary, lines: ILineDictionary, counters: ICounterDictionary) {
  return {
    type: SET_GAME_PIECES,
    payload: {
      players,
      nodes,
      squares,
      lines,
      counters
    }
  };
}
export function setGameSizes(sizes: ISizes) {
  return {
    type: SET_GAME_SIZES,
    payload: {
      sizes
    }
  };
}