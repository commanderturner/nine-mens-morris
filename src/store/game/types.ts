import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
import { ISquare } from "../../models/Square";
import { ILine } from "../../models/Line";
export interface ISizes {
  baseUnits: {
    boardAreaLength: number;
    baseMultiplier: number;
    squareSize: number;
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
    lines: {[id: string]:ILine};
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
      lines: {[id:string]: ILine};
    };
  }

  export interface SetGameSizesAction {
    type: typeof SET_GAME_SIZES;
    payload: {
      sizes: ISizes;
    };
  }
  
  export type GameActionTypes = SetGameStateAction | SetGameSizesAction;
  