import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
import { ISquare } from "../../models/Square";
  
  export interface GameState {
    players: IPlayer[];
    nodes: IBoardNode[];
    squares: ISquare[];
  }
  
  // Describing the different ACTION NAMES available
  export const SET_GAME_STATE = "SET_GAME_STATE";
  

  interface SetGameStateAction {
    type: typeof SET_GAME_STATE;
    payload: {
      players: IPlayer[];
      nodes: IBoardNode[];
      squares: ISquare[];
    };
  }
  
  export type GameActionTypes = SetGameStateAction;
  