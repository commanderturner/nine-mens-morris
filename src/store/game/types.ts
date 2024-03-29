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
    currentTurnId: string | null;
  }
  
  // Describing the different ACTION NAMES available
  export const SET_GAME_PIECES = 'SET_GAME_PIECES';
  export const SET_GAME_TURN = 'SET_GAME_TURN';
  export const DEPLOY_COUNTER = 'DEPLOY_COUNTER';
  export const UPDATE_COUNTER = 'UPDATE_COUNTER';
  export const UPDATE_NODE = 'UPDATE_NODE';
  export const UPDATE_TURN = 'UPDATE_TURN';
 

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
  export interface DeployCounterAction {
    type: typeof DEPLOY_COUNTER;
    payload: {
      nodeId: string;
    }
  }
  export interface UpdateCounterAction {
    type: typeof UPDATE_COUNTER;
    payload: {
      counter: ICounter;
    }
  }

  export interface UpdateNodeAction {
    type: typeof UPDATE_NODE;
    payload: {
      node: IBoardNode;
    }
  }
  export interface UpdateTurnAction {
    type: typeof UPDATE_TURN;
    payload: {
      turn: ITurn;
    }
  }


  
  export type GameActionTypes = SetGamePiecesAction | SetGameTurnAction | DeployCounterAction | UpdateCounterAction | UpdateNodeAction | UpdateTurnAction;
  