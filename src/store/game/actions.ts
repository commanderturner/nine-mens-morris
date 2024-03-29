import { SET_GAME_PIECES, IPlayerDictionary, INodeDictionary, ISquareDictionary, ILineDictionary, ICounterDictionary, SET_GAME_TURN, DEPLOY_COUNTER } from "./types";
import { ITurn } from "../../models/Turn";

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

export function setTurn(turn: ITurn){
  return {
    type: SET_GAME_TURN,
    payload: {
      turn,
    }
  }
}
export function deployCounter(nodeId: string){
  return {
    type: DEPLOY_COUNTER,
    payload: { 
      nodeId
    }
  }
}