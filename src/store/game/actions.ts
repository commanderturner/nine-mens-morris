import { SET_GAME_STATE } from "./types";
import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";


export function setGameState(players: IPlayer[], nodes: IBoardNode[]) {
  return {
    type: SET_GAME_STATE,
    payload: {
      players,
      nodes,
    }
  };
}