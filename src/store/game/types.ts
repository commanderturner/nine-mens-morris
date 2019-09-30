import { IBoardNode } from "../../models/BoardNode";
import { IPlayer } from "../../models/Player";
import { ISquare } from "../../models/Square";
import { ILine } from "../../models/Line";
import { ICounter } from "../../models/Counter";
import { ITurn } from "../../models/Turn";

export type IPlayerDictionary = {[id: string]: IPlayer};
export type INodeDictionary = {[id:string]:IBoardNode};
export type ISquareDictionary = {[id:number]: ISquare};
export type ILineDictionary= {[id: string]:ILine};
export type ICounterDictionary= {[id: string]:ICounter};
export type ITurnDictionary= {[id: string]:ITurn};
export interface IGamePieces {
  players: IPlayerDictionary;
  nodes: INodeDictionary;
  squares: ISquareDictionary;
  lines: ILineDictionary;
  counters: ICounterDictionary;
}

  export interface IGameState extends IGamePieces{
    turns: ITurnDictionary;
  }
  
  // Describing the different ACTION NAMES available
  export const SET_GAME_PIECES = 'SET_GAME_PIECES';
  export const SET_GAME_TURN = 'SET_GAME_TURN';
 

  export interface SetGamePiecesAction {
    type: typeof SET_GAME_PIECES;
    payload: IGamePieces;
  }
  export interface SetGameTurnAction {
    type: typeof SET_GAME_TURN;
    payload: {
      turn: ITurn;
    }
  }


  
  export type GameActionTypes = SetGamePiecesAction | SetGameTurnAction;
  