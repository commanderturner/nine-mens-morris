import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
  
  export interface GameState {
    players: IPlayer[];
    nodes: IBoardNode[];
  }
  
  // Describing the different ACTION NAMES available
  export const SET_GAME_STATE = "SET_GAME_STATE";
  

  interface SetGameStateAction {
    type: typeof SET_GAME_STATE;
    payload: {
      players: IPlayer[];
      nodes: IBoardNode[];
    };
  }
  
  export type GameActionTypes = SetGameStateAction;
  