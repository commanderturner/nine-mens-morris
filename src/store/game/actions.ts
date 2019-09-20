import { SET_GAME_STATE } from "./types";
import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
import { ISquare } from "../../models/Square";


export function setGameState(players: IPlayer[], nodes: IBoardNode[], squares: ISquare[]) {
  return {
    type: SET_GAME_STATE,
    payload: {
      players,
      nodes,
      squares,
    }
  };
}