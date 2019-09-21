import { SET_GAME_STATE, ISizes, SET_GAME_SIZES } from "./types";
import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
import { ISquare } from "../../models/Square";


export function setGameState(players: {[id: number]: IPlayer},nodes: {[id:string]:IBoardNode},squares: {[id:number]: ISquare}) {
  return {
    type: SET_GAME_STATE,
    payload: {
      players,
      nodes,
      squares,
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