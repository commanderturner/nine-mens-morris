import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
import { ISquare } from "../../models/Square";
export interface ISizes {
  baseUnits: {
    boardAreaLength: number;
    baseMultiplier: number;
  }
  window: {
    width: number;
    height: number;
  }
}
  export interface IGameState {
    players: {[id: number]: IPlayer};
    nodes: {[id:string]:IBoardNode};
    squares: {[id:number]: ISquare};
    sizes: ISizes;
  }
  
  // Describing the different ACTION NAMES available
  export const SET_GAME_STATE = 'SET_GAME_STATE';
  export const SET_GAME_SIZES = 'SET_GAME_SIZES';

  export interface SetGameStateAction {
    type: typeof SET_GAME_STATE;
    payload: {
      players: {[id: number]: IPlayer};
      nodes: {[id:string]:IBoardNode};
      squares: {[id:number]: ISquare};
    };
  }

  export interface SetGameSizesAction {
    type: typeof SET_GAME_SIZES;
    payload: {
      sizes: ISizes;
    };
  }
  
  export type GameActionTypes = SetGameStateAction | SetGameSizesAction;
  