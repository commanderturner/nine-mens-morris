import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
import { ISquare } from "../../models/Square";
import { ILine } from "../../models/Line";
import { ICounter } from "../../models/Counter";

export type IPlayerDictionary = {[id: number]: IPlayer};
export type INodeDictionary = {[id:string]:IBoardNode};
export type ISquareDictionary = {[id:number]: ISquare};
export type ILineDictionary= {[id: string]:ILine};
export type ICounterDictionary= {[id: string]:ICounter};
export interface IGamePieces {
  players: IPlayerDictionary;
  nodes: INodeDictionary;
  squares: ISquareDictionary;
  lines: ILineDictionary;
  counters: ICounterDictionary;
}
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
  export interface IGameState extends IGamePieces{
    sizes: ISizes;
  }
  
  // Describing the different ACTION NAMES available
  export const SET_GAME_PIECES = 'SET_GAME_PIECES';
  export const SET_GAME_SIZES = 'SET_GAME_SIZES';

  export interface SetGamePiecesAction {
    type: typeof SET_GAME_PIECES;
    payload: IGamePieces;
  }

  export interface SetGameSizesAction {
    type: typeof SET_GAME_SIZES;
    payload: {
      sizes: ISizes;
    };
  }
  
  export type GameActionTypes = SetGamePiecesAction | SetGameSizesAction;
  